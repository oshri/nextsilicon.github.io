import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '@ns-core/containers/home/home.component';
import { AboutComponent } from '@ns-core/containers/about/about.component';
import { CareersComponent } from '@ns-careers/containers/careers/careers.component';
import { CareerComponent } from '@ns-careers/containers/career/career.component';
import { ContactComponent } from '@ns-core/containers/contact/contact.component';
import { NotFoundComponent } from '@ns-core/containers/notFound/notFound.component';
import { JobResolver } from '@ns-careers/services/jobResolver.service';
var routes = [
    {
        path: '',
        redirectTo: 'stealth-mode',
        pathMatch: 'full'
    },
    {
        path: 'stealth-mode',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'careers',
        component: CareersComponent
    },
    {
        path: 'careers/:url',
        component: CareerComponent,
        resolve: {
            job: JobResolver
        }
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map