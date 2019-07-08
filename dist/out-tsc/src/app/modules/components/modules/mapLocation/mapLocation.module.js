import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@ns-material/material.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NsIconBadgeModule } from '../iconBadge';
import { NsMapLocationComponent } from './mapLocation.component';
var COMPONENTS = [NsMapLocationComponent];
var NsMapLocationModule = /** @class */ (function () {
    function NsMapLocationModule() {
    }
    NsMapLocationModule = tslib_1.__decorate([
        NgModule({
            imports: [MaterialModule, CommonModule, LazyLoadImageModule, NsIconBadgeModule],
            exports: COMPONENTS,
            declarations: COMPONENTS
        })
    ], NsMapLocationModule);
    return NsMapLocationModule;
}());
export { NsMapLocationModule };
//# sourceMappingURL=mapLocation.module.js.map