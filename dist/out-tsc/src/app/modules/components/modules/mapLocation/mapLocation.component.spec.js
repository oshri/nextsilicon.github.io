import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NsMapLocationComponent } from './mapLocation.component';
describe('NsMapLocationComponent', function () {
    var component, fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [LazyLoadImageModule],
            declarations: [NsMapLocationComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NsMapLocationComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });
    it('should create the map location', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=mapLocation.component.spec.js.map