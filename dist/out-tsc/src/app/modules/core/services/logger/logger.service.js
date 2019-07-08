import * as tslib_1 from "tslib";
import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
var Logger = /** @class */ (function () {
    function Logger(errorHandler) {
        this.errorHandler = errorHandler;
    }
    Logger.prototype.log = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        if (!environment.production) {
            console.log.apply(console, [value].concat(rest));
        }
    };
    Logger.prototype.error = function (error) {
        this.errorHandler.handleError(error);
    };
    Logger.prototype.warn = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        console.warn.apply(console, [value].concat(rest));
    };
    Logger = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ErrorHandler])
    ], Logger);
    return Logger;
}());
export { Logger };
//# sourceMappingURL=logger.service.js.map