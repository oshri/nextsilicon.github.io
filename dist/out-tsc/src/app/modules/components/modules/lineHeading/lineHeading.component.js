import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ILineHeadingSize } from './lineHeading.interface';
var NsLineHeadingComponent = /** @class */ (function () {
    function NsLineHeadingComponent() {
        this.color = '#ffffff';
        this.size = ILineHeadingSize.s;
        this.bold = false;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NsLineHeadingComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NsLineHeadingComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NsLineHeadingComponent.prototype, "size", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NsLineHeadingComponent.prototype, "bold", void 0);
    NsLineHeadingComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-line-heading',
            templateUrl: './lineHeading.component.html',
            styleUrls: ['./lineHeading.component.scss']
        })
    ], NsLineHeadingComponent);
    return NsLineHeadingComponent;
}());
export { NsLineHeadingComponent };
//# sourceMappingURL=lineHeading.component.js.map