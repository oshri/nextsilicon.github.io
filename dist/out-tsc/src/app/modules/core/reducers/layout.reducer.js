import * as tslib_1 from "tslib";
import { LayoutActionTypes } from '../actions/layout.action';
export var initialState = {
    showSidenav: false
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case LayoutActionTypes.CloseSidenav:
            return tslib_1.__assign({}, state, { showSidenav: false });
        case LayoutActionTypes.OpenSidenav:
            return tslib_1.__assign({}, state, { showSidenav: true });
        case LayoutActionTypes.ToggleSidenav:
            return tslib_1.__assign({}, state, { showSidenav: !state.showSidenav });
        default:
            return state;
    }
}
//# sourceMappingURL=layout.reducer.js.map