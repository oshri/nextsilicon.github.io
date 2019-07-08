import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NsLineHeadingComponent } from './lineHeading.component';
describe('NsLineHeadingComponent', function () {
    var component, fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NsLineHeadingComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NsLineHeadingComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });
    it('should create the line heading', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=lineHeading.component.spec.js.map