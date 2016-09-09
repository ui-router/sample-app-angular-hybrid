"use strict";
var ngmodule_1 = require("../bootstrap/ngmodule");
var ui_router_ng2_1 = require("ui-router-ng2");
// Add Future State to lazy load the Contacts ng2 module
ngmodule_1.ngmodule.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'contacts',
        url: '/contacts',
        // loadNgModule lazy loads an Angular 2 NgModule (or UIRouterModule)
        lazyLoad: ui_router_ng2_1.loadNgModule('/transpiled/app/contacts/index')
    });
});
//# sourceMappingURL=contacts.futurestate.js.map