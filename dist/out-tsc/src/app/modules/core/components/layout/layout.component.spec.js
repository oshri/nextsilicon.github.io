import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NsLayoutComponent } from './layout.component';
describe('NsLayoutComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NsLayoutComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    it('should create the Layout', function () {
        var fixture = TestBed.createComponent(NsLayoutComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=layout.component.spec.js.map