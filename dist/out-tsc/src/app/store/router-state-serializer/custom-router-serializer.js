var CustomRouterSerializer = /** @class */ (function () {
    function CustomRouterSerializer() {
    }
    CustomRouterSerializer.prototype.serialize = function (routerState) {
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var url = routerState.url;
        var queryParams = route.queryParams;
        var params = route.params;
        return { url: url, params: params, queryParams: queryParams };
    };
    return CustomRouterSerializer;
}());
export { CustomRouterSerializer };
//# sourceMappingURL=custom-router-serializer.js.map