import { TestBed, fakeAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReplaySubject, of, throwError } from 'rxjs';
import { NsSnackBar } from '@ns-material/services/snackBar/snackBar.service';
import { MaterialModule } from '@ns-material/material.module';
import { CareersEffects } from './careers.effects';
import * as CarrersAction from '../actions/careers.actions';
import { CareersService } from '../services/careers.service';
import { CAREERS_MOCK } from '@ns-careers/mocks/careers.mock';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
var RouterStub = /** @class */ (function () {
    function RouterStub() {
    }
    RouterStub.prototype.navigate = function (params) { };
    return RouterStub;
}());
describe('Projects Effects', function () {
    var effects;
    var actions$;
    var router;
    var nsSnackBar;
    var careersService;
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, MaterialModule],
            providers: [
                CareersEffects,
                provideMockActions(function () { return actions$; }),
                {
                    provide: CareersService,
                    useValue: {
                        get: jest.fn()
                    }
                },
                {
                    provide: nsSnackBar,
                    useValue: {
                        open: jest.fn()
                    }
                }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        effects = TestBed.get(CareersEffects);
        router = TestBed.get(Router);
        nsSnackBar = TestBed.get(NsSnackBar);
        careersService = TestBed.get(CareersService);
        actions$ = TestBed.get(Actions);
    });
    beforeEach(function () {
        actions$ = new ReplaySubject();
    });
    it('should be created', function () {
        expect(effects).toBeTruthy();
    });
    describe('.loadCareers$', function () {
        it('should emit loadCareers', function (done) {
            jest.spyOn(effects.careersService, 'get').mockImplementation(function () { return of(CAREERS_MOCK); });
            actions$.next(new CarrersAction.LoadCareers());
            effects.loadCareers$.subscribe(function (action) {
                expect(action).toEqual(new CarrersAction.LoadCareersSuccess(CAREERS_MOCK));
                done();
            });
        });
        it('should emit loadCareersFailure action', fakeAsync(function (done) {
            var mockError = '{"error":{"error":{},"message":"Projects fetch error"}}';
            jest.spyOn(effects.careersService, 'get').mockImplementation(function () { return throwError(new Error(mockError)); });
            actions$ = new ReplaySubject();
            actions$.next(new CarrersAction.LoadCareersFailure(new Error(mockError)));
            effects.loadCareers$.subscribe(function (action) {
                expect(action).toEqual(new CarrersAction.LoadCareersFailure(new Error(mockError)));
                done();
            });
        }));
    });
    describe('.handleRequestError', function () {
        it('should call handleRequestError() and invoke snackBarNotification', function () {
            var mockError = '{"error":{"error":{},"message":"Some kind of error."}}';
            jest.spyOn(effects, 'handleRequestError').mockImplementation(function () { return throwError(new Error(mockError)); });
            effects.handleRequestError('just call errors', new CarrersAction.LoadCareersFailure(new Error(mockError)));
            expect(effects.handleRequestError).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=careers.effects.spec.js.map