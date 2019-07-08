import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { WindowToken } from '../window';
var GaService = /** @class */ (function () {
    function GaService(window) {
        this.window = window;
        this.ga('create', environment['gaId'], 'auto');
    }
    GaService.prototype.locationChanged = function (url) {
        this.sendPage(url);
    };
    GaService.prototype.sendPage = function (url) {
        // Won't re-send if the url hasn't changed.
        if (url === this.previousUrl) {
            return;
        }
        this.previousUrl = url;
        this.ga('set', 'page', '/' + url);
        this.ga('send', 'pageview');
    };
    GaService.prototype.sendEvent = function (source, action, label, value) {
        this.ga('send', 'event', source, action, label, value);
    };
    GaService.prototype.ga = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var gaFn = this.window['ga'];
        if (gaFn) {
            gaFn.apply(void 0, args);
        }
    };
    GaService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
        /**
         * Google Analytics Service - captures app behaviors and sends them to Google Analytics (GA).
         * Presupposes that GA script has been loaded from a script on the host web page.
         * Associates data with a GA "property" from the environment (`gaId`).
         */
        ,
        tslib_1.__param(0, Inject(WindowToken)),
        tslib_1.__metadata("design:paramtypes", [Window])
    ], GaService);
    return GaService;
}());
export { GaService };
//# sourceMappingURL=googleAnalytics.service.js.map