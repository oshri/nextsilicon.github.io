import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { JobResolver } from './jobResolver.service';
import { CareersService } from './careers.service';
import { NsSnackBar } from '@ns-material/services/snackBar/snackBar.service';
import { MaterialModule } from '@ns-material/material.module';
import { JOB } from '../mocks/job.mock';
import * as fromCarrers from '../reducers/careers.reducer';
import * as carrersActions from '../actions/careers.actions';
var RouterStub = /** @class */ (function () {
    function RouterStub() {
    }
    RouterStub.prototype.navigate = function (params) { };
    return RouterStub;
}());
describe('Job Resolver Services', function () {
    var service;
    var router;
    var store;
    var careersService;
    var nsSnackBar;
    var mockRoute;
    var mockUrl = 'a1';
    beforeEach(function () {
        var _a;
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                MaterialModule,
                NoopAnimationsModule,
                StoreModule.forRoot((_a = {},
                    _a[fromCarrers.stateName] = combineReducers(fromCarrers.reducer),
                    _a))
            ]
        });
        router = TestBed.get(Router);
        careersService = TestBed.get(CareersService);
        service = TestBed.get(JobResolver);
        store = TestBed.get(Store);
        nsSnackBar = TestBed.get(NsSnackBar);
        jest.spyOn(store, 'dispatch');
        jest.spyOn(router, 'navigate');
    });
    beforeEach(function () {
        mockRoute = new ActivatedRouteSnapshot();
        mockRoute.params = { url: mockUrl };
    });
    it('should have JobResolver defined', function () {
        expect(service).toBeDefined();
    });
    it('should fetch job from api', function (done) {
        jest.spyOn(careersService, 'getJob').mockImplementation(function (number) { return of(JOB); });
        service.resolve(mockRoute).subscribe(function (result) {
            expect(store.dispatch).toHaveBeenCalledWith(new carrersActions.LoadJobSuccess(JOB));
            expect(result).toEqual(JOB);
            expect(careersService.getJob).toHaveBeenCalledWith(mockUrl);
            done();
        });
    });
});
//# sourceMappingURL=jobResolver.service.spec.js.map