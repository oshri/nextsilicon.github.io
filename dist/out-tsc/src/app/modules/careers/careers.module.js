import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@ns-material/material.module';
import { NsButtunModule, NsDirectivesModule, NsLineHeadingModule, NsNsButtonUnderlineModule } from '@ns-components/index';
// Containers
import { CareersComponent } from './containers/careers/careers.component';
import { CareerComponent } from './containers/career/career.component';
// Components
import { NsCareersSectionComponent } from './components/careersSection/careersSection.component';
import { NsCareerBoxComponent } from './components/careerBox/careerBox.component';
import { NsOrderedlistComponent } from './components/orderedlist/orderedlist.component';
var COMPONENTS = [CareersComponent, NsCareersSectionComponent, NsCareerBoxComponent, CareerComponent, NsOrderedlistComponent];
var CareersModule = /** @class */ (function () {
    function CareersModule() {
    }
    CareersModule = tslib_1.__decorate([
        NgModule({
            declarations: COMPONENTS,
            exports: COMPONENTS,
            imports: [
                CommonModule,
                RouterModule,
                NsButtunModule,
                MaterialModule,
                FlexLayoutModule,
                HttpClientModule,
                NsDirectivesModule,
                NsLineHeadingModule,
                NsNsButtonUnderlineModule
            ]
        })
    ], CareersModule);
    return CareersModule;
}());
export { CareersModule };
//# sourceMappingURL=careers.module.js.map