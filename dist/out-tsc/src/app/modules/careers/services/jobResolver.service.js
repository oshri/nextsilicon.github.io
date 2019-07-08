import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { NsSnackBar } from '@ns-material/services/snackBar/snackBar.service';
import { catchError, tap } from 'rxjs/operators';
import { LoadJob, LoadJobSuccess } from '../actions/careers.actions';
import { CareersService } from './careers.service';
var JobResolver = /** @class */ (function () {
    function JobResolver(careersService, router, store, nsSnackBar) {
        this.careersService = careersService;
        this.router = router;
        this.store = store;
        this.nsSnackBar = nsSnackBar;
    }
    JobResolver.prototype.resolve = function (route) {
        var _this = this;
        this.store.dispatch(new LoadJob(route.params.url));
        var urlStrings = route.params.url.split('-');
        var positionNumber = urlStrings[urlStrings.length - 1];
        return this.careersService.getJob(positionNumber).pipe(tap(function (job) { return _this.store.dispatch(new LoadJobSuccess(job)); }), catchError(function (error) {
            _this.nsSnackBar.open('ERROR: Failed to fetch job');
            if (_this.router.url === '/') {
                _this.router.navigate(['/careers']);
            }
            return EMPTY;
        }));
    };
    JobResolver = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [CareersService,
            Router,
            Store,
            NsSnackBar])
    ], JobResolver);
    return JobResolver;
}());
export { JobResolver };
//# sourceMappingURL=jobResolver.service.js.map