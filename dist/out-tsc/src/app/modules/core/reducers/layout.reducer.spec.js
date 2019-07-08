import * as layoutReducer from './layout.reducer';
import * as layoutActions from '../actions/layout.action';
describe('LayoutReducer', function () {
    describe('undefined action', function () {
        it('should return the default state', function () {
            var initialState = layoutReducer.initialState;
            var action = {};
            var state = layoutReducer.reducer(undefined, action);
            expect(state).toBe(initialState);
        });
    });
    describe('CloseSidenav action', function () {
        it('should set showSidenav to false', function () {
            var initialState = layoutReducer.initialState;
            var action = new layoutActions.CloseSidenav();
            var state = layoutReducer.reducer(initialState, action);
            expect(state.showSidenav).toEqual(false);
        });
    });
    describe('OpenSidenav action', function () {
        it('should set showSidenav to true', function () {
            var initialState = layoutReducer.initialState;
            var action = new layoutActions.OpenSidenav();
            var state = layoutReducer.reducer(initialState, action);
            expect(state.showSidenav).toEqual(true);
        });
    });
    describe('ToggleSidenav action', function () {
        it('should set thi opposite value of showSidenav', function () {
            var initialState = layoutReducer.initialState;
            var action = new layoutActions.ToggleSidenav();
            var state = layoutReducer.reducer(initialState, action);
            expect(state.showSidenav).toEqual(true);
        });
    });
});
//# sourceMappingURL=layout.reducer.spec.js.map