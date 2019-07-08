import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var NsButtonUnderlineComponent = /** @class */ (function () {
    function NsButtonUnderlineComponent() {
        this.disabled = false;
        this.type = 'button';
        this.invert = false;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NsButtonUnderlineComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NsButtonUnderlineComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NsButtonUnderlineComponent.prototype, "invert", void 0);
    NsButtonUnderlineComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-button-underline',
            styleUrls: ['./buttonUnderline.component.scss'],
            templateUrl: './buttonUnderline.component.html'
        })
    ], NsButtonUnderlineComponent);
    return NsButtonUnderlineComponent;
}());
export { NsButtonUnderlineComponent };
//# sourceMappingURL=buttonUnderline.component.js.map