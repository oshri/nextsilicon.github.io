import { storeLogger } from 'ngrx-store-logger';
export function logger(reducer) {
    return storeLogger({ collapsed: true })(reducer);
}
//# sourceMappingURL=logger.meta-reducer.js.map