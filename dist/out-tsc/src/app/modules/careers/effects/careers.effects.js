import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { CareersActionTypes, LoadCareersSuccess, LoadCareersFailure } from '../actions/careers.actions';
import { CareersService } from '../services/careers.service';
import { NsSnackBar } from '@ns-material/services/snackBar/snackBar.service';
var CareersEffects = /** @class */ (function () {
    function CareersEffects(actions$, careersService, router, nsSnackBar) {
        var _this = this;
        this.actions$ = actions$;
        this.careersService = careersService;
        this.router = router;
        this.nsSnackBar = nsSnackBar;
        this.loadCareers$ = this.actions$.pipe(ofType(CareersActionTypes.LoadCareers), switchMap(function () {
            return _this.careersService.get().pipe(mergeMap(function (response) {
                return [new LoadCareersSuccess(response)];
            }), catchError(function (error) { return _this.handleRequestError(error, new LoadCareersFailure(error)); }));
        }));
    }
    CareersEffects.prototype.handleRequestError = function (error, returnValue) {
        this.nsSnackBar.open(error.error.message ? error.error.message : '', 'Error');
        return of(returnValue);
    };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], CareersEffects.prototype, "loadCareers$", void 0);
    CareersEffects = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Actions,
            CareersService,
            Router,
            NsSnackBar])
    ], CareersEffects);
    return CareersEffects;
}());
export { CareersEffects };
//# sourceMappingURL=careers.effects.js.map