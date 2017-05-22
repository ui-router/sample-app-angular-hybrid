import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';

import { UIRouterModule } from '@uirouter/angular';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { PrefsModule } from '../prefs';

// Add all Angular Future States to the root Angular NgModule
export const contactsFutureState = {
  name: 'contacts.**',
  url: '/contacts',
  loadChildren: '../contacts/contacts.module#ContactsModule',
};

export function getDialogService($injector) {
  return $injector.get('DialogService');
}

export function getContactsService($injector) {
  return $injector.get('Contacts');
}

// Create an NgModule for the Angular portion of the hybrid app
@NgModule({
  imports: [
    BrowserModule,
    // Provide angular upgrade capabilities
    UpgradeModule,
    // Provides the @uirouter/angular-hybrid directives
    UIRouterUpgradeModule,
    // Provides the @uirouter/angular directives
    UIRouterModule,
    // The preferences feature module
    PrefsModule,
    // This forChild module registers the contacts future state and enables the lazy loaded contacts module
    UIRouterModule.forChild({ states: [contactsFutureState] }),
  ],
  providers: [
    // Provide SystemJsNgModuleLoader to use Angular lazy loading
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },

    // Register some AngularJS services as Angular providers
    { provide: 'DialogService', deps: ['$injector'], useFactory: getDialogService },
    { provide: 'Contacts', deps: ['$injector'], useFactory: getContactsService },
  ]
})
export class SampleAppModule {
  ngDoBootstrap() {
    /* no body: this disables normal (non-hybrid) Angular bootstrapping */
  }
}