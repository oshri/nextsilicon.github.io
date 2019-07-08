import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CareersService } from './careers.service';
import { CAREERS_MOCK } from '../mocks/careers.mock';
import { JOB } from '../mocks/job.mock';
describe('Careers Service', function () {
    var service;
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                {
                    provide: CareersService,
                    useValue: {
                        get: jest.fn()
                    }
                }
            ]
        });
        service = TestBed.get(CareersService);
    });
    describe('get Careers', function () {
        it('should return an Careers, on success', function () {
            service.get = jest.fn(function () { return of(CAREERS_MOCK); });
            service.get().subscribe(function (res) {
                expect(res).toEqual(CAREERS_MOCK);
            });
        });
    });
    describe('get Job', function () {
        it('should return an Job, on success', function () {
            service.getJob = jest.fn(function () { return of(JOB); });
            service.getJob('a1').subscribe(function (res) {
                expect(res).toEqual(JOB);
            });
        });
    });
});
//# sourceMappingURL=careers.service.spec.js.map