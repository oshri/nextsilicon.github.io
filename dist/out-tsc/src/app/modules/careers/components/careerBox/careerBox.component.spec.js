import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CAREERS_MOCK } from '../../mocks/careers.mock';
import { NsCareerBoxComponent } from './careerBox.component';
describe('NsCareerBoxComponent', function () {
    var component, fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NsCareerBoxComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NsCareerBoxComponent);
        component = fixture.componentInstance;
        component.data = CAREERS_MOCK.sections[0].positions[0];
        fixture.detectChanges();
    });
    it('should create the sideMenu', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
    describe('onSelect', function () {
        it('should emit url on select career', function () {
            jest.spyOn(component.select, 'emit').mockImplementation();
            component.onSelect(CAREERS_MOCK.sections[0].positions[0]);
            expect(component.select.emit).toHaveBeenCalledWith({ url: 'senior-hardware-engineers-a1' });
        });
    });
});
//# sourceMappingURL=careerBox.component.spec.js.map