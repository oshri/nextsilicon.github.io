import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var CareersService = /** @class */ (function () {
    function CareersService(http) {
        this.http = http;
    }
    CareersService.prototype.get = function () {
        return this.http.get('assets/data/careers/careers.json');
    };
    CareersService.prototype.getJob = function (number) {
        return this.http.get("assets/data/careers/" + number + ".json");
    };
    CareersService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CareersService);
    return CareersService;
}());
export { CareersService };
//# sourceMappingURL=careers.service.js.map