import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MetaDataService } from '@ns-core/services/metaData/metaData.service';
import { NavLinks } from '@ns-core/services/navLinks/navLinks.service';
import * as fromCareers from '../../reducers/careers.reducer';
import * as careersActions from '../../actions/careers.actions';
var CareersComponent = /** @class */ (function () {
    function CareersComponent(metaData, navLinks, store, router) {
        this.metaData = metaData;
        this.navLinks = navLinks;
        this.store = store;
        this.router = router;
        this.disabledRoutes = false;
        this.heading = "we're in stealth mode";
        this.careers$ = this.store.pipe(select(fromCareers.getCarrersState));
    }
    CareersComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new careersActions.LoadCareers());
        if (!this.disabledRoutes) {
            this.navLinks.setLinks([
                {
                    display: 'About',
                    scrollTo: false,
                    target: 'about'
                },
                {
                    display: 'Careers',
                    scrollTo: false,
                    target: 'careers'
                },
                {
                    display: 'Contact',
                    scrollTo: false,
                    target: 'contact'
                }
            ]);
            this.metaData.setMetaData({
                title: "We're growing. fast| Next Silicon",
                description: "We're looking for exceptional people who love bits and bytes to join our all-star team."
            });
        }
    };
    CareersComponent.prototype.onSelectCareers = function (event) {
        this.router.navigate(['/careers', event.url]);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CareersComponent.prototype, "disabledRoutes", void 0);
    CareersComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-careers',
            templateUrl: './careers.component.html',
            styleUrls: ['./careers.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MetaDataService,
            NavLinks,
            Store,
            Router])
    ], CareersComponent);
    return CareersComponent;
}());
export { CareersComponent };
//# sourceMappingURL=careers.component.js.map