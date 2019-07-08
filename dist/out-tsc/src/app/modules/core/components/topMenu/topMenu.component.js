import * as tslib_1 from "tslib";
import { Component, HostBinding, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { distinctUntilChanged, map, pairwise, throttleTime } from 'rxjs/internal/operators';
import { fromEvent } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { VisibilityState, Direction } from '../../models';
var NsTopMenuComponent = /** @class */ (function () {
    function NsTopMenuComponent(iconRegistry, sanitizer, router) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.router = router;
        this.isVisible = true;
        this.togglesidenav = new EventEmitter();
        this.iconRegistry.addSvgIcon('ns-menu', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/burger.svg'));
    }
    Object.defineProperty(NsTopMenuComponent.prototype, "animate", {
        get: function () {
            return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
        },
        enumerable: true,
        configurable: true
    });
    NsTopMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.scroll$ = fromEvent(window, 'scroll').pipe(throttleTime(10), map(function () { return window.pageYOffset; }), pairwise(), map(function (_a) {
            var y1 = _a[0], y2 = _a[1];
            return (y2 < y1 ? Direction.Up : Direction.Down);
        }), distinctUntilChanged());
        this.scroll$.pipe(untilDestroyed(this)).subscribe(function (direction) {
            _this.isVisible = direction === Direction.Up ? true : false;
        });
    };
    NsTopMenuComponent.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    NsTopMenuComponent.prototype.ngOnDestroy = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], NsTopMenuComponent.prototype, "menustatus", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], NsTopMenuComponent.prototype, "togglesidenav", void 0);
    tslib_1.__decorate([
        HostBinding('@animate'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [])
    ], NsTopMenuComponent.prototype, "animate", null);
    NsTopMenuComponent = tslib_1.__decorate([
        Component({
            selector: 'ns-top-menu',
            templateUrl: './topMenu.component.html',
            styleUrls: ['./topMenu.component.scss'],
            animations: [
                trigger('animate', [
                    state(VisibilityState.Hidden, style({ transform: 'translateY(-100%)' })),
                    state(VisibilityState.Visible, style({ transform: 'translateY(0)' })),
                    transition('* => *', animate('200ms ease-in'))
                ])
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [MatIconRegistry, DomSanitizer, Router])
    ], NsTopMenuComponent);
    return NsTopMenuComponent;
}());
export { NsTopMenuComponent };
//# sourceMappingURL=topMenu.component.js.map