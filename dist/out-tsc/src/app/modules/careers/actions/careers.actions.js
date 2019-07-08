export var CareersActionTypes;
(function (CareersActionTypes) {
    CareersActionTypes["LoadCareers"] = "[Careers] Load Careers";
    CareersActionTypes["LoadCareersSuccess"] = "[Careers] Load Careers Success";
    CareersActionTypes["LoadCareersFailure"] = "[Careers] Load Careers Failure";
    CareersActionTypes["LoadJob"] = "[Careers] Load Job";
    CareersActionTypes["LoadJobSuccess"] = "[Careers] Load Job Success";
    CareersActionTypes["LoadJobFailure"] = "[Careers] Load Job Failure";
    CareersActionTypes["Loading"] = "[Careers] Loading";
})(CareersActionTypes || (CareersActionTypes = {}));
var LoadJob = /** @class */ (function () {
    function LoadJob(payload) {
        this.payload = payload;
        this.type = CareersActionTypes.LoadJob;
    }
    return LoadJob;
}());
export { LoadJob };
var LoadJobSuccess = /** @class */ (function () {
    function LoadJobSuccess(payload) {
        this.payload = payload;
        this.type = CareersActionTypes.LoadJobSuccess;
    }
    return LoadJobSuccess;
}());
export { LoadJobSuccess };
var LoadJobFailure = /** @class */ (function () {
    function LoadJobFailure(payload) {
        this.payload = payload;
        this.type = CareersActionTypes.LoadJobFailure;
    }
    return LoadJobFailure;
}());
export { LoadJobFailure };
var Loading = /** @class */ (function () {
    function Loading() {
        this.type = CareersActionTypes.Loading;
    }
    return Loading;
}());
export { Loading };
var LoadCareers = /** @class */ (function () {
    function LoadCareers() {
        this.type = CareersActionTypes.LoadCareers;
    }
    return LoadCareers;
}());
export { LoadCareers };
var LoadCareersSuccess = /** @class */ (function () {
    function LoadCareersSuccess(payload) {
        this.payload = payload;
        this.type = CareersActionTypes.LoadCareersSuccess;
    }
    return LoadCareersSuccess;
}());
export { LoadCareersSuccess };
var LoadCareersFailure = /** @class */ (function () {
    function LoadCareersFailure(payload) {
        this.payload = payload;
        this.type = CareersActionTypes.LoadCareersFailure;
    }
    return LoadCareersFailure;
}());
export { LoadCareersFailure };
//# sourceMappingURL=careers.actions.js.map