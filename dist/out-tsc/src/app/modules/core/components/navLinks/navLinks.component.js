import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavLinks } from '../../services/navLinks/navLinks.service';
var NsNavlinksComponent = /** @class */ (function () {
    function NsNavlinksComponent(navLinksService) {
        this.navLinksService = navLinksService;
    }
    NsNavlinksComponent.prototype.ngOnInit = function () {
        this.navLinks$ = this.navLinksService.getLinks();
    };
    NsNavlinksComponent.prototype.ngOnDestroy = function () { };
    NsNavlinksComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-nav-links',
            templateUrl: './navLinks.component.html',
            styleUrls: ['./navLinks.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NavLinks])
    ], NsNavlinksComponent);
    return NsNavlinksComponent;
}());
export { NsNavlinksComponent };
//# sourceMappingURL=navLinks.component.js.map