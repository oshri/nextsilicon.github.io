import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NsFullSizeDirective } from './components/fullZise/fullZise.directive';
var COMPONENTS = [NsFullSizeDirective];
var NsDirectivesModule = /** @class */ (function () {
    function NsDirectivesModule() {
    }
    NsDirectivesModule = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule],
            exports: COMPONENTS,
            declarations: COMPONENTS
        })
    ], NsDirectivesModule);
    return NsDirectivesModule;
}());
export { NsDirectivesModule };
//# sourceMappingURL=directives.module.js.map