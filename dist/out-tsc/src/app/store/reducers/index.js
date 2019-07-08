import { createFeatureSelector, createSelector } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import * as fromCoreReducer from '@ns-core/reducers/layout.reducer';
import * as fromCareersReducer from '@ns-careers/reducers/careers.reducer';
export var reducers = {
    router: routerReducer,
    core: fromCoreReducer.reducer,
    careers: fromCareersReducer.reducer
};
/**
 * Core Reducers
 */
export var getCoreState = createFeatureSelector('core');
export var selectSidenavState = createSelector(getCoreState, function (state) { return state.showSidenav; });
//# sourceMappingURL=index.js.map