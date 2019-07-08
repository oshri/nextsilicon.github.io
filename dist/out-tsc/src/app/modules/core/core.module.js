import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@ns-material/material.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NsButtunModule, NsDirectivesModule, NsLineHeadingModule, NsNsButtonUnderlineModule, NsMapLocationModule, NsIconBadgeModule } from '@ns-components/index';
import { CareersModule } from '@ns-careers/careers.module';
import { AppComponent } from './containers/app/app.component';
import { NsLayoutComponent } from './components/layout/layout.component';
import { NsTopMenuComponent } from './components/topMenu/topMenu.component';
import { NsSideMenuComponent } from './components/sideMenu/sideMenu.component';
import { NsNavlinksComponent } from './components/navLinks/navLinks.component';
import { NsFotterComponent } from './components/footer/footer.component';
// Containers
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { ContactComponent } from './containers/contact/contact.component';
import { NotFoundComponent } from './containers/notFound/notFound.component';
import { NsFullPageSectionComponent } from './components/fullPageSection/fullPageSection.component';
var COMPONENTS = [
    AppComponent,
    HomeComponent,
    NsLayoutComponent,
    NsTopMenuComponent,
    NsSideMenuComponent,
    NsNavlinksComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    NsFullPageSectionComponent,
    NsFotterComponent
];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib_1.__decorate([
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
                LazyLoadImageModule,
                NsDirectivesModule,
                CareersModule,
                NsLineHeadingModule,
                NsNsButtonUnderlineModule,
                NsMapLocationModule,
                NsIconBadgeModule
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=core.module.js.map