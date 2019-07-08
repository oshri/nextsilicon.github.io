import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@ns-material/material.module';
import { NsButtonUnderlineComponent } from './buttonUnderline.component';
var COMPONENTS = [NsButtonUnderlineComponent];
var NsNsButtonUnderlineModule = /** @class */ (function () {
    function NsNsButtonUnderlineModule() {
    }
    NsNsButtonUnderlineModule = tslib_1.__decorate([
        NgModule({
            imports: [MaterialModule, CommonModule],
            exports: COMPONENTS,
            declarations: COMPONENTS
        })
    ], NsNsButtonUnderlineModule);
    return NsNsButtonUnderlineModule;
}());
export { NsNsButtonUnderlineModule };
//# sourceMappingURL=buttonUnderline.module.js.map