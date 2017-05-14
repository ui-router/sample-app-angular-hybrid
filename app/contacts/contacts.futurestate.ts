declare var System;
import {ngmodule} from "../bootstrap/ngmodule"
import {loadNgModule} from "@uirouter/angular";

// Add Future State to lazy load the Contacts ng2 module
ngmodule.config($stateProvider => {
  $stateProvider.state({
    name: 'contacts.**',
    url: '/contacts',
    // loadNgModule lazy loads an Angular 2 NgModule (or UIRouterModule)
    lazyLoad: loadNgModule(() => System.import('./index').then(result => result.ContactsModule))
  });
});