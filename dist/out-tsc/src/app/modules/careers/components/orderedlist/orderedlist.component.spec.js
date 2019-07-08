import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JOB } from '../../mocks/job.mock';
import { NsOrderedlistComponent } from './orderedlist.component';
describe('NsOrderedlistComponent', function () {
    var component, fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NsOrderedlistComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NsOrderedlistComponent);
        component = fixture.componentInstance;
        component.data = JOB.responsibilities;
        fixture.detectChanges();
    });
    it('should create the ordered list', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=orderedlist.component.spec.js.map