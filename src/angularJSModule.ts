import * as angular from "angular";
import { upgradeModule } from "@uirouter/angular-hybrid";

import { AngularCmp } from './angularModule';
import { downgradeComponent } from '@angular/upgrade/static';

const appComponent = {
  template: `
    <h1>app component</h1>
    <downgraded-angular-cmp></downgraded-angular-cmp>
`};

export const sampleAppModuleAngularJS = angular.module("sampleapp", [ upgradeModule.name ])
  .component('app', appComponent)
  .directive('downgradedAngularCmp', downgradeComponent({ component: AngularCmp }));
