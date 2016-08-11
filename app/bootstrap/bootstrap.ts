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

// Import the angular1 module
import {ngmodule} from "./ngmodule";

//////////////////// MODULES ///////////////

// import all the sub module definitions
import {GLOBAL_MODULE} from "../global/index";
import {MAIN_MODULE} from "../main/index";
import {CONTACTS_MODULE, ContactsModule} from "../contacts/index";
import {MYMESSAGES_MODULE} from "../mymessages/index";
import {PREFS_MODULE} from "../prefs/index";

const BLANK_MODULE = {
  states: [], components: {}, directives: {}, services: {}, filters: {}, configBlocks: [], runBlocks: []
};

// make sure all modules have all the keys from BLANK_MODULE.
let MODULES = [GLOBAL_MODULE, MAIN_MODULE, CONTACTS_MODULE, MYMESSAGES_MODULE, PREFS_MODULE]
    .map(module => Object.assign({}, BLANK_MODULE, module));

// Register each module's states, directives, components, filters, services, and config/run blocks
MODULES.forEach(module => {
  ngmodule.config($stateProvider => module.states.forEach(state => $stateProvider.state(state)));
  Object.keys(module.components).forEach(name => ngmodule.component(name, module.components[name]));
  Object.keys(module.directives).forEach(name => ngmodule.directive(name, module.directives[name]));
  Object.keys(module.services).forEach(name => ngmodule.service(name, module.services[name]));
  Object.keys(module.filters).forEach(name => ngmodule.filter(name, module.filters[name]));
  module.configBlocks.forEach(configBlock => ngmodule.config(configBlock));
  module.runBlocks.forEach(runBlock => ngmodule.run(runBlock));
});

// Import CSS (SystemJS will inject it into the document)
import "font-awesome/css/font-awesome.css!"
import "bootstrap/css/bootstrap.css!"

// Google analytics
import '../util/ga';

import {UpgradeAdapter} from '@angular/upgrade';
import {uiRouterNgUpgrade} from "ui-router-ng1-to-ng2";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {UIRouterModule} from "./uirouter";

// Create an AppModule for the ng2 portion of the hybrid app
@NgModule({
  imports: [BrowserModule, UIRouterModule, ContactsModule],
}) class SampleApp {}

// ============================================================
// Create upgrade adapter and bootstrap the hybrid ng1/ng2 app
// ============================================================
export const upgradeAdapter = new UpgradeAdapter(SampleApp);

// Supply the ui-router with the upgrade adapter
uiRouterNgUpgrade.setUpgradeAdapter(upgradeAdapter);

// Register some ng1 services as ng2 providers
upgradeAdapter.upgradeNg1Provider('$state');
upgradeAdapter.upgradeNg1Provider('DialogService');
upgradeAdapter.upgradeNg1Provider('Contacts');

// Manually bootstrap the app with the Upgrade Adapter (instead of ng-app)
upgradeAdapter.bootstrap(document.body, ['demo'])
