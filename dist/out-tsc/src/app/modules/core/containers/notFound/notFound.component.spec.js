import { TestBed, async } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { combineReducers, StoreModule } from '@ngrx/store';
import { NotFoundComponent } from './notFound.component';
import { MetaDataService } from '../../services/metaData/metaData.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as layoutReducer from '../../reducers/layout.reducer';
describe('NotFoundComponent', function () {
    var component, fixture, metaDataService, el;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                NoopAnimationsModule,
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
                }
            ],
            declarations: [NotFoundComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        metaDataService = TestBed.get(MetaDataService);
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NotFoundComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement.nativeElement;
        fixture.detectChanges();
    });
    it('should create the app', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
    describe('ngOnInit', function () {
        it('should set the right metaData', function () {
            var metaData = {
                title: "Next Silicon - Page Not Found",
                description: "we're in stealth mode"
            };
            jest.spyOn(component.metaData, 'setMetaData').mockImplementation();
            component.ngOnInit();
            expect(component.metaData.setMetaData).toHaveBeenCalledWith(metaData);
        });
    });
});
//# sourceMappingURL=notFound.component.spec.js.map