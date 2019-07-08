import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NsIconBadgeComponent } from './iconBadge.component';
describe('NsIconBadgeComponent', function () {
    var component, fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NsIconBadgeComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NsIconBadgeComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });
    it('should create the map location', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=iconBadge.component.spec.js.map