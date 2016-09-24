/**
 * This file is the main entry point for the entire app.
 *
 * If the application is being bundled, this is where the bundling process
 * starts.  If the application is being loaded by an es6 module loader, this
 * is the entry point.
 *
 * Point Webpack or SystemJS to this file.
 *
 * This module imports all the different parts of the application and registers them with angular.
 * - Submodules
 *   - States
 *   - Components
 *   - Directives
 *   - Services
 *   - Filters
 *   - Run and Config blocks
 *     - Transition Hooks
 * - 3rd party Libraries and angular1 module
 *
 * Then this module creates the ng-upgrade adapter
 * and bootstraps the hybrid application
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//////////////////// APP MODULES ///////////////
// Create the angular 1 module for the application
require("./ngmodule");
// import all the sub module definitions
// This registers each app module's states, directives, components, filters,
// services, and config/run blocks with the ngmodule
require("../global/index");
require("../main/index");
require("../mymessages/index");
require("../prefs/index");
require("../contacts/contacts.futurestate");
// Import CSS (SystemJS will inject it into the document)
require("font-awesome/css/font-awesome.css!");
require("bootstrap/css/bootstrap.css!");
// Google analytics
require('../util/ga');
////////////// HYBRID BOOTSTRAP ///////////////
var core_1 = require("@angular/core");
var upgrade_1 = require('@angular/upgrade');
var platform_browser_1 = require("@angular/platform-browser");
var ui_router_ng1_to_ng2_1 = require("ui-router-ng1-to-ng2");
// Create an NgModule for the ng2 portion of the hybrid app
//
// Use @UIRouterModule instead of @NgModule to allow use of the UIRouter directives
// and add the UIRouter providers to the root ng2 injector
//
// import the Ng1ToNg2Module to supply the ng1-to-ng2 directives
var SampleAppModule = (function () {
    function SampleAppModule() {
    }
    SampleAppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ui_router_ng1_to_ng2_1.Ng1ToNg2Module],
            providers: [
                { provide: core_1.NgModuleFactoryLoader, useClass: core_1.SystemJsNgModuleLoader }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SampleAppModule);
    return SampleAppModule;
}());
// Create ngUpgrade adapter
exports.upgradeAdapter = new upgrade_1.UpgradeAdapter(SampleAppModule);
// Supply ui-router-ng1-to-ng1 with the upgrade adapter.
// This adds glue to the ui-router instance for angular 1 (ng1 hosts the app)
// which allows it to route to ng2 components
ui_router_ng1_to_ng2_1.uiRouterNgUpgrade.setUpgradeAdapter(exports.upgradeAdapter);
// Register some ng1 services as ng2 providers
exports.upgradeAdapter.upgradeNg1Provider('$state');
exports.upgradeAdapter.upgradeNg1Provider('DialogService');
exports.upgradeAdapter.upgradeNg1Provider('Contacts');
// Manually bootstrap the app with the Upgrade Adapter (instead of ng-app)
exports.upgradeAdapter.bootstrap(document.body, ['demo']);
//# sourceMappingURL=bootstrap.js.map