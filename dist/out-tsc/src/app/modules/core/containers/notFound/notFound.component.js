import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MetaDataService } from '../../services/metaData/metaData.service';
import { NavLinks } from '../../services/navLinks/navLinks.service';
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(metaData, navLinks) {
        this.metaData = metaData;
        this.navLinks = navLinks;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
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
            title: "Next Silicon - Page Not Found",
            description: "we're in stealth mode"
        });
    };
    NotFoundComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-not-found',
            styleUrls: ['./notFound.component.scss'],
            templateUrl: './notFound.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [MetaDataService, NavLinks])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
export { NotFoundComponent };
//# sourceMappingURL=notFound.component.js.map