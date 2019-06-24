import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IncuversWidgetsService {
    constructor() { }
}
IncuversWidgetsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
IncuversWidgetsService.ctorParameters = () => [];
/** @nocollapse */ IncuversWidgetsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function IncuversWidgetsService_Factory() { return new IncuversWidgetsService(); }, token: IncuversWidgetsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IncuversWidgetsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
IncuversWidgetsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-incuvers-widgets',
                template: `
    <p>
      incuvers-widgets works!
    </p>
  `
            }] }
];
/** @nocollapse */
IncuversWidgetsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IncuversWidgetsModule {
}
IncuversWidgetsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IncuversWidgetsComponent],
                imports: [],
                exports: [IncuversWidgetsComponent]
            },] }
];

export { IncuversWidgetsComponent, IncuversWidgetsModule, IncuversWidgetsService };
//# sourceMappingURL=incuvers-widgets.js.map
