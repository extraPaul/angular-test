(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('incuvers-widgets', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['incuvers-widgets'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IncuversWidgetsService = /** @class */ (function () {
        function IncuversWidgetsService() {
        }
        IncuversWidgetsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        IncuversWidgetsService.ctorParameters = function () { return []; };
        /** @nocollapse */ IncuversWidgetsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function IncuversWidgetsService_Factory() { return new IncuversWidgetsService(); }, token: IncuversWidgetsService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [IncuversWidgetsComponent],
                        imports: [],
                        exports: [IncuversWidgetsComponent]
                    },] }
        ];
        return IncuversWidgetsModule;
    }());

    exports.IncuversWidgetsComponent = IncuversWidgetsComponent;
    exports.IncuversWidgetsModule = IncuversWidgetsModule;
    exports.IncuversWidgetsService = IncuversWidgetsService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=incuvers-widgets.umd.js.map
