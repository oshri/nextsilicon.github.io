import * as tslib_1 from "tslib";
import { TestBed, async } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { NsButtunModule } from '@ns-components/index';
import { NavLinks } from '@ns-core/services/navLinks/navLinks.service';
import { MetaDataService } from '@ns-core/services/metaData/metaData.service';
import { CareerComponent } from './career.component';
import * as careersReducer from '../../reducers/careers.reducer';
import * as CareersActions from '../../actions/careers.actions';
import { JOB } from '../../mocks';
describe('CareerComponent', function () {
    var component, fixture, metaDataService, store;
    beforeEach(async(function () {
        var _a;
        TestBed.configureTestingModule({
            imports: [
                NsButtunModule,
                RouterTestingModule,
                StoreModule.forRoot((_a = {},
                    _a[careersReducer.stateName] = combineReducers(careersReducer.reducer),
                    _a), {
                    initialState: {
                        sections: [],
                        selectedJob: tslib_1.__assign({}, JOB),
                        loading: false
                    }
                })
            ],
            providers: [
                {
                    provide: MetaDataService,
                    useValue: {
                        setMetaData: jest.fn()
                    }
                },
                {
                    provide: NavLinks,
                    useValue: {
                        setLinks: jest.fn()
                    }
                }
            ],
            declarations: [CareerComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        metaDataService = TestBed.get(MetaDataService);
        store = TestBed.get(Store);
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CareerComponent);
        component = fixture.componentInstance;
        jest.spyOn(store, 'dispatch');
        fixture.detectChanges();
    });
    it('should create the Career', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
    describe('ngOnInit', function () {
        it('should set the right metaData', function () {
            var metaData = {
                title: "Next Silicon - Careers",
                description: "we're in stealth mode"
            };
            jest.spyOn(component.metaData, 'setMetaData').mockImplementation();
            component.ngOnInit();
            expect(component.metaData.setMetaData).toHaveBeenCalledWith(metaData);
        });
        it('should dispatch action to LoadCareers', function () {
            component.ngOnInit();
            expect(store.dispatch).toHaveBeenCalledWith(new CareersActions.LoadCareers());
        });
    });
    describe('mailTo', function () {
        it('should call window.open on mailTo', function () {
            var windowOpenSpy = spyOn(window, 'open');
            component.job = JOB;
            component.mailTo();
            expect(windowOpenSpy).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=career.component.spec.js.map