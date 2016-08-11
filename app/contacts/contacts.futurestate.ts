import {ngmodule} from "../bootstrap/ngmodule"
import {loadNgModule} from "ui-router-ng2";

// Add Future State to lazy load the Contacts ng2 module
ngmodule.config($stateProvider => {
  $stateProvider.state({
    name: 'contacts',
    url: '/contacts',
    // loadNgModule lazy loads an Angular 2 NgModule (or UIRouterModule)
    lazyLoad: loadNgModule('/transpiled/app/contacts/index')
  });
});