import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { NsFullPageSectionComponent } from './fullPageSection.component';
describe('NsFullPageSectionComponent', function () {
    var component, fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [NsFullPageSectionComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NsFullPageSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create the app', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=fullPageSection.component.spec.js.map