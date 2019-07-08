import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var NsFotterComponent = /** @class */ (function () {
    function NsFotterComponent() {
    }
    NsFotterComponent.prototype.mailTo = function (email) {
        window.open("mailto:" + email, '_blank');
    };
    NsFotterComponent.prototype.goUp = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    NsFotterComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
        })
    ], NsFotterComponent);
    return NsFotterComponent;
}());
export { NsFotterComponent };
//# sourceMappingURL=footer.component.js.map