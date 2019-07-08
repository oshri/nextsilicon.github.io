import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ResizeObserver from 'resize-observer-polyfill';
import { throttleTime } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
var NsFullPageSectionComponent = /** @class */ (function () {
    function NsFullPageSectionComponent() {
        this.parentResize$ = new BehaviorSubject(null);
    }
    NsFullPageSectionComponent.prototype.ngOnInit = function () {
        if (this.resizeParentEl) {
            this.listenForParentResize();
        }
    };
    NsFullPageSectionComponent.prototype.ngOnDestroy = function () { };
    NsFullPageSectionComponent.prototype.listenForParentResize = function () {
        var _this = this;
        this.resizeObserver = new ResizeObserver(function (entries, observer) { return _this.parentResize$.next(entries); });
        this.resizeObserver.observe(this.resizeParentEl);
        this.parentResize$
            .pipe(untilDestroyed(this), throttleTime(100))
            .subscribe(function (entries) { return _this.onParentResize(entries); });
    };
    NsFullPageSectionComponent.prototype.onParentResize = function (entries, observer) {
        if (entries && entries.length) {
            console.log('entries', entries);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", HTMLElement)
    ], NsFullPageSectionComponent.prototype, "resizeParentEl", void 0);
    NsFullPageSectionComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-full-page-section',
            templateUrl: './fullPageSection.component.html',
            styleUrls: ['./fullPageSection.component.scss']
        })
    ], NsFullPageSectionComponent);
    return NsFullPageSectionComponent;
}());
export { NsFullPageSectionComponent };
//# sourceMappingURL=fullPageSection.component.js.map