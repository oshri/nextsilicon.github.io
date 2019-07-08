import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import * as layoutActions from '../../actions/layout.action';
import * as fromRootReducer from '@ns-store/reducers';
var AppComponent = /** @class */ (function () {
    function AppComponent(store, iconRegistry, sanitizer) {
        this.store = store;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.sidenavState$ = this.store.pipe(select(fromRootReducer.selectSidenavState));
        this.iconRegistry.addSvgIcon('ns-logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/NextSiliconLogo.svg'));
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.toggleSidenav = function (event) {
        this.store.dispatch(new layoutActions.ToggleSidenav());
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Store, MatIconRegistry, DomSanitizer])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map