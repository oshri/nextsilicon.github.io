import { InjectionToken } from '@angular/core';
export var WindowToken = new InjectionToken('Window');
export function windowProvider() {
    return window;
}
//# sourceMappingURL=index.js.map