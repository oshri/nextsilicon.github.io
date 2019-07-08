import { ApplicationRef, ReflectiveInjector } from '@angular/core';
import { discardPeriodicTasks, fakeAsync, tick } from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';
import { Subject } from 'rxjs';
import { Logger } from '@ns-core/services/logger/logger.service';
import { SwUpdatesService } from './swUpdates.service';
describe('SwUpdatesService', function () {
    var injector;
    var appRef;
    var service;
    var swu;
    var checkInterval;
    // Helpers
    // NOTE:
    //   Because `SwUpdatesService` uses the `interval` operator, it needs to be instantiated and
    //   destroyed inside the `fakeAsync` zone (when `fakeAsync` is used for the test). Thus, we can't
    //   run `setup()`/`tearDown()` in `beforeEach()`/`afterEach()` blocks. We use the `run()` helper
    //   to call them inside each test's zone.
    var setup = function (isSwUpdateEnabled) {
        injector = ReflectiveInjector.resolveAndCreate([
            { provide: ApplicationRef, useClass: MockApplicationRef },
            { provide: Logger, useClass: MockLogger },
            {
                provide: SwUpdate,
                useFactory: function () { return new MockSwUpdate(isSwUpdateEnabled); }
            },
            SwUpdatesService
        ]);
        appRef = injector.get(ApplicationRef);
        service = injector.get(SwUpdatesService);
        swu = injector.get(SwUpdate);
        checkInterval = service.checkInterval;
    };
    var tearDown = function () { return service.ngOnDestroy(); };
    var run = function (specFn, isSwUpdateEnabled) {
        if (isSwUpdateEnabled === void 0) { isSwUpdateEnabled = true; }
        return function () {
            setup(isSwUpdateEnabled);
            specFn();
            tearDown();
        };
    };
    it('should create', run(function () {
        expect(service).toBeTruthy();
    }));
    it('should start checking for updates when instantiated (once the app stabilizes)', run(function () {
        expect(swu.checkForUpdate).not.toHaveBeenCalled();
        appRef.isStable.next(false);
        expect(swu.checkForUpdate).not.toHaveBeenCalled();
        appRef.isStable.next(true);
        expect(swu.checkForUpdate).toHaveBeenCalled();
    }));
    it('should periodically check for updates', fakeAsync(run(function () {
        appRef.isStable.next(true);
        swu.checkForUpdate.calls.reset();
        tick(checkInterval);
        expect(swu.checkForUpdate).toHaveBeenCalledTimes(1);
        tick(checkInterval);
        expect(swu.checkForUpdate).toHaveBeenCalledTimes(2);
        appRef.isStable.next(false);
        tick(checkInterval);
        expect(swu.checkForUpdate).toHaveBeenCalledTimes(3);
        discardPeriodicTasks();
    })));
    it('should activate available updates immediately', fakeAsync(run(function () {
        appRef.isStable.next(true);
        expect(swu.activateUpdate).not.toHaveBeenCalled();
        swu.$$availableSubj.next({ available: { hash: 'foo' } });
        expect(swu.activateUpdate).toHaveBeenCalled();
    })));
    it('should keep periodically checking for updates even after one is available/activated', fakeAsync(run(function () {
        appRef.isStable.next(true);
        swu.checkForUpdate.calls.reset();
        tick(checkInterval);
        expect(swu.checkForUpdate).toHaveBeenCalledTimes(1);
        swu.$$availableSubj.next({ available: { hash: 'foo' } });
        tick(checkInterval);
        expect(swu.checkForUpdate).toHaveBeenCalledTimes(2);
        tick(checkInterval);
        expect(swu.checkForUpdate).toHaveBeenCalledTimes(3);
        discardPeriodicTasks();
    })));
    it('should emit on `updateActivated` when an update has been activated', run(function () {
        var activatedVersions = [];
        service.updateActivated.subscribe(function (v) { return activatedVersions.push(v); });
        swu.$$availableSubj.next({ available: { hash: 'foo' } });
        swu.$$activatedSubj.next({ current: { hash: 'bar' } });
        swu.$$availableSubj.next({ available: { hash: 'baz' } });
        swu.$$activatedSubj.next({ current: { hash: 'qux' } });
        expect(activatedVersions).toEqual(['bar', 'qux']);
    }));
    describe('when `SwUpdate` is not enabled', function () {
        var runDeactivated = function (specFn) { return run(specFn, false); };
        it('should not check for updates', fakeAsync(runDeactivated(function () {
            appRef.isStable.next(true);
            tick(checkInterval);
            tick(checkInterval);
            swu.$$availableSubj.next({ available: { hash: 'foo' } });
            swu.$$activatedSubj.next({ current: { hash: 'bar' } });
            tick(checkInterval);
            tick(checkInterval);
            expect(swu.checkForUpdate).not.toHaveBeenCalled();
        })));
        it('should not activate available updates', fakeAsync(runDeactivated(function () {
            swu.$$availableSubj.next({ available: { hash: 'foo' } });
            expect(swu.activateUpdate).not.toHaveBeenCalled();
        })));
        it('should never emit on `updateActivated`', runDeactivated(function () {
            var activatedVersions = [];
            service.updateActivated.subscribe(function (v) { return activatedVersions.push(v); });
            swu.$$availableSubj.next({ available: { hash: 'foo' } });
            swu.$$activatedSubj.next({ current: { hash: 'bar' } });
            swu.$$availableSubj.next({ available: { hash: 'baz' } });
            swu.$$activatedSubj.next({ current: { hash: 'qux' } });
            expect(activatedVersions).toEqual([]);
        }));
    });
    describe('when destroyed', function () {
        it('should not schedule a new check for update (after current check)', fakeAsync(run(function () {
            appRef.isStable.next(true);
            expect(swu.checkForUpdate).toHaveBeenCalled();
            service.ngOnDestroy();
            swu.checkForUpdate.calls.reset();
            tick(checkInterval);
            tick(checkInterval);
            expect(swu.checkForUpdate).not.toHaveBeenCalled();
        })));
        it('should not schedule a new check for update (after activating an update)', fakeAsync(run(function () {
            appRef.isStable.next(true);
            expect(swu.checkForUpdate).toHaveBeenCalled();
            service.ngOnDestroy();
            swu.checkForUpdate.calls.reset();
            swu.$$availableSubj.next({ available: { hash: 'foo' } });
            swu.$$activatedSubj.next({ current: { hash: 'baz' } });
            tick(checkInterval);
            tick(checkInterval);
            expect(swu.checkForUpdate).not.toHaveBeenCalled();
        })));
        it('should not activate available updates', fakeAsync(run(function () {
            service.ngOnDestroy();
            swu.$$availableSubj.next({ available: { hash: 'foo' } });
            expect(swu.activateUpdate).not.toHaveBeenCalled();
        })));
        it('should stop emitting on `updateActivated`', run(function () {
            var activatedVersions = [];
            service.updateActivated.subscribe(function (v) { return activatedVersions.push(v); });
            swu.$$availableSubj.next({ available: { hash: 'foo' } });
            swu.$$activatedSubj.next({ current: { hash: 'bar' } });
            service.ngOnDestroy();
            swu.$$availableSubj.next({ available: { hash: 'baz' } });
            swu.$$activatedSubj.next({ current: { hash: 'qux' } });
            expect(activatedVersions).toEqual(['bar']);
        }));
    });
});
// Mocks
var MockApplicationRef = /** @class */ (function () {
    function MockApplicationRef() {
        this.isStable = new Subject();
    }
    return MockApplicationRef;
}());
var MockLogger = /** @class */ (function () {
    function MockLogger() {
        this.log = jasmine.createSpy('MockLogger.log');
    }
    return MockLogger;
}());
var MockSwUpdate = /** @class */ (function () {
    function MockSwUpdate(isEnabled) {
        this.isEnabled = isEnabled;
        this.$$availableSubj = new Subject();
        this.$$activatedSubj = new Subject();
        this.available = this.$$availableSubj.asObservable();
        this.activated = this.$$activatedSubj.asObservable();
        this.activateUpdate = jasmine.createSpy('MockSwUpdate.activateUpdate').and.callFake(function () { return Promise.resolve(); });
        this.checkForUpdate = jasmine.createSpy('MockSwUpdate.checkForUpdate').and.callFake(function () { return Promise.resolve(); });
    }
    return MockSwUpdate;
}());
//# sourceMappingURL=swUpdates.service.spec.js.map