import * as tslib_1 from "tslib";
import * as layoutActions from './layout.action';
describe('Layout Actions', function () {
    describe('OpenSidenav', function () {
        it('should create an action', function () {
            var action = new layoutActions.OpenSidenav();
            expect(tslib_1.__assign({}, action)).toEqual({
                type: layoutActions.LayoutActionTypes.OpenSidenav
            });
        });
    });
    describe('CloseSidenav', function () {
        it('should create an action', function () {
            var action = new layoutActions.CloseSidenav();
            expect(tslib_1.__assign({}, action)).toEqual({
                type: layoutActions.LayoutActionTypes.CloseSidenav
            });
        });
    });
    describe('ToggleSidenav', function () {
        it('should create an action', function () {
            var action = new layoutActions.ToggleSidenav();
            expect(tslib_1.__assign({}, action)).toEqual({
                type: layoutActions.LayoutActionTypes.ToggleSidenav
            });
        });
    });
    describe('GoTO', function () {
        it('should create an action', function () {
            var payload = {
                display: 'About',
                scrollTo: true,
                target: 'about'
            };
            var action = new layoutActions.GoTO(payload);
            expect(tslib_1.__assign({}, action)).toEqual({
                type: layoutActions.LayoutActionTypes.GoTo,
                payload: payload
            });
        });
    });
    describe('NavigateToRouteDesktop', function () {
        it('should create an action', function () {
            var payload = {
                display: 'About',
                scrollTo: true,
                target: 'about'
            };
            var action = new layoutActions.NavigateToRouteDesktop(payload);
            expect(tslib_1.__assign({}, action)).toEqual({
                type: layoutActions.LayoutActionTypes.NavigateToRouteDesktop,
                payload: payload
            });
        });
    });
    describe('NavigateToRouteMobile', function () {
        it('should create an action', function () {
            var payload = {
                display: 'About',
                scrollTo: true,
                target: 'about'
            };
            var action = new layoutActions.NavigateToRouteMobile(payload);
            expect(tslib_1.__assign({}, action)).toEqual({
                type: layoutActions.LayoutActionTypes.NavigateToRouteMobile,
                payload: payload
            });
        });
    });
});
//# sourceMappingURL=layout.action.spec.js.map