import { ReflectiveInjector } from '@angular/core';
import { GaService } from './googleAnalytics.service';
import { WindowToken } from '../window';
describe('GaService', function () {
    var gaService;
    var injector;
    var gaSpy;
    var mockWindow;
    beforeEach(function () {
        gaSpy = jasmine.createSpy('ga');
        mockWindow = { ga: gaSpy };
        injector = ReflectiveInjector.resolveAndCreate([GaService, { provide: WindowToken, useFactory: function () { return mockWindow; } }]);
        gaService = injector.get(GaService);
    });
    it('should initialize ga with "create" when constructed', function () {
        var first = gaSpy.calls.first().args;
        expect(first[0]).toBe('create');
    });
    describe('#locationChanged(url)', function () {
        it('should send page to url w/ leading slash', function () {
            gaService.locationChanged('testUrl');
            expect(gaSpy).toHaveBeenCalledWith('set', 'page', '/testUrl');
            expect(gaSpy).toHaveBeenCalledWith('send', 'pageview');
        });
    });
    describe('#sendPage(url)', function () {
        it('should set page to url w/ leading slash', function () {
            gaService.sendPage('testUrl');
            expect(gaSpy).toHaveBeenCalledWith('set', 'page', '/testUrl');
        });
        it('should send "pageview" ', function () {
            gaService.sendPage('testUrl');
            expect(gaSpy).toHaveBeenCalledWith('send', 'pageview');
        });
        it('should not send twice with same URL, back-to-back', function () {
            gaService.sendPage('testUrl');
            gaSpy.calls.reset();
            gaService.sendPage('testUrl');
            expect(gaSpy).not.toHaveBeenCalled();
        });
        it('should send again even if only the hash changes', function () {
            // Therefore it is up to caller NOT to call it when hash changes if this is unwanted.
            // See LocationService and its specs
            gaService.sendPage('testUrl#one');
            expect(gaSpy).toHaveBeenCalledWith('set', 'page', '/testUrl#one');
            expect(gaSpy).toHaveBeenCalledWith('send', 'pageview');
            gaSpy.calls.reset();
            gaService.sendPage('testUrl#two');
            expect(gaSpy).toHaveBeenCalledWith('set', 'page', '/testUrl#two');
            expect(gaSpy).toHaveBeenCalledWith('send', 'pageview');
        });
        it('should send same URL twice when other intervening URL', function () {
            gaService.sendPage('testUrl');
            expect(gaSpy).toHaveBeenCalledWith('set', 'page', '/testUrl');
            expect(gaSpy).toHaveBeenCalledWith('send', 'pageview');
            gaSpy.calls.reset();
            gaService.sendPage('testUrl2');
            expect(gaSpy).toHaveBeenCalledWith('set', 'page', '/testUrl2');
            expect(gaSpy).toHaveBeenCalledWith('send', 'pageview');
            gaSpy.calls.reset();
            gaService.sendPage('testUrl');
            expect(gaSpy).toHaveBeenCalledWith('set', 'page', '/testUrl');
            expect(gaSpy).toHaveBeenCalledWith('send', 'pageview');
        });
    });
    describe('sendEvent', function () {
        it('should send "event" with associated data', function () {
            gaService.sendEvent('some source', 'some campaign', 'a label', 45);
            expect(gaSpy).toHaveBeenCalledWith('send', 'event', 'some source', 'some campaign', 'a label', 45);
        });
    });
    it('should support replacing the `window.ga` function', function () {
        var gaSpy2 = jasmine.createSpy('new ga');
        mockWindow.ga = gaSpy2;
        gaSpy.calls.reset();
        gaService.sendPage('testUrl');
        expect(gaSpy).not.toHaveBeenCalled();
        expect(gaSpy2).toHaveBeenCalledWith('set', 'page', '/testUrl');
        expect(gaSpy2).toHaveBeenCalledWith('send', 'pageview');
    });
});
//# sourceMappingURL=googleAnalytics.service.spec.js.map