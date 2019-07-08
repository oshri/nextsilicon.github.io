import 'jest-preset-angular';
var mock = function () {
    var storage = {};
    return {
        getItem: function (key) { return (key in storage ? storage[key] : null); },
        setItem: function (key, value) { return (storage[key] = value || ''); },
        removeItem: function (key) { return delete storage[key]; },
        clear: function () { return (storage = {}); }
    };
};
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'open', { value: function () { } });
Object.defineProperty(document, 'doctype', {
    value: '<!DOCTYPE html>'
});
Object.defineProperty(window, 'getComputedStyle', {
    value: function () {
        return {
            display: 'none',
            appearance: ['-webkit-appearance'],
            getPropertyValue: function (prop) {
                return '';
            }
        };
    }
});
/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, 'transform', {
    value: function () {
        return {
            enumerable: true,
            configurable: true
        };
    }
});
/**
 * Material Design library uses matchMedia browser api,
 * which is not presented in JsDom we need mock it.
 */
Object.defineProperty(window, 'matchMedia', {
    value: function () { return ({
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    }); }
});
/**
 * Suppress console warnings
 */
var WARN_SUPPRESSING_PATTERNS = [/Hammer\.JS is not loaded/];
var warn = console.warn;
Object.defineProperty(console, 'warn', {
    value: function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        if (!WARN_SUPPRESSING_PATTERNS.some(function (pattern) { return pattern.test(params[0]); })) {
            warn.apply(void 0, params);
        }
    }
});
//# sourceMappingURL=setupJest.js.map