import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
var NsLayoutComponent = /** @class */ (function () {
    function NsLayoutComponent() {
        this.togglesidenav = new EventEmitter();
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], NsLayoutComponent.prototype, "menustatus", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], NsLayoutComponent.prototype, "togglesidenav", void 0);
    NsLayoutComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-layout',
            templateUrl: './layout.component.html',
            styleUrls: ['./layout.component.scss']
        })
    ], NsLayoutComponent);
    return NsLayoutComponent;
}());
export { NsLayoutComponent };
//# sourceMappingURL=layout.component.js.map