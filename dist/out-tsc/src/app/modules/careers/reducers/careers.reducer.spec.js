import * as tslib_1 from "tslib";
import * as fromCareers from './careers.reducer';
import * as fromCareersActions from '../actions/careers.actions';
import { CAREERS_MOCK } from '../mocks/careers.mock';
describe('CareersReducer', function () {
    describe('undefined action', function () {
        it('should return the default state', function () {
            var initialState = fromCareers.initialState;
            var action = {};
            var state = fromCareers.reducer(undefined, action);
            expect(state).toBe(initialState);
        });
    });
    describe('Load Careers action', function () {
        it('should set loading to true', function () {
            var initialState = fromCareers.initialState;
            var action = new fromCareersActions.LoadCareers();
            var state = fromCareers.reducer(initialState, action);
            expect(state.loading).toEqual(true);
            expect(state.sections).toBeUndefined();
        });
    });
    describe('Load Careers Failure action', function () {
        it('should set loading to false if Failure', function () {
            var initialState = fromCareers.initialState;
            var action = new fromCareersActions.LoadCareersFailure({});
            var state = fromCareers.reducer(initialState, action);
            expect(state.loading).toEqual(false);
            expect(state.sections).toBeUndefined();
        });
        it('should return the previous state', function () {
            var initialState = fromCareers.initialState;
            var previousState = tslib_1.__assign({}, initialState, { loading: false });
            var action = new fromCareersActions.LoadCareersFailure({});
            var state = fromCareers.reducer(previousState, action);
            expect(state).toEqual(initialState);
        });
    });
    describe('Load Careers Success action', function () {
        it('should set Careers on success', function () {
            var initialState = fromCareers.initialState;
            var careers = CAREERS_MOCK;
            var action = new fromCareersActions.LoadCareersSuccess(careers);
            var state = fromCareers.reducer(initialState, action);
            expect(state.loading).toEqual(false);
            expect(state.sections).toEqual(careers.sections);
        });
    });
});
//# sourceMappingURL=careers.reducer.spec.js.map