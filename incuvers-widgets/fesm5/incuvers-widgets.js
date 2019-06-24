import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IncuversWidgetsService = /** @class */ (function () {
    function IncuversWidgetsService() {
    }
    IncuversWidgetsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    IncuversWidgetsService.ctorParameters = function () { return []; };
    /** @nocollapse */ IncuversWidgetsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function IncuversWidgetsService_Factory() { return new IncuversWidgetsService(); }, token: IncuversWidgetsService, providedIn: "root" });
    return IncuversWidgetsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IncuversWidgetsComponent = /** @class */ (function () {
    function IncuversWidgetsComponent() {
    }
    /**
     * @return {?}
     */
    IncuversWidgetsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    IncuversWidgetsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-incuvers-widgets',
                    template: "\n    <p>\n      incuvers-widgets works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    IncuversWidgetsComponent.ctorParameters = function () { return []; };
    return IncuversWidgetsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IncuversWidgetsModule = /** @class */ (function () {
    function IncuversWidgetsModule() {
    }
    IncuversWidgetsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IncuversWidgetsComponent],
                    imports: [],
                    exports: [IncuversWidgetsComponent]
                },] }
    ];
    return IncuversWidgetsModule;
}());

export { IncuversWidgetsComponent, IncuversWidgetsModule, IncuversWidgetsService };
//# sourceMappingURL=incuvers-widgets.js.map
