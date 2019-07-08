import { async, TestBed } from '@angular/core/testing';
import { NsFotterComponent } from './footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
describe('NsFotterComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NsFotterComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NsFotterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=footer.component.spec.js.map