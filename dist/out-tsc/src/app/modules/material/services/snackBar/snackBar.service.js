import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
var NsSnackBar = /** @class */ (function () {
    function NsSnackBar(snackBar) {
        this.snackBar = snackBar;
    }
    NsSnackBar.prototype.open = function (message, action, duration) {
        if (duration === void 0) { duration = 3000; }
        this.snackBar.open(message, action, {
            duration: duration,
            verticalPosition: 'top'
        });
    };
    NsSnackBar = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [MatSnackBar])
    ], NsSnackBar);
    return NsSnackBar;
}());
export { NsSnackBar };
//# sourceMappingURL=snackBar.service.js.map