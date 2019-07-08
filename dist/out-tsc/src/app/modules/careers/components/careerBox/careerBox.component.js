import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NsCareerBoxComponent = /** @class */ (function () {
    function NsCareerBoxComponent() {
        this.select = new EventEmitter(null);
    }
    NsCareerBoxComponent.prototype.onSelect = function (career) {
        this.select.emit({
            url: career.title
                .toLocaleLowerCase()
                .split(' ')
                .join('-') + "-" + career.positionNumber
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NsCareerBoxComponent.prototype, "data", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], NsCareerBoxComponent.prototype, "select", void 0);
    NsCareerBoxComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-career-box',
            templateUrl: './careerBox.component.html',
            styleUrls: ['./careerBox.component.scss']
        })
    ], NsCareerBoxComponent);
    return NsCareerBoxComponent;
}());
export { NsCareerBoxComponent };
//# sourceMappingURL=careerBox.component.js.map