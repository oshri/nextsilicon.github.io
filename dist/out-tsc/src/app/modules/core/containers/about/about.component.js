import * as tslib_1 from "tslib";
import { environment } from '../../../../../environments/environment';
import { Component, Input } from '@angular/core';
import { MetaDataService } from '../../services/metaData/metaData.service';
import { NavLinks } from '../../services/navLinks/navLinks.service';
var AboutComponent = /** @class */ (function () {
    function AboutComponent(metaData, navLinks) {
        this.metaData = metaData;
        this.navLinks = navLinks;
        this.disabledRoutes = false;
        this.heading = "we're in stealth mode";
        this.offset = 100;
        this.defaultImage = environment.assetsUrl + "/images/about/campaign-creators-1166997-unsplash.jpg";
        this.images = environment.assetsUrl + "/images/about/campaign-creators-1166997-unsplash.jpg";
    }
    AboutComponent.prototype.ngOnInit = function () {
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
                title: "Compute more with less power | Next Silicon",
                description: "We believe in a smarter future and want to create new opportunities for innovation."
            });
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AboutComponent.prototype, "disabledRoutes", void 0);
    AboutComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MetaDataService, NavLinks])
    ], AboutComponent);
    return AboutComponent;
}());
export { AboutComponent };
//# sourceMappingURL=about.component.js.map