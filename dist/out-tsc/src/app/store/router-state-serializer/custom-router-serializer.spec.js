import { CustomRouterSerializer } from './custom-router-serializer';
describe('CustomRouterSerializer', function () {
    var customRouterSerializer;
    var routerState;
    beforeEach(function () {
        customRouterSerializer = new CustomRouterSerializer();
        routerState = {
            url: '/mockUrl',
            root: {
                firstChild: {
                    queryParams: {
                        mockQueryParam: 'queryParam'
                    },
                    params: {
                        mockParam: 'param'
                    }
                }
            }
        };
    });
    it('should serialize', function () {
        var result = customRouterSerializer.serialize(routerState);
        expect(result).toEqual({
            url: '/mockUrl',
            queryParams: {
                mockQueryParam: 'queryParam'
            },
            params: {
                mockParam: 'param'
            }
        });
    });
});
//# sourceMappingURL=custom-router-serializer.spec.js.map