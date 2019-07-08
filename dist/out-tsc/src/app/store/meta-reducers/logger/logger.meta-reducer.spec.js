import { logger } from './logger.meta-reducer';
import { storeLogger } from 'ngrx-store-logger';
jest.mock('ngrx-store-logger', function () { return ({
    storeLogger: jest.fn(function () { return jest.fn(); })
}); });
describe('StoreLogger', function () {
    it('should init storeLogger', function () {
        var mockReducer = function (state) { return state; };
        logger(mockReducer);
        expect(storeLogger).toHaveBeenCalledWith({ collapsed: true });
    });
});
//# sourceMappingURL=logger.meta-reducer.spec.js.map