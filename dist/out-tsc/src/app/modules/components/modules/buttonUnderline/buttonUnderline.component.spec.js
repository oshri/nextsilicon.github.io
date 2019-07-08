import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { async, TestBed, fakeAsync } from '@angular/core/testing';
import { NsButtonUnderlineComponent } from './buttonUnderline.component';
var ButtonWithContentComponent = /** @class */ (function () {
    function ButtonWithContentComponent() {
    }
    ButtonWithContentComponent = tslib_1.__decorate([
        Component({
            template: "\n\t\t<ns-button-underline>Text to be render</ns-button-underline>\n\t"
        })
    ], ButtonWithContentComponent);
    return ButtonWithContentComponent;
}());
describe('NsButtonUnderlineComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NsButtonUnderlineComponent, ButtonWithContentComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NsButtonUnderlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should render button without disabled in default', function () {
        var buttonNativeElement = fixture.nativeElement.querySelector('.button-underline-wrap');
        component.disabled = false;
        fixture.detectChanges();
        expect(buttonNativeElement.disabled).toBeFalsy();
    });
    it('should render button with disabled', function () {
        var buttonNativeElement = fixture.nativeElement.querySelector('.button-underline-wrap');
        component.disabled = true;
        fixture.detectChanges();
        expect(buttonNativeElement.disabled).toBeTruthy();
    });
    it('should render button text inside ng-content', fakeAsync(function () {
        var fixtureButtonWithContent = TestBed.createComponent(ButtonWithContentComponent);
        var okButtunWrap = fixtureButtonWithContent.debugElement.nativeElement;
        var span = okButtunWrap.querySelector('span');
        fixtureButtonWithContent.detectChanges();
        expect(span.innerHTML).toBe('Text to be render');
    }));
});
//# sourceMappingURL=buttonUnderline.component.spec.js.map