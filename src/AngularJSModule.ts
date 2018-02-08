import * as angular from "angular";

import { AngularCmp } from './AngularModule';
import { downgradeComponent } from '@angular/upgrade/static';

const appComponent = {
  template: `
    <h1>AngularJS app component</h1>
    <downgraded-angular-cmp></downgraded-angular-cmp>
`};

export const sampleAppModuleAngularJS = angular.module("sampleapp", [ ])
  .component('app', appComponent)
  .directive('downgradedAngularCmp', downgradeComponent({ component: AngularCmp }));
