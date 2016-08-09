/**
 * This file imports the third party library dependencies, then creates the angular module "demo"
 * and exports it.
 */
"use strict";
// External dependencies
var angular = require("angular");
var angular_ui_router_1 = require("angular-ui-router");
var ui_router_visualizer_1 = require("ui-router-visualizer");
// Create the angular 1 module "demo".
//
// Since it is exported, other parts of the application (in other files) can then import it and register things.
// In bootstrap.js, the module is imported, and the components, services, and states are registered.
exports.ngmodule = angular.module("demo", [angular_ui_router_1.default, 'ui.router.upgrade']);
// Show ui-router-visualizer
exports.ngmodule.run(['$injector', function ($injector) {
        if ($injector.has('ng1UIRouter')) {
            ui_router_visualizer_1.visualizer($injector.get('ng1UIRouter'));
        }
        else if ($injector.has('$uiRouter')) {
            ui_router_visualizer_1.visualizer($injector.get('$uiRouter'));
        }
    }]);
//# sourceMappingURL=ngmodule.js.map