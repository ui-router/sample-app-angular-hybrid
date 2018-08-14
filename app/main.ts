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

// Google analytics
import './util/ga';
import 'zone.js';
import { NgZone } from '@angular/core';

////////////// HYBRID BOOTSTRAP ///////////////
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UIRouter, UrlService } from '@uirouter/core';
import { visualizer } from '@uirouter/visualizer';

import { SampleAppModuleAngular } from './angularModule';
import { sampleAppModuleAngularJS } from "./angularJSModule";

// Using AngularJS config block, call `deferIntercept()`.
// This tells UI-Router to delay the initial URL sync (until all bootstrapping is complete)
sampleAppModuleAngularJS.config([ '$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept() ]);

// Manually bootstrap the Angular app
platformBrowserDynamic().bootstrapModule(SampleAppModuleAngular).then(platformRef => {
  // Initialize the Angular Module
  // get() the UIRouter instance from DI to initialize the router
  const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

  // Instruct UIRouter to listen to URL changes
  function startUIRouter() {
    urlService.listen();
    urlService.sync();
  }

  platformRef.injector.get<NgZone>(NgZone).run(startUIRouter);
});

// Show ui-router-visualizer
sampleAppModuleAngularJS.run(['$uiRouter', ($uiRouter) => visualizer($uiRouter) ]);
