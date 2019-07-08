import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@ns-material/material.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NsIconBadgeComponent } from './iconBadge.component';
var COMPONENTS = [NsIconBadgeComponent];
var NsIconBadgeModule = /** @class */ (function () {
    function NsIconBadgeModule() {
    }
    NsIconBadgeModule = tslib_1.__decorate([
        NgModule({
            imports: [MaterialModule, CommonModule, LazyLoadImageModule],
            exports: COMPONENTS,
            declarations: COMPONENTS
        })
    ], NsIconBadgeModule);
    return NsIconBadgeModule;
}());
export { NsIconBadgeModule };
//# sourceMappingURL=iconBadge.module.js.map