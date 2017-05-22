/**
 * This file imports the third party library dependencies, then creates the angular module "demo"
 * and exports it.
 */

// External dependencies
import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";
import {visualizer} from "@uirouter/visualizer";

import {IInjectable, Ng1StateDeclaration} from "@uirouter/angularjs";
// Types from @types/angular
import ComponentDefinition = angular.IComponentOptions;
import IDirective = angular.IDirective;
import IServiceProvider = angular.IServiceProvider;
import IAngularBootstrapConfig = angular.IAngularBootstrapConfig;
import IModule = angular.IModule;
import IDirectiveFactory = angular.IDirectiveFactory;
import Injectable = angular.Injectable;

// Create the angular 1 module "demo".
//
// Since it is exported, other parts of the application (in other files) can then import it and register things.
// In bootstrap.js, the module is imported, and the components, services, and states are registered.
export const ngmodule = angular.module("demo", [uiRouter, 'ui.router.upgrade']);

// Show ui-router-visualizer
ngmodule.run(['$uiRouter', ($uiRouter) => visualizer($uiRouter) ]);


// Export code to register an "AppModule", used by each app feature module
export interface AppModule {
  states?: Ng1StateDeclaration[];
  components?: { [name: string]: ComponentDefinition };
  directives?: { [name: string]: Injectable<IDirectiveFactory> };
  services?: { [name: string]: IInjectable };
  filters?: { [name: string]: IInjectable };
  configBlocks?: IInjectable[];
  runBlocks?: IInjectable[];
}

const BLANK_MODULE: AppModule = {
  states: [],
  components: {},
  directives: {},
  services: {},
  filters: {},
  configBlocks: [],
  runBlocks: []
};

/**
 * Register an app module's states, directives, components, filters, services,
 * and config/run blocks with the `ngmodule`
 *
 * @param ngModule the `angular.module()` object
 * @param appModule the feature module consisting of components, states, services, etc
 */
export function loadNg1AppModule(ngModule: IModule, appModule: AppModule) {
  let module = Object.assign({}, BLANK_MODULE, appModule);

  ngModule.config(['$stateProvider', $stateProvider => module.states.forEach(state => $stateProvider.state(state))]);

  Object.keys(module.components).forEach(name => ngModule.component(name, module.components[name]));

  Object.keys(module.directives).forEach(name => ngModule.directive(name, module.directives[name]));

  Object.keys(module.services).forEach(name => ngModule.service(name, module.services[name]));

  Object.keys(module.filters).forEach(name => ngModule.filter(name, module.filters[name]));

  module.configBlocks.forEach(configBlock => ngModule.config(configBlock));

  module.runBlocks.forEach(runBlock => ngModule.run(runBlock));

  return ngModule;
}

