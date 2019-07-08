import * as tslib_1 from "tslib";
import { environment } from '../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
var MetaDataService = /** @class */ (function () {
    function MetaDataService(meta, title) {
        this.meta = meta;
        this.title = title;
        this.appColor = '#000CE4';
        this.appImage = '/assets/images/badge.svg';
        this.appTitle = 'Next Silicon';
        this.appDescription = 'We believe in a smarter future and want to create new opportunities for innovation. In order to achieve this, we are rethinking computer processing for the future of computing.';
    }
    MetaDataService.prototype.setMetaData = function (config) {
        var _this = this;
        var description = config.description || this.appDescription;
        var image = config.image || this.appImage;
        var title = config.title ? "" + config.title : this.appTitle;
        var link = config.link ? environment.baseUrl + "/" + config.link : environment.baseUrl;
        this.title.setTitle(title);
        var tags = [
            { name: 'description', content: description },
            { name: 'theme-color', content: this.appColor },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@nextsilicon' },
            { name: 'twitter:image', content: environment.baseUrl + "/" + image },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
            { name: 'apple-mobile-web-app-title', content: title },
            { name: 'apple-touch-startup-image', content: image },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            { property: 'og:url', content: link }
        ];
        tags.forEach(function (tag) { return _this.meta.updateTag(tag); });
    };
    MetaDataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Meta, Title])
    ], MetaDataService);
    return MetaDataService;
}());
export { MetaDataService };
//# sourceMappingURL=metaData.service.js.map