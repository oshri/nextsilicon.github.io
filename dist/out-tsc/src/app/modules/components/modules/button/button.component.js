import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var NsButtonComponent = /** @class */ (function () {
    function NsButtonComponent() {
        this.disabled = false;
        this.type = 'button';
        this.invert = false;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NsButtonComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NsButtonComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NsButtonComponent.prototype, "invert", void 0);
    NsButtonComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-button',
            styleUrls: ['./button.component.scss'],
            templateUrl: './button.component.html'
        })
    ], NsButtonComponent);
    return NsButtonComponent;
}());
export { NsButtonComponent };
//# sourceMappingURL=button.component.js.map