import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import * as layoutReducer from '../../reducers/layout.reducer';
import * as LayoutActions from '../../actions/layout.action';
describe('AppComponent', function () {
    var component, fixture, store;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                NoopAnimationsModule,
                StoreModule.forRoot({
                    core: combineReducers(layoutReducer.reducer)
                })
            ],
            declarations: [AppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        store = TestBed.get(Store);
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        jest.spyOn(store, 'dispatch');
        fixture.detectChanges();
    });
    it('should create the app', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
    describe('Toggle SideMenu', function () {
        it('should open side menu', function () {
            component.toggleSidenav({});
            expect(store.dispatch).toHaveBeenCalledWith(new LayoutActions.ToggleSidenav());
        });
    });
});
//# sourceMappingURL=app.component.spec.js.map