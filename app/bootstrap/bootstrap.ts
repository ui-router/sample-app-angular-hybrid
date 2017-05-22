/** * This file is the main entry point for the entire app.
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
import { ngmodule } from "./angularJSModule";

// import all the sub module definitions
// This registers each app module's states, directives, components, filters,
// services, and config/run blocks with the ngmodule
import '../global/index';
import '../main/index';
import '../mymessages/index';
import '../prefs/index';

// Google analytics
import '../util/ga';

////////////// HYBRID BOOTSTRAP ///////////////

import * as angular from 'angular';

import { Injector } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UIRouter, UrlService } from '@uirouter/core';

import { SampleAppModule } from './angularModule';


// Tell UI-Router to wait to synchronize the URL (until all bootstrapping is complete)e
ngmodule.config([ '$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept() ]);

// Manually bootstrap the Angular app
// The DOM must be already be available
platformBrowserDynamic().bootstrapModule(SampleAppModule).then(platformRef => {
  const injector: Injector = platformRef.injector;
  const upgrade = injector.get(UpgradeModule) as UpgradeModule;

  // Manually bootstrap the AngularJS app
  upgrade.bootstrap(document.body, ['demo']);

  // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
  const url: UrlService = injector.get(UIRouter).urlService;

  // Instruct UIRouter to listen to URL changes
  url.listen();
  url.sync();
});
