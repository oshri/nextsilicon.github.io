import * as tslib_1 from "tslib";
import * as fromCareers from './careers.actions';
import { CAREERS_MOCK } from '../mocks/careers.mock';
import { JOB } from '../mocks/job.mock';
describe('Careers Actions', function () {
    describe('LoadCareers Actions', function () {
        describe('LoadJob', function () {
            it('should create an action', function () {
                var payload = { url: 'vp-business-development-a1' };
                var action = new fromCareers.LoadJob(payload);
                expect(tslib_1.__assign({}, action)).toEqual({
                    type: fromCareers.CareersActionTypes.LoadJob,
                    payload: payload
                });
            });
        });
        describe('LoadJobSuccess', function () {
            it('should create an action', function () {
                var payload = JOB;
                var action = new fromCareers.LoadJobSuccess(JOB);
                expect(tslib_1.__assign({}, action)).toEqual({
                    type: fromCareers.CareersActionTypes.LoadJobSuccess,
                    payload: payload
                });
            });
        });
        describe('LoadJobFailure', function () {
            it('should create an action', function () {
                var payload = { message: 'Load Error' };
                var action = new fromCareers.LoadJobFailure(payload);
                expect(tslib_1.__assign({}, action)).toEqual({
                    type: fromCareers.CareersActionTypes.LoadJobFailure,
                    payload: payload
                });
            });
        });
        describe('LoadCareers', function () {
            it('should create an action', function () {
                var action = new fromCareers.LoadCareers();
                expect(tslib_1.__assign({}, action)).toEqual({
                    type: fromCareers.CareersActionTypes.LoadCareers
                });
            });
        });
        describe('LoadCareersSuccess', function () {
            it('should create an action', function () {
                var payload = CAREERS_MOCK;
                var action = new fromCareers.LoadCareersSuccess(payload);
                expect(tslib_1.__assign({}, action)).toEqual({
                    type: fromCareers.CareersActionTypes.LoadCareersSuccess,
                    payload: payload
                });
            });
        });
        describe('LoadCareersFailure', function () {
            it('should create an action', function () {
                var payload = { message: 'Load Error' };
                var action = new fromCareers.LoadCareersFailure(payload);
                expect(tslib_1.__assign({}, action)).toEqual({
                    type: fromCareers.CareersActionTypes.LoadCareersFailure,
                    payload: payload
                });
            });
        });
        describe('Loading', function () {
            it('should create an action', function () {
                var action = new fromCareers.Loading();
                expect(tslib_1.__assign({}, action)).toEqual({
                    type: fromCareers.CareersActionTypes.Loading
                });
            });
        });
    });
});
//# sourceMappingURL=careers.actions.spec.js.map