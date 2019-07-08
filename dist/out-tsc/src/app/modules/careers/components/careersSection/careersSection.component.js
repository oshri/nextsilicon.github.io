import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NsCareersSectionComponent = /** @class */ (function () {
    function NsCareersSectionComponent() {
        this.selectCareer = new EventEmitter(null);
    }
    Object.defineProperty(NsCareersSectionComponent.prototype, "positionsLength", {
        get: function () {
            return this.section.positions
                .map(function (position) { return position.openPositions; })
                .reduce(function (total, num) { return total + num; });
        },
        enumerable: true,
        configurable: true
    });
    NsCareersSectionComponent.prototype.getWidth = function (position) {
        return position.promote ? 100 : 48;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NsCareersSectionComponent.prototype, "section", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], NsCareersSectionComponent.prototype, "selectCareer", void 0);
    NsCareersSectionComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-careers-section',
            templateUrl: './careersSection.component.html',
            styleUrls: ['./careersSection.component.scss']
        })
    ], NsCareersSectionComponent);
    return NsCareersSectionComponent;
}());
export { NsCareersSectionComponent };
//# sourceMappingURL=careersSection.component.js.map