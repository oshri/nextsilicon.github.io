import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MetaDataService } from '@ns-core/services/metaData/metaData.service';
import { NavLinks } from '@ns-core/services/navLinks/navLinks.service';
import { BehaviorSubject } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';
import * as fromCareers from '../../reducers/careers.reducer';
import * as CareersActions from '../../actions/careers.actions';
var CareerComponent = /** @class */ (function () {
    function CareerComponent(metaData, navLinks, store, router) {
        this.metaData = metaData;
        this.navLinks = navLinks;
        this.store = store;
        this.router = router;
        this.heading = "we're in stealth mode";
        this.relatedJobs$ = new BehaviorSubject(null);
        this.selectedJob$ = this.store.pipe(select(fromCareers.getSelectedJob));
        this.careers$ = this.store.pipe(select(fromCareers.getCarrersState));
    }
    CareerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new CareersActions.LoadCareers());
        this.careers$.pipe(untilDestroyed(this)).subscribe(function (state) {
            if (state.sections && state.selectedJob) {
                var departmentSections = state.sections.find(function (section) { return section.department === state.selectedJob.department; });
                _this.relatedJobs$.next(_this.getRelatedPositions(state.selectedJob, departmentSections));
                _this.job = state.selectedJob;
            }
        });
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
            title: this.job.department + " - " + this.job.title + "| Next Silicon",
            description: "" + this.job.jobSummary
        });
    };
    CareerComponent.prototype.onSelectCareers = function (event) {
        this.router.navigate(['/careers', event.url]);
    };
    CareerComponent.prototype.mailTo = function () {
        if (this.job) {
            var subject = "Apply to department: " + this.job.department + " - Position Number: " + this.job.positionNumber;
            var body = "Position: " + this.job.title;
            window.open("mailto:info@nextsilicon.com?subject=" + subject + "&body=" + body, '_blank');
        }
    };
    CareerComponent.prototype.getRelatedPositions = function (currentJob, allDepartmentJobs) {
        var relatedPositions = allDepartmentJobs.positions.filter(function (position) { return position.positionNumber !== currentJob.positionNumber; });
        return {
            department: allDepartmentJobs.department,
            positions: relatedPositions
        };
    };
    CareerComponent.prototype.ngOnDestroy = function () { };
    CareerComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-career',
            templateUrl: './career.component.html',
            styleUrls: ['./career.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MetaDataService,
            NavLinks,
            Store,
            Router])
    ], CareerComponent);
    return CareerComponent;
}());
export { CareerComponent };
//# sourceMappingURL=career.component.js.map