import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NsCareersSectionComponent } from './careersSection.component';
import { CAREERS_MOCK } from '../../mocks/careers.mock';
describe('NsCareersSectionComponent', function () {
    var component, fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NsCareersSectionComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NsCareersSectionComponent);
        component = fixture.componentInstance;
        component.section = CAREERS_MOCK.sections[0];
        fixture.detectChanges();
    });
    it('should create the sideMenu', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
    describe('positionsLength', function () {
        it('should get totall positions', function () {
            expect(component.positionsLength).toBe(10);
        });
    });
    describe('getWidth', function () {
        it('should present the position as Promote', function () {
            var mockPosition = {
                openPositions: 2,
                positionNumber: 'a1',
                type: 'ENGINEERING',
                title: 'Senior hardware engineers',
                promote: true
            };
            expect(component.getWidth(mockPosition)).toBe(100);
        });
        it('should present as regular position', function () {
            var mockPosition = {
                openPositions: 2,
                positionNumber: 'a1',
                type: 'ENGINEERING',
                title: 'Senior hardware engineers',
                promote: false
            };
            expect(component.getWidth(mockPosition)).toBe(48);
        });
    });
});
//# sourceMappingURL=careersSection.component.spec.js.map