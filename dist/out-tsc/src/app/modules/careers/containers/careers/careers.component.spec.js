import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { TestBed, async } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { CareersComponent } from './careers.component';
import { NsButtunModule } from '@ns-components/index';
import { MetaDataService } from '@ns-core/services/metaData/metaData.service';
import * as careersReducer from '../../reducers/careers.reducer';
import { CAREERS_MOCK } from '../../mocks';
describe('CareersComponent', function () {
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
                        sections: CAREERS_MOCK,
                        selectedJob: undefined,
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
                }
            ],
            declarations: [CareersComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        metaDataService = TestBed.get(MetaDataService);
        store = TestBed.get(Store);
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CareersComponent);
        component = fixture.componentInstance;
        jest.spyOn(store, 'dispatch');
        fixture.detectChanges();
    });
    it('should create the app', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
    describe('ngOnInit', function () {
        it('should set the right metaData', function () {
            var metaData = {
                title: "We're growing. fast | Next Silicon",
                description: "We're looking for exceptional people who love bits and bytes to join our all-star team."
            };
            jest.spyOn(component.metaData, 'setMetaData').mockImplementation();
            component.disabledRoutes = false;
            component.ngOnInit();
            expect(component.metaData.setMetaData).toHaveBeenCalledWith(metaData);
        });
    });
});
//# sourceMappingURL=careers.component.spec.js.map