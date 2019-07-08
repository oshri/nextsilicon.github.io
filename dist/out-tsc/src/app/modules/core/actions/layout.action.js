export var LayoutActionTypes;
(function (LayoutActionTypes) {
    LayoutActionTypes["OpenSidenav"] = "[Layout] Open Sidenav";
    LayoutActionTypes["CloseSidenav"] = "[Layout] Close Sidenav";
    LayoutActionTypes["ToggleSidenav"] = "[Layout] Toggle Sidenav";
    LayoutActionTypes["GoTo"] = "[Layout] Go TO";
    LayoutActionTypes["NavigateToRouteDesktop"] = "[Layout] Navigate To Route Desktop";
    LayoutActionTypes["NavigateToRouteMobile"] = "[Layout] Navigate To Route Mobile";
})(LayoutActionTypes || (LayoutActionTypes = {}));
var NavigateToRouteMobile = /** @class */ (function () {
    function NavigateToRouteMobile(payload) {
        this.payload = payload;
        this.type = LayoutActionTypes.NavigateToRouteMobile;
    }
    return NavigateToRouteMobile;
}());
export { NavigateToRouteMobile };
var NavigateToRouteDesktop = /** @class */ (function () {
    function NavigateToRouteDesktop(payload) {
        this.payload = payload;
        this.type = LayoutActionTypes.NavigateToRouteDesktop;
    }
    return NavigateToRouteDesktop;
}());
export { NavigateToRouteDesktop };
var GoTO = /** @class */ (function () {
    function GoTO(payload) {
        this.payload = payload;
        this.type = LayoutActionTypes.GoTo;
    }
    return GoTO;
}());
export { GoTO };
var OpenSidenav = /** @class */ (function () {
    function OpenSidenav() {
        this.type = LayoutActionTypes.OpenSidenav;
    }
    return OpenSidenav;
}());
export { OpenSidenav };
var CloseSidenav = /** @class */ (function () {
    function CloseSidenav() {
        this.type = LayoutActionTypes.CloseSidenav;
    }
    return CloseSidenav;
}());
export { CloseSidenav };
var ToggleSidenav = /** @class */ (function () {
    function ToggleSidenav() {
        this.type = LayoutActionTypes.ToggleSidenav;
    }
    return ToggleSidenav;
}());
export { ToggleSidenav };
//# sourceMappingURL=layout.action.js.map