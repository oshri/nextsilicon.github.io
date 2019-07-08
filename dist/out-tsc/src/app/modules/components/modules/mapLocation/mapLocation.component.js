import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var NsMapLocationComponent = /** @class */ (function () {
    function NsMapLocationComponent() {
        this.offset = 100;
    }
    Object.defineProperty(NsMapLocationComponent.prototype, "defaultImage", {
        get: function () {
            return this.data ? "" + this.data.image : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NsMapLocationComponent.prototype, "images", {
        get: function () {
            return this.data ? "" + this.data.image : '';
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NsMapLocationComponent.prototype, "data", void 0);
    NsMapLocationComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-map-location',
            templateUrl: './mapLocation.component.html',
            styleUrls: ['./mapLocation.component.scss']
        })
    ], NsMapLocationComponent);
    return NsMapLocationComponent;
}());
export { NsMapLocationComponent };
//# sourceMappingURL=mapLocation.component.js.map