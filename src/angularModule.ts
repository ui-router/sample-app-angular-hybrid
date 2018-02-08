import { Component, Inject, NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { StateService } from '@uirouter/core';

@Component({
  selector: 'angular-cmp',
  template: `<h1>Hi from the Angular component</h1>`,
})
export class AngularCmp {
  constructor(
      // @Inject(StateService) public stateService: StateService, // this works
      public stateService: StateService, // this does not work
  ) {
    console.log("StateService:", this.stateService)
  }
}

// The main NgModule for the Angular portion of the hybrid app
@NgModule({
  imports: [
    BrowserModule,
    // Provide angular upgrade capabilities
    UpgradeModule,
    // Provides the @uirouter/angular-hybrid directives
    UIRouterUpgradeModule,
    // Provides the @uirouter/angular directives
    UIRouterModule,
  ],
  entryComponents: [ AngularCmp ],
  declarations: [ AngularCmp ],
})
export class SampleAppModuleAngular {
  ngDoBootstrap() {
    /* no body: this disables normal (non-hybrid) Angular bootstrapping */
  }
}
