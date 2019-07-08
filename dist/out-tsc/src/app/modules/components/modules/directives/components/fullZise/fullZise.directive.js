import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
var NsFullSizeDirective = /** @class */ (function () {
    function NsFullSizeDirective(el) {
        this.el = el;
    }
    NsFullSizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.setHeight(this.el.nativeElement);
        this.windowResizeSubscription$ = fromEvent(window, 'resize')
            .pipe(untilDestroyed(this), throttleTime(100))
            .subscribe(function (data) {
            _this.setHeight(_this.el.nativeElement);
        });
    };
    NsFullSizeDirective.prototype.setHeight = function (el) {
        el.style.minHeight = document.documentElement.clientHeight + "px";
        el.style.width = document.documentElement.clientWidth + "px";
    };
    NsFullSizeDirective.prototype.ngOnDestroy = function () { };
    NsFullSizeDirective = tslib_1.__decorate([
        Directive({
            selector: '[nsFullSize]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], NsFullSizeDirective);
    return NsFullSizeDirective;
}());
export { NsFullSizeDirective };
//# sourceMappingURL=fullZise.directive.js.map