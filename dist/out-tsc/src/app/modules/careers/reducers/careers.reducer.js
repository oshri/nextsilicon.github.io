import * as tslib_1 from "tslib";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CareersActionTypes } from '../actions/careers.actions';
export var stateName = 'careers';
export var initialState = {
    sections: undefined,
    selectedJob: undefined,
    loading: false
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CareersActionTypes.LoadCareers: {
            return tslib_1.__assign({}, state, { loading: true });
        }
        case CareersActionTypes.LoadCareersSuccess: {
            return tslib_1.__assign({}, state, { sections: action.payload.sections, loading: false });
        }
        case CareersActionTypes.LoadCareersFailure: {
            return tslib_1.__assign({}, state, { loading: false });
        }
        case CareersActionTypes.LoadJob: {
            return tslib_1.__assign({}, state, { loading: true });
        }
        case CareersActionTypes.LoadJobSuccess: {
            return tslib_1.__assign({}, state, { selectedJob: action.payload, loading: false });
        }
        case CareersActionTypes.LoadJobFailure: {
            return tslib_1.__assign({}, state, { loading: false });
        }
        default: {
            return state;
        }
    }
}
/**
 * Careers Reducers
 */
export var getCarrersState = createFeatureSelector(stateName);
export var getLoading = createSelector(getCarrersState, function (state) { return state.loading; });
export var getSelectedJob = createSelector(getCarrersState, function (state) { return state.selectedJob; });
//# sourceMappingURL=careers.reducer.js.map