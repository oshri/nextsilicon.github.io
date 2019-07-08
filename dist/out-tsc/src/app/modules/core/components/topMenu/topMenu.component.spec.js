import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NsTopMenuComponent } from './topMenu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VisibilityState } from '../../models';
describe('NsTopMenuComponent', function () {
    var fixture, component;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NsTopMenuComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NsTopMenuComponent);
        component = fixture.debugElement.componentInstance;
    });
    it('should create the topMenu', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
    describe('NsTopMenu: Scroll', function () {
        it('should menu status by default be Visible', function () {
            expect(component.animate).toBe(VisibilityState.Visible);
        });
    });
});
//# sourceMappingURL=topMenu.component.spec.js.map