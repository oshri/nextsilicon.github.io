import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@ns-material/material.module';
import { NsLineHeadingComponent } from './lineHeading.component';
var COMPONENTS = [NsLineHeadingComponent];
var NsLineHeadingModule = /** @class */ (function () {
    function NsLineHeadingModule() {
    }
    NsLineHeadingModule = tslib_1.__decorate([
        NgModule({
            imports: [MaterialModule, CommonModule],
            exports: COMPONENTS,
            declarations: COMPONENTS
        })
    ], NsLineHeadingModule);
    return NsLineHeadingModule;
}());
export { NsLineHeadingModule };
//# sourceMappingURL=lineHeading.module.js.map