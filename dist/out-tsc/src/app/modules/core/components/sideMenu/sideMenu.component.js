import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
var NsSideMenuComponent = /** @class */ (function () {
    function NsSideMenuComponent() {
        this.togglesidenav = new EventEmitter();
    }
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], NsSideMenuComponent.prototype, "togglesidenav", void 0);
    NsSideMenuComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-side-menu',
            templateUrl: './sideMenu.component.html',
            styleUrls: ['./sideMenu.component.scss']
        })
    ], NsSideMenuComponent);
    return NsSideMenuComponent;
}());
export { NsSideMenuComponent };
//# sourceMappingURL=sideMenu.component.js.map