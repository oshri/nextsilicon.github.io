import { ErrorHandler, ReflectiveInjector } from '@angular/core';
import { Logger } from './logger.service';
describe('logger service', function () {
    var logSpy;
    var warnSpy;
    var logger;
    var errorHandler;
    beforeEach(function () {
        logSpy = spyOn(console, 'log');
        warnSpy = spyOn(console, 'warn');
        var injector = ReflectiveInjector.resolveAndCreate([Logger, { provide: ErrorHandler, useClass: MockErrorHandler }]);
        logger = injector.get(Logger);
        errorHandler = injector.get(ErrorHandler);
    });
    describe('log', function () {
        it('should delegate to console.log', function () {
            logger.log('param1', 'param2', 'param3');
            expect(logSpy).toHaveBeenCalledWith('param1', 'param2', 'param3');
        });
    });
    describe('warn', function () {
        it('should delegate to console.warn', function () {
            logger.warn('param1', 'param2', 'param3');
            expect(warnSpy).toHaveBeenCalledWith('param1', 'param2', 'param3');
        });
    });
    describe('error', function () {
        it('should delegate to ErrorHandler', function () {
            var err = new Error('some error message');
            logger.error(err);
            expect(errorHandler.handleError).toHaveBeenCalledWith(err);
        });
    });
});
var MockErrorHandler = /** @class */ (function () {
    function MockErrorHandler() {
        this.handleError = jasmine.createSpy('handleError');
    }
    return MockErrorHandler;
}());
//# sourceMappingURL=logger.service.spec.js.map