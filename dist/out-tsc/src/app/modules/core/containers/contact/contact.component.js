import * as tslib_1 from "tslib";
import { environment } from '../../../../../environments/environment';
import { Component, Input } from '@angular/core';
import { MetaDataService } from '../../services/metaData/metaData.service';
import { NavLinks } from '../../services/navLinks/navLinks.service';
var ContactComponent = /** @class */ (function () {
    function ContactComponent(metaData, navLinks) {
        this.metaData = metaData;
        this.navLinks = navLinks;
        this.disabledRoutes = false;
        this.heading = "we're in stealth mode";
    }
    ContactComponent.prototype.ngOnInit = function () {
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
        }
        this.metaData.setMetaData({
            title: "There's always room at the top | Next Silicon",
            description: "we're in stealth mode"
        });
        this.officeLifeImages = {
            section1: {
                left: environment.assetsUrl + "/images/contact/alesia-kazantceva-283287-unsplash.jpg",
                mid: environment.assetsUrl + "/images/contact/priscilla-du-preez-623040-unsplash.jpg",
                right: environment.assetsUrl + "/images/contact/new-data-services-746340-unsplash.jpg"
            },
            section2: environment.assetsUrl + "/images/contact/leonardo-baldissara-1394333-unsplash.jpg"
        };
        this.officeLifeImageBadge = {
            title: 'PETS ALLOWED',
            icon: 'thumb_up'
        };
        this.locations = [
            {
                image: environment.assetsUrl + "/images/contact/tel-aviv-hq.jpg",
                title: 'Tel Aviv HQ',
                address: 'HaHashmonaim 91',
                location: {
                    lat: '',
                    lng: ''
                },
                badge: {
                    title: 'HEADQUARTERS',
                    icon: 'business'
                }
            },
            {
                image: environment.assetsUrl + "/images/contact/jerusalem.jpg",
                title: 'Jerusalem',
                address: 'HaUman 25',
                location: {
                    lat: '',
                    lng: ''
                }
            },
            {
                image: environment.assetsUrl + "/images/contact/beer-sheva.jpg",
                title: 'Be’er Sheva',
                address: 'HaEnergia 77',
                location: {
                    lat: '',
                    lng: ''
                }
            }
        ];
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ContactComponent.prototype, "disabledRoutes", void 0);
    ContactComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MetaDataService, NavLinks])
    ], ContactComponent);
    return ContactComponent;
}());
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map