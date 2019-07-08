import * as tslib_1 from "tslib";
import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval, NEVER, Subject } from 'rxjs';
import { first, map, takeUntil, tap } from 'rxjs/operators';
import { Logger } from '@ns-core/services/logger/logger.service';
/**
 * SwUpdatesService
 *
 * @description
 * 1. Checks for available ServiceWorker updates once instantiated.
 * 2. Re-checks every 6 hours.
 * 3. Whenever an update is available, it activates the update.
 *
 * @property
 * `updateActivated` {Observable<string>} - Emit the version hash whenever an update is activated.
 */
var SwUpdatesService = /** @class */ (function () {
    function SwUpdatesService(appRef, logger, swu) {
        var _this = this;
        this.logger = logger;
        this.swu = swu;
        this.checkInterval = 1000 * 60 * 60 * 6; // 6 hours
        this.onDestroy = new Subject();
        if (!swu.isEnabled) {
            this.updateActivated = NEVER.pipe(takeUntil(this.onDestroy));
            return;
        }
        // Periodically check for updates (after the app is stabilized).
        var appIsStable = appRef.isStable.pipe(first(function (v) { return v; }));
        concat(appIsStable, interval(this.checkInterval))
            .pipe(tap(function () { return _this.log('Checking for update...'); }), takeUntil(this.onDestroy))
            .subscribe(function () { return _this.swu.checkForUpdate(); });
        // Activate available updates.
        this.swu.available
            .pipe(tap(function (evt) { return _this.log("Update available: " + JSON.stringify(evt)); }), takeUntil(this.onDestroy))
            .subscribe(function () { return _this.swu.activateUpdate(); });
        // Notify about activated updates.
        this.updateActivated = this.swu.activated.pipe(tap(function (evt) { return _this.log("Update activated: " + JSON.stringify(evt)); }), map(function (evt) { return evt.current.hash; }), takeUntil(this.onDestroy));
    }
    SwUpdatesService.prototype.ngOnDestroy = function () {
        this.onDestroy.next();
    };
    SwUpdatesService.prototype.log = function (message) {
        var timestamp = new Date().toISOString();
        this.logger.log("[SwUpdates - " + timestamp + "]: " + message);
    };
    SwUpdatesService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ApplicationRef, Logger, SwUpdate])
    ], SwUpdatesService);
    return SwUpdatesService;
}());
export { SwUpdatesService };
//# sourceMappingURL=swUpdates.service.js.map