/**
 * This file imports the third party library dependencies, then creates the angular module "demo"
 * and exports it.
 */

// External dependencies
import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { upgradeModule } from "@uirouter/angular-hybrid";

// Feature Modules
import { globalModule } from "./global/index";
import { homeModule } from "./home/index";
import { mymessagesModule } from './mymessages/index';

// Create the angular 1 module "demo".
//
// Since it is exported, other parts of the application (in other files) can then import it and register things.
// In bootstrap.js, the module is imported, and the components, services, and states are registered.
export const sampleAppModuleAngularJS = angular.module("sampleapp", [
  uiRouter,
  upgradeModule.name,
  homeModule.name,
  globalModule.name,
  mymessagesModule.name,
]);

// Apply some global configuration...

// If the user enters a URL that doesn't match any known URL (state), send them to `/welcome`
const otherwiseConfigBlock = ['$urlRouterProvider', '$locationProvider', ($urlRouterProvider, $locationProvider) => {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise("/welcome");
}];
sampleAppModuleAngularJS.config(otherwiseConfigBlock);

// Enable tracing of each TRANSITION... (check the javascript console)

// This syntax `$trace.enable(1)` is an alternative to `$trace.enable("TRANSITION")`.
// Besides "TRANSITION", you can also enable tracing for : "RESOLVE", "HOOK", "INVOKE", "UIVIEW", "VIEWCONFIG"
const traceRunBlock = ['$trace', $trace => { $trace.enable(1); }];
sampleAppModuleAngularJS.run(traceRunBlock);
