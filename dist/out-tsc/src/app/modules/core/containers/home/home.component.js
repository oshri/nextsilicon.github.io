import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MetaDataService } from '../../services/metaData/metaData.service';
import { NavLinks } from '../../services/navLinks/navLinks.service';
import { ActivatedRoute } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ScrollToService } from '../../services/scrollTo/scrollTo.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(metaData, navLinks, route, scrollToService) {
        this.metaData = metaData;
        this.navLinks = navLinks;
        this.route = route;
        this.scrollToService = scrollToService;
        this.heading = "we're in stealth mode";
        this.disabledRoutes = true;
        this.urlFragment = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.pipe(untilDestroyed(this)).subscribe(function (fragment) {
            _this.urlFragment = fragment;
        });
        this.navLinks.setLinks([
            {
                display: 'About',
                scrollTo: true,
                target: 'about'
            },
            {
                display: 'Careers',
                scrollTo: true,
                target: 'careers'
            },
            {
                display: 'Contact',
                scrollTo: true,
                target: 'contact'
            }
        ]);
        this.metaData.setMetaData({
            title: "We're in stealth mode | Next Silicon",
            description: "we're in stealth mode"
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        if (this.urlFragment) {
            this.scrollToService.scrollTo(this.urlFragment);
        }
    };
    HomeComponent.prototype.scrollToId = function (id) {
        this.scrollToService.scrollTo(id);
    };
    HomeComponent.prototype.ngOnDestroy = function () { };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MetaDataService,
            NavLinks,
            ActivatedRoute,
            ScrollToService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map