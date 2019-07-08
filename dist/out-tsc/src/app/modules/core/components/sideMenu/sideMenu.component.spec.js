import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NsSideMenuComponent } from './sideMenu.component';
describe('NsSideMenuComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NsSideMenuComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    it('should create the sideMenu', function () {
        var fixture = TestBed.createComponent(NsSideMenuComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=sideMenu.component.spec.js.map