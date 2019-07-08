import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Subject } from 'rxjs';
var ScrollToService = /** @class */ (function () {
    function ScrollToService(location) {
        this.location = location;
    }
    ScrollToService.prototype.scrollTo = function (element, duration, offset) {
        if (duration === void 0) { duration = 200; }
        if (offset === void 0) { offset = 0; }
        var subject = new Subject();
        if (typeof element === 'string') {
            var el = document.querySelector("#" + element);
            this.scrollToElement(el, duration, offset, subject);
        }
        else if (element instanceof HTMLElement) {
            this.scrollToElement(element, duration, offset, subject);
        }
        else {
            subject.error('Element not found');
        }
        return subject;
    };
    ScrollToService.prototype.scrollToElement = function (el, duration, offset, subject) {
        if (el) {
            var viewportOffset = el.getBoundingClientRect();
            var offsetTop = viewportOffset.top + window.pageYOffset;
            this.doScrolling(offsetTop + offset, duration, subject);
        }
        else {
            subject.error('Element not found');
        }
        return subject;
    };
    ScrollToService.prototype.doScrolling = function (elementY, duration, subject) {
        var startingY = window.pageYOffset;
        var diff = elementY - startingY;
        var start;
        window.requestAnimationFrame(function step(timestamp) {
            start = !start ? timestamp : start;
            var time = timestamp - start;
            window.scrollTo({
                top: startingY + diff,
                left: 0,
                behavior: 'smooth'
            });
            if (time < duration) {
                window.requestAnimationFrame(step);
                subject.next({});
            }
            else {
                subject.complete();
            }
        });
    };
    ScrollToService.prototype.updateUrlLocation = function (id) {
        var url = window.location.pathname + "#" + id;
        window.history.replaceState({}, '', "" + url);
    };
    ScrollToService.prototype.getCurrentHash = function () {
        return decodeURIComponent(this.location.hash.replace(/^#/, ''));
    };
    ScrollToService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [PlatformLocation])
    ], ScrollToService);
    return ScrollToService;
}());
export { ScrollToService };
//# sourceMappingURL=scrollTo.service.js.map