import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@ns-material/material.module';
import { NsButtonComponent } from './button.component';
var COMPONENTS = [NsButtonComponent];
var NsButtunModule = /** @class */ (function () {
    function NsButtunModule() {
    }
    NsButtunModule = tslib_1.__decorate([
        NgModule({
            imports: [MaterialModule, CommonModule],
            exports: COMPONENTS,
            declarations: COMPONENTS
        })
    ], NsButtunModule);
    return NsButtunModule;
}());
export { NsButtunModule };
//# sourceMappingURL=button.module.js.map