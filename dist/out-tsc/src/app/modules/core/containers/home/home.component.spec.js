import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { combineReducers, StoreModule } from '@ngrx/store';
import { HomeComponent } from './home.component';
import { NsButtunModule } from '@ns-components/index';
import { MetaDataService } from '../../services/metaData/metaData.service';
import { ScrollToService } from '../../services/scrollTo/scrollTo.service';
import * as layoutReducer from '../../reducers/layout.reducer';
describe('HomeComponent', function () {
    var component, fixture, metaDataService, scrollToService;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                NsButtunModule,
                RouterTestingModule,
                StoreModule.forRoot({
                    core: combineReducers(layoutReducer.reducer)
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
                    provide: scrollToService,
                    useValue: {}
                }
            ],
            declarations: [HomeComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        metaDataService = TestBed.get(MetaDataService);
        scrollToService = TestBed.get(ScrollToService);
        fixture.detectChanges();
    });
    it('should create the app', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
    describe('ngOnInit', function () {
        it('should set the right metaData', function () {
            var metaData = {
                title: "We're in stealth mode | Next Silicon",
                description: "we're in stealth mode"
            };
            jest.spyOn(component.metaData, 'setMetaData').mockImplementation();
            component.ngOnInit();
            expect(component.metaData.setMetaData).toHaveBeenCalledWith(metaData);
        });
    });
});
//# sourceMappingURL=home.component.spec.js.map