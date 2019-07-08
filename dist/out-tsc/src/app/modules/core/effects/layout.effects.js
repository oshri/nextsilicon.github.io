import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { ToggleSidenav, LayoutActionTypes, NavigateToRouteDesktop, NavigateToRouteMobile } from '../actions/layout.action';
import * as fromRootReducer from '../../../store/reducers';
import { ScrollToService } from '../services/scrollTo/scrollTo.service';
var LayoutEffects = /** @class */ (function () {
    function LayoutEffects(actions$, store$, router, scrollToService) {
        var _this = this;
        this.actions$ = actions$;
        this.store$ = store$;
        this.router = router;
        this.scrollToService = scrollToService;
        this.goTo$ = this.actions$.pipe(ofType(LayoutActionTypes.GoTo), withLatestFrom(this.store$.pipe(select(fromRootReducer.selectSidenavState)), function (eventName, sidenavState) { return ({ eventName: eventName, sidenavState: sidenavState }); }), map(function (_a) {
            var eventName = _a.eventName, sidenavState = _a.sidenavState;
            if (sidenavState) {
                return new NavigateToRouteMobile(eventName.payload);
            }
            return new NavigateToRouteDesktop(eventName.payload);
        }));
        this.navigateToRouteDesktop$ = this.actions$.pipe(ofType(LayoutActionTypes.NavigateToRouteDesktop), map(function (action) { return action.payload; }), tap(function (link) {
            if (link.scrollTo) {
                _this.scrollToService.scrollTo(link.target);
                _this.scrollToService.updateUrlLocation(link.target);
            }
            else {
                _this.router.navigate(["/" + link.target]);
            }
        }));
        this.navigateToRouteMobile$ = this.actions$.pipe(ofType(LayoutActionTypes.NavigateToRouteMobile), map(function (action) { return action.payload; }), map(function (link) {
            _this.router.navigate(["/" + link.target]);
            return new ToggleSidenav();
        }));
    }
    LayoutEffects.prototype.handleRequestError = function (error, returnValue) {
        return of(returnValue);
    };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], LayoutEffects.prototype, "goTo$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], LayoutEffects.prototype, "navigateToRouteDesktop$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], LayoutEffects.prototype, "navigateToRouteMobile$", void 0);
    LayoutEffects = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Actions,
            Store,
            Router,
            ScrollToService])
    ], LayoutEffects);
    return LayoutEffects;
}());
export { LayoutEffects };
//# sourceMappingURL=layout.effects.js.map