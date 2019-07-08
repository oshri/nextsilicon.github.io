import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as layoutActions from '../../actions/layout.action';
var NavLinks = /** @class */ (function () {
    function NavLinks(router, store) {
        this.router = router;
        this.store = store;
        this.navigation = new BehaviorSubject(null);
    }
    NavLinks.prototype.setLinks = function (links) {
        this.navigation.next({ links: links });
    };
    NavLinks.prototype.getLinks = function () {
        return this.navigation;
    };
    NavLinks.prototype.goTo = function (link) {
        this.store.dispatch(new layoutActions.GoTO(link));
    };
    NavLinks = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router, Store])
    ], NavLinks);
    return NavLinks;
}());
export { NavLinks };
//# sourceMappingURL=navLinks.service.js.map