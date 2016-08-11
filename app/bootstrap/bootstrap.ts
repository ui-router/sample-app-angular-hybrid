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


//////////////////// APP MODULES ///////////////
// Create the angular 1 module for the application
import "./ngmodule";

// import all the sub module definitions
// This registers each app module's states, directives, components, filters,
// services, and config/run blocks with the ngmodule
import "../global/index";
import "../main/index";
import "../mymessages/index";
import "../prefs/index";
import "../contacts/contacts.futurestate";



// Import CSS (SystemJS will inject it into the document)
import "font-awesome/css/font-awesome.css!"
import "bootstrap/css/bootstrap.css!"

// Google analytics
import '../util/ga';


////////////// HYBRID BOOTSTRAP ///////////////

import {NgModuleFactoryLoader, SystemJsNgModuleLoader} from "@angular/core";
import {UpgradeAdapter} from '@angular/upgrade';
import {BrowserModule} from "@angular/platform-browser";

import {UIRouterModule} from "ui-router-ng2";
import {uiRouterNgUpgrade, Ng1ToNg2Module} from "ui-router-ng1-to-ng2";

// Create an NgModule for the ng2 portion of the hybrid app
//
// Use @UIRouterModule instead of @NgModule to allow use of the UIRouter directives
// and add the UIRouter providers to the root ng2 injector
//
// import the Ng1ToNg2Module to supply the ng1-to-ng2 directives
@UIRouterModule({
  imports: [BrowserModule, Ng1ToNg2Module],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  ]
}) class SampleAppModule {}

// Create ngUpgrade adapter
export const upgradeAdapter = new UpgradeAdapter(SampleAppModule);

// Supply ui-router-ng1-to-ng1 with the upgrade adapter.
// This adds glue to the ui-router instance for angular 1 (ng1 hosts the app)
// which allows it to route to ng2 components
uiRouterNgUpgrade.setUpgradeAdapter(upgradeAdapter);

// Register some ng1 services as ng2 providers
upgradeAdapter.upgradeNg1Provider('$state');
upgradeAdapter.upgradeNg1Provider('DialogService');
upgradeAdapter.upgradeNg1Provider('Contacts');

// Manually bootstrap the app with the Upgrade Adapter (instead of ng-app)
upgradeAdapter.bootstrap(document.body, ['demo']);
