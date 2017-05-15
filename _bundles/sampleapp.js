webpackJsonp([1],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var PrefsComponent = (function () {
    function PrefsComponent(AppConfig) {
        this.AppConfig = AppConfig;
    }
    PrefsComponent.prototype.ngOnInit = function () {
        this.prefs = {
            restDelay: this.AppConfig.restDelay
        };
    };
    /** Clear out the session storage */
    PrefsComponent.prototype.reset = function () {
        sessionStorage.clear();
        document.location.reload(true);
    };
    /** After saving preferences to session storage, reload the entire application */
    PrefsComponent.prototype.savePrefs = function () {
        Object.assign(this.AppConfig, { restDelay: this.prefs.restDelay }).save();
        document.location.reload(true);
    };
    return PrefsComponent;
}());
PrefsComponent = __decorate([
    core_1.Component({
        selector: 'prefs-component',
        template: "\n      <div>\n          <button class=\"btn btn-primary\" (click)=\"reset()\"><i class=\"fa fa-recycle\"></i> <span>Reset All Data</span></button>\n      </div>\n\n      <div>\n          <label for=\"restDelay\">Simulated REST API delay (ms)</label>\n          <input type=\"text\" name=\"restDelay\" [(ngModel)]=\"prefs.restDelay\">\n          <button class=\"btn btn-primary\" (click)=\"savePrefs()\">Save</button>\n      </div>\n  ",
    }),
    __param(0, core_1.Inject('AppConfig')),
    __metadata("design:paramtypes", [Object])
], PrefsComponent);
exports.PrefsComponent = PrefsComponent;


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** Some utility functions used by the application */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProp = function (obj, key, val) { obj[key] = val; return obj; };
exports.pushToArr = function (array, item) { array.push(item); return array; };
exports.uniqReduce = function (arr, item) { return arr.indexOf(item) !== -1 ? arr : exports.pushToArr(arr, item); };
exports.flattenReduce = function (arr, item) { return arr.concat(item); };
var guidChar = function (c) { return c !== 'x' && c !== 'y' ? '-' : Math.floor(Math.random() * 16).toString(16).toUpperCase(); };
exports.guid = function () { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("").map(guidChar).join(""); };


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ngmodule_1 = __webpack_require__(27);
var angular_1 = __webpack_require__(33);
// Add Future State to lazy load the Contacts ng2 module
ngmodule_1.ngmodule.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'contacts.**',
        url: '/contacts',
        // loadNgModule lazy loads an Angular 2 NgModule (or UIRouterModule)
        lazyLoad: angular_1.loadNgModule(function () { return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 503)).then(function (result) { return result.ContactsModule; }); })
    });
});


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ngmodule_1 = __webpack_require__(27);
var appConfig_service_1 = __webpack_require__(216);
var auth_service_1 = __webpack_require__(217);
var dataSources_service_1 = __webpack_require__(218);
var dialog_directive_1 = __webpack_require__(219);
var dialog_service_1 = __webpack_require__(220);
var requiresAuth_hook_1 = __webpack_require__(221);
var globalAppModule = {
    directives: { dialog: dialog_directive_1.dialog },
    services: { AppConfig: appConfig_service_1.AppConfig, AuthService: auth_service_1.AuthService, Contacts: dataSources_service_1.Contacts, Folders: dataSources_service_1.Folders, Messages: dataSources_service_1.Messages, DialogService: dialog_service_1.DialogService },
    runBlocks: [requiresAuth_hook_1.authHookRunBlock]
};
ngmodule_1.loadNg1AppModule(ngmodule_1.ngmodule, globalAppModule);


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ngmodule_1 = __webpack_require__(27);
var app_component_1 = __webpack_require__(222);
var welcome_component_1 = __webpack_require__(227);
var login_component_1 = __webpack_require__(226);
var home_component_1 = __webpack_require__(225);
var app_states_1 = __webpack_require__(224);
var app_config_1 = __webpack_require__(223);
var mainAppModule = {
    components: { app: app_component_1.app, welcome: welcome_component_1.welcome, login: login_component_1.login, home: home_component_1.home },
    states: [app_states_1.appState, app_states_1.homeState, app_states_1.loginState, app_states_1.welcomeState],
    configBlocks: [app_config_1.otherwiseConfigBlock],
    runBlocks: [app_config_1.traceRunBlock]
};
ngmodule_1.loadNg1AppModule(ngmodule_1.ngmodule, mainAppModule);


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ngmodule_1 = __webpack_require__(27);
var compose_component_1 = __webpack_require__(228);
var folderList_component_1 = __webpack_require__(229);
var message_component_1 = __webpack_require__(233);
var messageList_component_1 = __webpack_require__(234);
var mymessages_component_1 = __webpack_require__(235);
var messageTable_component_1 = __webpack_require__(230);
var sortMessages_directive_1 = __webpack_require__(231);
var messageBody_filter_1 = __webpack_require__(232);
var messagesListUI_service_1 = __webpack_require__(237);
var mymessages_states_1 = __webpack_require__(236);
var mymessagesAppModule = {
    directives: { sortMessages: sortMessages_directive_1.sortMessages },
    components: { compose: compose_component_1.compose, folderList: folderList_component_1.folderList, message: message_component_1.message, messageList: messageList_component_1.messageList, mymessages: mymessages_component_1.mymessages, messageTable: messageTable_component_1.messageTable },
    states: [mymessages_states_1.composeState, mymessages_states_1.messageState, mymessages_states_1.messageListState, mymessages_states_1.mymessagesState],
    filters: { messageBody: messageBody_filter_1.messageBody },
    services: { MessageListUI: messagesListUI_service_1.MessageListUI }
};
ngmodule_1.loadNg1AppModule(ngmodule_1.ngmodule, mymessagesAppModule);


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ngmodule_1 = __webpack_require__(27);
/** Google analytics */
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
var ga = window['ga'];
ga('create', 'UA-73329341-1', 'auto');
ga('send', 'pageview');
ngmodule_1.ngmodule.config(function ($transitionsProvider) {
    $transitionsProvider.onBefore({}, function ($transition$) {
        var path = $transition$.treeChanges().to
            .map(function (node) { return node.state.self.url; })
            .filter(function (x) { return x != null && x !== '^'; })
            .join('');
        var vpv = function (path) { return ga('send', 'pageview', path); };
        var success = function () { vpv(path); };
        var error = function (err) {
            var errType = err && err.hasOwnProperty("type") ? err.type : '_';
            path = path.replace(/^\//, "");
            vpv("/errors/" + errType + "/" + path);
        };
        $transition$.promise.then(success, error);
    });
});


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//////////////////// APP MODULES ///////////////
// Create the angular 1 module for the application
__webpack_require__(27);
// import all the sub module definitions
// This registers each app module's states, directives, components, filters,
// services, and config/run blocks with the ngmodule
__webpack_require__(175);
__webpack_require__(176);
__webpack_require__(177);
__webpack_require__(70);
__webpack_require__(174);
// Google analytics
__webpack_require__(178);
////////////// HYBRID BOOTSTRAP ///////////////
var angular = __webpack_require__(16);
var core_1 = __webpack_require__(8);
var upgrade_1 = __webpack_require__(68);
var platform_browser_1 = __webpack_require__(24);
var angular_hybrid_1 = __webpack_require__(69);
var index_1 = __webpack_require__(70);
// Create an NgModule for the ng2 portion of the hybrid app
//
// Use @UIRouterModule instead of @NgModule to allow use of the UIRouter directives
// and add the UIRouter providers to the root ng2 injector
//
// import the Ng1ToNg2Module to supply the ng1-to-ng2 directives
var SampleAppModule = (function () {
    function SampleAppModule() {
    }
    return SampleAppModule;
}());
SampleAppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, angular_hybrid_1.Ng1ToNg2Module, index_1.PrefsModule],
        providers: [
            { provide: core_1.NgModuleFactoryLoader, useClass: core_1.SystemJsNgModuleLoader }
        ]
    })
], SampleAppModule);
// Create ngUpgrade adapter
exports.upgradeAdapter = new upgrade_1.UpgradeAdapter(SampleAppModule);
// Supply ui-router-ng1-to-ng1 with the upgrade adapter.
// This adds glue to the ui-router instance for angular 1 (ng1 hosts the app)
// which allows it to route to ng2 components
angular_hybrid_1.uiRouterNgUpgrade.setUpgradeAdapter(exports.upgradeAdapter);
// Register some ng1 services as ng2 providers
exports.upgradeAdapter.upgradeNg1Provider('DialogService');
exports.upgradeAdapter.upgradeNg1Provider('Contacts');
angular.element(document).ready(function () {
    // Manually bootstrap the app with the Upgrade Adapter (instead of ng-app)
    exports.upgradeAdapter.bootstrap(document.body, ['demo']);
});


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(16);
/**
 * This service stores and retrieves user preferences in session storage
 */
var AppConfig = (function () {
    function AppConfig() {
        this.sort = '+date';
        this.emailAddress = undefined;
        this.restDelay = 100;
        this.load();
    }
    AppConfig.prototype.load = function () {
        try {
            return angular.extend(this, angular.fromJson(sessionStorage.getItem("appConfig")));
        }
        catch (Error) { }
        return this;
    };
    AppConfig.prototype.save = function () {
        sessionStorage.setItem("appConfig", angular.toJson(angular.extend({}, this)));
    };
    return AppConfig;
}());
exports.AppConfig = AppConfig;


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This service emulates an Authentication Service.
 */
var AuthService = (function () {
    function AuthService(AppConfig, $q, $timeout) {
        this.AppConfig = AppConfig;
        this.$q = $q;
        this.$timeout = $timeout;
        // data
        this.usernames = ['myself@angular.dev', 'devgal@angular.dev', 'devguy@angular.dev'];
    }
    /**
     * Returns true if the user is currently authenticated, else false
     */
    AuthService.prototype.isAuthenticated = function () {
        return !!this.AppConfig.emailAddress;
    };
    /**
     * Fake authentication function that returns a promise that is either resolved or rejected.
     *
     * Given a username and password, checks that the username matches one of the known
     * usernames (this.usernames), and that the password matches 'password'.
     *
     * Delays 800ms to simulate an async REST API delay.
     */
    AuthService.prototype.authenticate = function (username, password) {
        var _this = this;
        var _a = this, $timeout = _a.$timeout, $q = _a.$q, AppConfig = _a.AppConfig;
        // checks if the username is one of the known usernames, and the password is 'password'
        var checkCredentials = function () { return $q(function (resolve, reject) {
            var validUsername = _this.usernames.indexOf(username) !== -1;
            var validPassword = password === 'password';
            return (validUsername && validPassword) ? resolve(username) : reject("Invalid username or password");
        }); };
        return $timeout(checkCredentials, 800)
            .then(function (authenticatedUser) {
            AppConfig.emailAddress = authenticatedUser;
            AppConfig.save();
        });
    };
    /** Logs the current user out */
    AuthService.prototype.logout = function () {
        this.AppConfig.emailAddress = undefined;
        this.AppConfig.save();
    };
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sessionStorage_1 = __webpack_require__(239);
/**
 * Fake REST Services (Contacts, Folders, Messages) used in the mymessages submodule.
 *
 * Each of these APIs have:
 *
 * .all()
 * .search(exampleItem)
 * .get(id)
 * .save(item)
 * .post(item)
 * .put(item)
 * .remove(item)
 *
 * See ../util/sessionStorage.js for more details, if curious
 */
/** A fake Contacts REST client API */
var Contacts = (function (_super) {
    __extends(Contacts, _super);
    function Contacts($http, $timeout, $q, AppConfig) {
        // http://beta.json-generator.com/api/json/get/V1g6UwwGx
        return _super.call(this, $http, $timeout, $q, "contacts", "data/contacts.json", AppConfig) || this;
    }
    return Contacts;
}(sessionStorage_1.SessionStorage));
exports.Contacts = Contacts;
/** A fake Folders REST client API */
var Folders = (function (_super) {
    __extends(Folders, _super);
    function Folders($http, $timeout, $q, AppConfig) {
        return _super.call(this, $http, $timeout, $q, 'folders', 'data/folders.json', AppConfig) || this;
    }
    return Folders;
}(sessionStorage_1.SessionStorage));
exports.Folders = Folders;
var Messages = (function (_super) {
    __extends(Messages, _super);
    function Messages($http, $timeout, $q, AppConfig) {
        var _this = 
        // http://beta.json-generator.com/api/json/get/VJl5GbIze
        _super.call(this, $http, $timeout, $q, 'messages', 'data/messages.json', AppConfig) || this;
        _this.AppConfig = AppConfig;
        return _this;
    }
    Messages.prototype.byFolder = function (folder) {
        var searchObject = { folder: folder._id };
        var toFromAttr = ["drafts", "sent"].indexOf(folder._id) !== -1 ? "from" : "to";
        searchObject[toFromAttr] = this.AppConfig.emailAddress;
        return this.search(searchObject);
    };
    return Messages;
}(sessionStorage_1.SessionStorage));
exports.Messages = Messages;


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dialog = function ($timeout, $q) {
    return {
        link: function (scope, elem) {
            $timeout(function () { return elem.addClass('active'); });
            elem.data('promise', $q(function (resolve, reject) {
                scope.yes = function () { return resolve(true); };
                scope.no = function () { return reject(false); };
            }));
        },
        template: "\n      <div class=\"backdrop\"></div>\n      <div class='wrapper'>\n        <div class=\"content\">\n          <h4 ng-show=\"message\">{{message}}</h4>\n          <div ng-show=\"details\">{{details}}</div>\n    \n          <div style=\"padding-top: 1em;\">\n            <button class=\"btn btn-primary\" ng-click=\"yes()\">{{yesMsg}}</button>\n            <button class=\"btn btn-primary\" ng-click=\"no()\">{{noMsg}}</button>\n          </div>\n        </div>\n      </div>\n"
    };
};


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(16);
var DialogService = (function () {
    function DialogService($document, $compile, $rootScope) {
        var body = $document.find("body");
        var elem = angular.element("<div class='dialog' dialog='opts'></div>");
        this.confirm = function (message, details, yesMsg, noMsg) {
            if (details === void 0) { details = "Are you sure?"; }
            if (yesMsg === void 0) { yesMsg = "Yes"; }
            if (noMsg === void 0) { noMsg = "No"; }
            $compile(elem)(angular.extend($rootScope.$new(), { message: message, details: details, yesMsg: yesMsg, noMsg: noMsg }));
            body.append(elem);
            return elem.data("promise").finally(function () { return elem.removeClass('active').remove(); });
        };
    }
    return DialogService;
}());
exports.DialogService = DialogService;


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This file contains a Transition Hook which protects a
 * route that requires authentication.
 *
 * This hook redirects to /login when both:
 * - The user is not authenticated
 * - The user is navigating to a state that requires authentication
 */
function authHookRunBlock($transitions, AuthService) {
    // Matches if the destination state's data property has a truthy 'requiresAuth' property
    var requiresAuthCriteria = {
        to: function (state) { return state.data && state.data.requiresAuth; }
    };
    // Function that returns a redirect for the current transition to the login state
    // if the user is not currently authenticated (according to the AuthService)
    var redirectToLogin = function (transition) {
        var AuthService = transition.injector().get('AuthService');
        var $state = transition.router.stateService;
        if (!AuthService.isAuthenticated()) {
            return $state.target('login', undefined, { location: false });
        }
    };
    // Register the "requires auth" hook with the TransitionsService
    $transitions.onBefore(requiresAuthCriteria, redirectToLogin, { priority: 10 });
}
exports.authHookRunBlock = authHookRunBlock;


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The controller for the `app` component.
 */
var AuthedController = (function () {
    function AuthedController(AppConfig, AuthService, $state) {
        this.AuthService = AuthService;
        this.$state = $state;
        this.emailAddress = AppConfig.emailAddress;
        this.isAuthenticated = AuthService.isAuthenticated();
    }
    AuthedController.prototype.logout = function () {
        var _a = this, AuthService = _a.AuthService, $state = _a.$state;
        AuthService.logout();
        // Reload states after authentication change
        return $state.go('welcome', {}, { reload: true });
    };
    return AuthedController;
}());
/**
 * This is the main app component for an authenticated user.
 *
 * This component renders the outermost chrome (application header and tabs, the compose  and logout button)
 * It has a `ui-view` viewport for nested states to fill in.
 */
exports.app = {
    controller: AuthedController,
    template: "\n    <div class=\"navheader\">\n      <ul ng-if=\"::$ctrl.isAuthenticated\" class=\"nav nav-tabs\">\n    \n        <li ui-sref-active=\"active\"> <a ui-sref=\"mymessages\" role=\"button\"> Messages </a> </li>\n        <li ui-sref-active=\"active\"> <a ui-sref=\"contacts\" role=\"button\"> Contacts </a> </li>\n        <li ui-sref-active=\"active\"> <a ui-sref=\"prefs\" role=\"button\"> Preferences </a> </li>\n    \n        <li class=\"navbar-right\">\n          <button class=\"btn btn-primary fa fa-home\" ui-sref=\"home\"></button>\n          <button style=\"margin-right: 15px;\" class=\"btn btn-primary\" ui-sref=\"mymessages.compose\"><i class=\"fa fa-envelope\"></i> New Message</button>\n        </li>\n    \n        <li class=\"navbar-text navbar-right logged-in-user\" style=\"margin: 0.5em 1.5em;\">\n          <div>\n            {{::$ctrl.emailAddress}} <i class=\"fa fa-chevron-down\"></i>\n            <div class=\"hoverdrop\">\n              <button class=\"btn btn-primary\" ng-click=\"$ctrl.logout()\">Log Out</button>\n            </div>\n          </div>\n        </li>\n    \n      </ul>\n    </div>\n    \n    <div ui-view/>\n"
};


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Apply some global configuration...
Object.defineProperty(exports, "__esModule", { value: true });
// If the user enters a URL that doesn't match any known URL (state), send them to `/welcome`
exports.otherwiseConfigBlock = ['$urlRouterProvider', function ($urlRouterProvider) { $urlRouterProvider.otherwise("/welcome"); }];
// Enable tracing of each TRANSITION... (check the javascript console)
// This syntax `$trace.enable(1)` is an alternative to `$trace.enable("TRANSITION")`.
// Besides "TRANSITION", you can also enable tracing for : "RESOLVE", "HOOK", "INVOKE", "UIVIEW", "VIEWCONFIG"
exports.traceRunBlock = ['$trace', function ($trace) { $trace.enable(1); }];


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
exports.appState = {
    name: 'app',
    redirectTo: 'welcome',
    component: 'app'
};
/**
 * This is the 'welcome' state.  It is the default state (as defined by app.js) if no other state
 * can be matched to the URL.
 */
exports.welcomeState = {
    parent: 'app',
    name: 'welcome',
    url: '/welcome',
    component: 'welcome'
};
/**
 * This is a home screen for authenticated users.
 *
 * It shows giant buttons which activate their respective submodules: Messages, Contacts, Preferences
 */
exports.homeState = {
    parent: 'app',
    name: 'home',
    url: '/home',
    component: 'home'
};
/**
 * This is the login state.  It is activated when the user navigates to /login, or if a unauthenticated
 * user attempts to access a protected state (or substate) which requires authentication. (see routerhooks/requiresAuth.js)
 *
 * It shows a fake login dialog and prompts the user to authenticate.  Once the user authenticates, it then
 * reactivates the state that the user originally came from.
 */
exports.loginState = {
    parent: 'app',
    name: 'login',
    url: '/login',
    component: 'login',
    resolve: { returnTo: returnTo }
};
/**
 * A resolve function for 'login' state which figures out what state to return to, after a successful login.
 *
 * If the user was initially redirected to login state (due to the requiresAuth redirect), then return the toState/params
 * they were redirected from.  Otherwise, if they transitioned directly, return the fromState/params.  Otherwise
 * return the main "home" state.
 */
function returnTo($transition$) {
    if ($transition$.redirectedFrom() != null) {
        // The user was redirected to the login state (e.g., via the requiresAuth hook when trying to activate contacts)
        // Return to the original attempted target state (e.g., contacts)
        return $transition$.redirectedFrom().targetState();
    }
    var $state = $transition$.router.stateService;
    // The user was not redirected to the login state; they directly activated the login state somehow.
    // Return them to the state they came from.
    if ($transition$.from().name !== '') {
        return $state.target($transition$.from(), $transition$.params("from"));
    }
    // If the fromState's name is empty, then this was the initial transition. Just return them to the home state
    return $state.target('home');
}


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This is a home component for authenticated users.
// It shows giant buttons which activate their respective submodules: Messages, Contacts, Preferences
exports.home = {
    template: "\n    <div class=\"home buttons\">\n      <button ui-sref=\"mymessages\" class=\"btn btn-primary\">\n        <h1><i class=\"fa fa-envelope\"></i></h1>\n        <h1>Messages</h1>\n      </button>\n\n      <button ui-sref=\"contacts\" class=\"btn btn-primary\">\n      <h1><i class=\"fa fa-users\"></i></h1>\n      <h1>Contacts</h1>\n      </button>\n\n      <button ui-sref=\"prefs\" class=\"btn btn-primary\">\n        <h1><i class=\"fa fa-cogs\"></i></h1>\n        <h1>Preferences</h1>\n      </button>\n    </div>\n"
};


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The controller for the `login` component
 *
 * The `login` method validates the credentials.
 * Then it sends the user back to the `returnTo` state, which is provided as a resolve data.
 */
var LoginController = (function () {
    function LoginController(AppConfig, AuthService, $state) {
        var _this = this;
        this.usernames = AuthService.usernames;
        this.credentials = {
            username: AppConfig.emailAddress,
            password: 'password'
        };
        this.login = function (credentials) {
            _this.authenticating = true;
            var returnToOriginalState = function () {
                var state = _this.returnTo.state();
                var params = _this.returnTo.params();
                var options = Object.assign({}, _this.returnTo.options(), { reload: true });
                $state.go(state, params, options);
            };
            var showError = function (errorMessage) {
                return _this.errorMessage = errorMessage;
            };
            AuthService.authenticate(credentials.username, credentials.password)
                .then(returnToOriginalState)
                .catch(showError)
                .finally(function () { return _this.authenticating = false; });
        };
    }
    return LoginController;
}());
/**
 * This component renders a faux authentication UI
 *
 * It prompts for the username/password (and gives hints with bouncy arrows)
 * It shows errors if the authentication failed for any reason.
 */
exports.login = {
    bindings: { returnTo: '<' },
    controller: LoginController,
    template: "\n    <div class=\"container\">\n      <div class=\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n        <h3>Log In</h3>\n        <p>(This login screen is for demonstration only... just pick a username, enter 'password' and click <b>\"Log in\"</b>)</p>\n        <hr>\n    \n        <div>\n          <label for=\"username\">Username:</label>\n          <select class=\"form-control\" name=\"username\" id=\"username\"\n            ng-model=\"$ctrl.credentials.username\" ng-options=\"username for username in $ctrl.usernames\"></select>\n          <i style=\"position: relative; bottom: 1.8em; margin-left: 10em; height: 0\"\n              ng-hide=\"$ctrl.credentials.username\" class=\"fa fa-arrow-left bounce-horizontal\"> Choose </i>\n        </div>\n        <br>\n    \n        <div>\n          <label for=\"password\">Password:</label>\n          <input class=\"form-control\" type=\"password\" name=\"password\" ng-model=\"$ctrl.credentials.password\">\n          <i style=\"position: relative; bottom: 1.8em; margin-left: 5em; height: 0\"\n              ng-hide=\"!$ctrl.credentials.username || $ctrl.credentials.password == 'password'\" class=\"fa fa-arrow-left bounce-horizontal\">\n            Enter '<b>password</b>' here\n          </i>\n        </div>\n    \n        <div ng-show=\"$ctrl.errorMessage\" class=\"well error\">{{ $ctrl.errorMessage }}</div>\n    \n        <hr>\n        <div>\n          <button class=\"btn btn-primary\" type=\"button\"\n              ng-disabled=\"$ctrl.authenticating\" ng-click=\"$ctrl.login($ctrl.credentials)\">\n            <i class=\"fa fa-spin fa-spinner\" ng-show=\"$ctrl.authenticating\"></i> <span>Log in</span>\n          </button>\n          <i ng-show=\"$ctrl.credentials.username && $ctrl.credentials.password == 'password'\" style=\"position: relative;\" class=\"fa fa-arrow-left bounce-horizontal\"> Click Me!</i>\n      </div>\n    </div>\n    "
};


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = {
    template: "\n    <div class=\"container-fluid\">\n    \n      <h3>UI-Router Sample App</h3>\n    \n      <p>Welcome to the sample app!</p>\n      <p>This is a demonstration app intended to highlight some patterns that can be used within UI-Router.\n        These patterns should help you to to build cohesive, robust apps.  Additionally, this app uses state-vis\n        to show the tree of states, and a transition log visualizer.</p>\n    \n      <h4>App Overview</h4>\n      <p>\n        First, start exploring the application's functionality at a high level by activating\n        one of the three submodules: Messages, Contacts, or Preferences. If you are not already logged in,\n        you will be taken to an authentication screen (the authentication is fake; the password is \"password\")\n        <div>\n          <button class=\"btn btn-primary\" ui-sref=\"mymessages\"><i class=\"fa fa-envelope\"></i><span>Messages</span></button>\n          <button class=\"btn btn-primary\" ui-sref=\"contacts\"><i class=\"fa fa-users\"></i><span>Contacts</span></button>\n          <button class=\"btn btn-primary\" ui-sref=\"prefs\"><i class=\"fa fa-cogs\"></i><span>Preferences</span></button>\n        </div>\n      </p>\n    \n      <h4>Patterns and Recipes</h4>\n      <ul>\n        <li>Require Authentication</li>\n        <li>Previous State</li>\n        <li>Redirect Hook</li>\n        <li>Default Param Values</li>\n      </ul>\n    </div>"
};


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(16);
/**
 * The controller for the Compose component
 */
var ComposeController = (function () {
    function ComposeController($state, DialogService, AppConfig, Messages) {
        this.$state = $state;
        this.DialogService = DialogService;
        this.AppConfig = AppConfig;
        this.Messages = Messages;
    }
    /**
     * Create our message's model using the current user's email address as 'message.from'
     * Then extend it with all the properties from (non-url) state parameter 'message'.
     * Keep two copies: the editable one and the original one.
     * These copies are used to check if the message is dirty.
     */
    ComposeController.prototype.$onInit = function () {
        this.pristineMessage = angular.extend({ from: this.AppConfig.emailAddress }, this.$stateParams.message);
        this.message = angular.copy(this.pristineMessage);
    };
    /**
     * Checks if the edited copy and the pristine copy are identical when the state is changing.
     * If they are not identical, the allows the user to confirm navigating away without saving.
     */
    ComposeController.prototype.uiCanExit = function () {
        if (this.canExit || angular.equals(this.pristineMessage, this.message)) {
            return true;
        }
        var message = 'You have not saved this message.';
        var question = 'Navigate away and lose changes?';
        return this.DialogService.confirm(message, question, "Yes", "No");
    };
    /**
     * Navigates back to the previous state.
     *
     * - Checks the $transition$ which activated this controller for a 'from state' that isn't the implicit root state.
     * - If there is no previous state (because the user deep-linked in, etc), then go to 'mymessages.messagelist'
     */
    ComposeController.prototype.gotoPreviousState = function () {
        var $transition$ = this.$transition$;
        var hasPrevious = !!$transition$.from().name;
        var state = hasPrevious ? $transition$.from() : "mymessages.messagelist";
        var params = hasPrevious ? $transition$.params("from") : {};
        this.$state.go(state, params);
    };
    ;
    /** "Send" the message (save to the 'sent' folder), and then go to the previous state */
    ComposeController.prototype.send = function (message) {
        var _this = this;
        this.Messages.save(angular.extend(message, { date: new Date(), read: true, folder: 'sent' }))
            .then(function () { return _this.canExit = true; })
            .then(function () { return _this.gotoPreviousState(); });
    };
    ;
    /** Save the message to the 'drafts' folder, and then go to the previous state */
    ComposeController.prototype.save = function (message) {
        var _this = this;
        this.Messages.save(angular.extend(message, { date: new Date(), read: true, folder: 'drafts' }))
            .then(function () { return _this.canExit = true; })
            .then(function () { return _this.gotoPreviousState(); });
    };
    return ComposeController;
}());
/**
 * This component composes a message
 *
 * The message might be new, a saved draft, or a reply/forward.
 * A Cancel button discards the new message and returns to the previous state.
 * A Save As Draft button saves the message to the "drafts" folder.
 * A Send button sends the message
 */
exports.compose = {
    bindings: { $stateParams: '<', $transition$: '<' },
    controller: ComposeController,
    template: "\n    <div class=\"compose\">\n      <div class=\"header\">\n        <div class=\"flex-h\"> <label>Recipient</label> <input type=\"text\" id=\"to\" name=\"to\" ng-model=\"$ctrl.message.to\"> </div>\n        <div class=\"flex-h\"> <label>Subject</label> <input type=\"text\" id=\"subject\" name=\"subject\" ng-model=\"$ctrl.message.subject\"> </div>\n      </div>\n    \n      <div class=\"body\">\n        <textarea name=\"body\" id=\"body\" ng-model=\"$ctrl.message.body\" cols=\"30\" rows=\"20\"></textarea>\n        \n        <div class=\"buttons\">\n          <!-- Clicking this button brings the user back to the state they came from (previous state) -->\n          <button class=\"btn btn-primary\" ng-click=\"$ctrl.gotoPreviousState()\"><i class=\"fa fa-times-circle-o\"></i><span>Cancel</span></button>\n          <button class=\"btn btn-primary\" ng-click=\"$ctrl.save($ctrl.message)\"><i class=\"fa fa-save\"></i><span>Save as Draft</span></button>\n          <button class=\"btn btn-primary\" ng-click=\"$ctrl.send($ctrl.message)\"><i class=\"fa fa-paper-plane-o\"></i><span>Send</span></button>\n        </div>\n      </div>\n    </div>\n"
};


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Renders a list of folders
 */
exports.folderList = {
    bindings: { folders: '<' },
    template: "\n    <!-- Renders a list of folders -->\n    <div class=\"folderlist\">\n      <ul class=\"selectlist list-unstyled\">\n  \n        <!-- Highlight the selected folder:\n            When the current state matches the ui-sref's state (and its parameters)\n            ui-sref-active applies the 'selected' class to the li element -->\n        <li class=\"folder\" ui-sref-active=\"selected\" ng-repeat=\"folder in $ctrl.folders\" >\n          <!-- This ui-sref is a relative link to the 'mymessages.messagelist' substate. It provides the\n              'folderId' parameter value from the current folder's .id property -->\n          <a ui-sref=\".messagelist({folderId: folder._id})\"><i class=\"fa\"></i>{{folder._id}}</a>\n        </li>\n      </ul>\n    </div>\n"
};


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A component that displays a folder of messages as a table
 *
 * If a row is clicked, the details of the message is shown using a relative ui-sref to `.message`.
 *
 * ui-sref-active is used to highlight the selected row.
 *
 * Shows/hides specific columns based on the `columns` input binding.
 */
exports.messageTable = {
    bindings: { columns: '<', messages: '<' },
    controller: function (AppConfig) {
        var _this = this;
        this.AppConfig = AppConfig;
        this.colVisible = function (name) { return _this.columns.indexOf(name) !== -1; };
    },
    template: "\n    <table>\n      <thead>\n        <tr>\n          <td ng-if=\"::$ctrl.colVisible('read')\"></td>\n          <td ng-if=\"::$ctrl.colVisible('from')\"     sort-messages=\"from\">Sender</td>\n          <td ng-if=\"::$ctrl.colVisible('to')\"       sort-messages=\"to\">Recipient</td>\n          <td ng-if=\"::$ctrl.colVisible('subject')\"  sort-messages=\"subject\">Subject</td>\n          <td ng-if=\"::$ctrl.colVisible('date')\"     sort-messages=\"date\">Date</td>\n        </tr>\n      </thead>\n  \n      <tbody>\n        <tr ng-repeat=\"message in $ctrl.messages | orderBy: $ctrl.AppConfig.sort track by message._id\"\n            ui-sref=\".message({messageId: message._id})\" ui-sref-active=\"active\">\n          <td ng-if=\"::$ctrl.colVisible('read')\"><i class=\"fa fa-circle\" style=\"font-size: 50%\" ng-show=\"!message.read\"></td>\n          <td ng-if=\"::$ctrl.colVisible('from')\">{{ message.from }}</td>\n          <td ng-if=\"::$ctrl.colVisible('to')\">{{ message.to }}</td>\n          <td ng-if=\"::$ctrl.colVisible('subject')\">{{ message.subject }}</td>\n          <td ng-if=\"::$ctrl.colVisible('date')\">{{ message.date | date: \"yyyy-MM-dd\" }}</td>\n        </tr>\n      </tbody>\n  \n    </table>\n"
};


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(16);
/**
 * A directive (for a table header) which changes the app's sort order
 */
exports.sortMessages = function (AppConfig) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            var col = attrs['sortMessages'];
            if (!col)
                return;
            var chevron = angular.element("<i style='padding-left: 0.25em' class='fa'></i>");
            elem.append(chevron);
            elem.on("click", function (evt) { return AppConfig.sort = (AppConfig.sort === "+" + col) ? "-" + col : "+" + col; });
            scope.$watch(function () { return AppConfig.sort; }, function (newVal) {
                chevron.toggleClass("fa-sort-asc", newVal == "+" + col);
                chevron.toggleClass("fa-sort-desc", newVal == "-" + col);
            });
        }
    };
};


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** Angular filter to format fake emails as HTML*/
exports.messageBody = function ($sce) {
    return function (msgText) {
        if (msgText === void 0) { msgText = ''; }
        return $sce.trustAsHtml(msgText.split(/\n/).map(function (p) { return "<p>" + p + "</p>"; }).join('\n'));
    };
};


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(129);
/** Helper function to prefix a message with "fwd: " or "re: " */
var prefixSubject = function (prefix, message) { return prefix + message.subject; };
/** Helper function which quotes an email message */
var quoteMessage = function (message) { return "\n\n\n\n---------------------------------------\nOriginal message:\nFrom: " + message.from + "\nDate: " + message.date + "\nSubject: " + message.subject + "\n\n" + message.body; };
/** Helper function to make a response message object */
var makeResponseMsg = function (subjectPrefix, origMsg) { return ({
    from: origMsg.to,
    to: origMsg.from,
    subject: prefixSubject(subjectPrefix, origMsg),
    body: quoteMessage(origMsg)
}); };
/**
 * The controller for the Message component
 */
var MessageController = (function () {
    function MessageController($state, DialogService, Messages) {
        this.$state = $state;
        this.DialogService = DialogService;
        this.Messages = Messages;
    }
    /**
     * When the user views a message, mark it as read and save (PUT) the resource.
     *
     * Apply the available actions for the message, depending on the folder the message belongs to.
     */
    MessageController.prototype.$onInit = function () {
        this.message.read = true;
        this.Messages.put(this.message);
        this.actions = this.folder.actions.reduce(function (obj, action) { return util_1.setProp(obj, action, true); }, {});
    };
    /**
     * Compose a new message as a reply to this one
     */
    MessageController.prototype.reply = function (message) {
        var replyMsg = makeResponseMsg("Re: ", message);
        this.$state.go('mymessages.compose', { message: replyMsg });
    };
    ;
    /**
     * Compose a new message as a forward of this one.
     */
    MessageController.prototype.forward = function (message) {
        var fwdMsg = makeResponseMsg("Fwd: ", message);
        delete fwdMsg.to;
        this.$state.go('mymessages.compose', { message: fwdMsg });
    };
    ;
    /**
     * Continue composing this (draft) message
     */
    MessageController.prototype.editDraft = function (message) {
        this.$state.go('mymessages.compose', { message: message });
    };
    ;
    /**
     * Delete this message.
     *
     * - confirm deletion
     * - delete the message
     * - determine which message should be active
     * - show that message
     */
    MessageController.prototype.remove = function (message) {
        var _this = this;
        var nextMessageId = this.nextMessageGetter(message._id);
        var nextState = nextMessageId ? 'mymessages.messagelist.message' : 'mymessages.messagelist';
        var params = { messageId: nextMessageId };
        this.DialogService.confirm("Delete?", undefined)
            .then(function () { return _this.Messages.remove(message); })
            .then(function () { return _this.$state.go(nextState, params, { reload: 'mymessages.messagelist' }); });
    };
    ;
    return MessageController;
}());
/**
 * This component renders a single message
 *
 * Buttons perform actions related to the message.
 * Buttons are shown/hidden based on the folder's context.
 * For instance, a "draft" message can be edited, but can't be replied to.
 */
exports.message = {
    bindings: { folder: '<', message: '<', nextMessageGetter: '<' },
    controller: MessageController,
    template: "\n    <div class=\"message\">\n    \n      <div class=\"header\">\n        <div>\n          <h4>{{$ctrl.message.subject}}</h4>\n          <h5>{{$ctrl.message.from}} <i class=\"fa fa-long-arrow-right\"></i> {{$ctrl.message.to}}</h5>\n        </div>\n    \n        <div class=\"line2\">\n          <div>{{$ctrl.message.date | date: 'longDate'}} {{$ctrl.message.date | date: 'mediumTime'}}</div>\n          <div>\n            <button class=\"btn btn-primary\" ng-show=\"$ctrl.actions.edit\" ng-click=\"$ctrl.editDraft($ctrl.message)\"><i class=\"fa fa-pencil\"></i> <span>Edit Draft</span></button>\n            <button class=\"btn btn-primary\" ng-show=\"$ctrl.actions.reply\" ng-click=\"$ctrl.reply($ctrl.message)\"><i class=\"fa fa-reply\"></i> <span>Reply</span></button>\n            <button class=\"btn btn-primary\" ng-show=\"$ctrl.actions.forward\" ng-click=\"$ctrl.forward($ctrl.message)\"><i class=\"fa fa-forward\" ></i> <span>Forward</span></button>\n            <button class=\"btn btn-primary\" ng-show=\"$ctrl.actions.delete\" ng-click=\"$ctrl.remove($ctrl.message)\"><i class=\"fa fa-close\"></i> <span>Delete</span></button>\n          </div>\n        </div>\n      </div>\n    \n      <!-- Pass the raw (plain text) message body through the messageBody filter to format slightly nicer. -->\n      <div class=\"body\" ng-bind-html=\"::$ctrl.message.body | messageBody\"></div>\n    </div>\n"
};


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This component renders a list of messages using the `messageTable` component
 */
exports.messageList = {
    bindings: { folder: '<', messages: '<' },
    template: "\n    <div class=\"messages\">\n      <message-table columns=\"$ctrl.folder.columns\" messages=\"$ctrl.messages\"></message-table>\n    </div>\n"
};


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The main mymessages component.
 *
 * Renders a list of folders, and has two viewports:
 * - messageList: filled with the list of messages for a folder
 * - messagecontent: filled with the contents of a single message.
 */
exports.mymessages = {
    bindings: { folders: '<' },
    template: "\n    <div class=\"my-messages\">\n    \n      <!-- Show message folders -->\n      <folder-list folders=\"$ctrl.folders\"></folder-list>\n    \n      <!-- A named view for the list of messages in this folder.  This will be  filled in by the 'mymessages.messagelist' child state -->\n      <div ui-view=\"messagelist\" class=\"messagelist\"> </div>\n    \n    </div>\n    \n    <!-- A named ui-view for a message's contents.  The 'mymessages.messagelist.message' grandchild state plugs into this ui-view -->\n    <div ui-view=\"messagecontent\"></div>\n"
};


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This state allows the user to compose a new message, edit a drafted message, send a message,
 * or save an unsent message as a draft.
 *
 * This state uses view-targeting to take over the ui-view that would normally be filled by the 'mymessages' state.
 */
exports.composeState = {
    name: 'mymessages.compose',
    url: '/compose',
    // Declares that this state has a 'message' parameter, that defaults to an empty object.
    // Note the parameter does not appear in the URL.
    params: {
        message: {}
    },
    views: {
        // Absolutely targets the $default (unnamed) ui-view, two nesting levels down with the composeComponent.
        "!$default.$default": 'compose'
    }
};
/**
 * The mymessages state. This is the main state for the mymessages submodule.
 *
 * This state shows the list of folders for the current user. It retrieves the folders from the
 * Folders service.  If a user navigates directly to this state, the state redirects to the 'mymessages.messagelist'.
 */
exports.mymessagesState = {
    parent: 'app',
    name: "mymessages",
    url: "/mymessages",
    resolve: {
        // All the folders are fetched from the Folders service
        folders: function (Folders) { return Folders.all(); }
    },
    // If mymessages state is directly activated, redirect the transition to the child state 'mymessages.messagelist'
    redirectTo: 'mymessages.messagelist',
    component: 'mymessages',
    // Mark this state as requiring authentication.  See ../routerhooks/requiresAuth.js.
    data: { requiresAuth: true }
};
/**
 * This state shows the contents of a single message.
 * It also has UI to reply, forward, delete, or edit an existing draft.
 */
exports.messageState = {
    name: 'mymessages.messagelist.message',
    url: '/:messageId',
    resolve: {
        // Fetch the message from the Messages service using the messageId parameter
        message: function (Messages, $stateParams) { return Messages.get($stateParams.messageId); },
        // Provide the component with a function it can query that returns the closest message id
        nextMessageGetter: function (MessageListUI, messages) { return MessageListUI.proximalMessageId.bind(MessageListUI, messages); }
    },
    views: {
        // Relatively target the parent-state's parent-state's 'messagecontent' ui-view
        // This could also have been written using ui-view@state addressing: 'messagecontent@mymessages'
        // Or, this could also have been written using absolute ui-view addressing: '!$default.$default.messagecontent'
        "^.^.messagecontent": 'message'
    }
};
/**
 * This state shows the contents (a message list) of a single folder
 */
exports.messageListState = {
    name: 'mymessages.messagelist',
    url: '/:folderId',
    // The folderId parameter is part of the URL.  This params block sets 'inbox' as the default value.
    // If no parameter value for folderId is provided on the transition, then it will be defaulted to 'inbox'
    params: { folderId: "inbox" },
    resolve: {
        // Fetch the current folder from the Folders service, using the folderId parameter
        folder: function (Folders, $stateParams) { return Folders.get($stateParams.folderId); },
        // The resolved folder object (from the resolve above) is injected into this resolve
        // The list of message for the folder are fetched from the Messages service
        messages: function (Messages, folder) { return Messages.byFolder(folder); }
    },
    views: {
        // This targets the "messagelist" named ui-view added to the DOM in the parent state 'mymessages'
        "messagelist": 'messageList'
    }
};


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** Provides services related to a message list */
var MessageListUI = (function () {
    function MessageListUI($filter, AppConfig) {
        this.$filter = $filter;
        this.AppConfig = AppConfig;
    }
    /** This is a UI helper which finds the nearest messageId in the messages list to the messageId parameter */
    MessageListUI.prototype.proximalMessageId = function (messages, messageId) {
        var sorted = this.$filter("orderBy")(messages, this.AppConfig.sort);
        var idx = sorted.findIndex(function (msg) { return msg._id === messageId; });
        var proximalIdx = sorted.length > idx + 1 ? idx + 1 : idx - 1;
        return proximalIdx >= 0 ? sorted[proximalIdx]._id : undefined;
    };
    return MessageListUI;
}());
exports.MessageListUI = MessageListUI;


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var prefs_component_1 = __webpack_require__(128);
/**
 * This state allows the user to set their application preferences
 */
exports.prefsState = {
    parent: 'app',
    name: 'prefs',
    url: '/prefs',
    component: prefs_component_1.PrefsComponent,
    // Mark this state as requiring authentication.  See ../global/requiresAuth.hook.js.
    data: { requiresAuth: true }
};


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(129);
/**
 * This class simulates a RESTful resource, but the API calls fetch data from
 * Session Storage instead of an HTTP call.
 *
 * Once configured, it loads the initial (pristine) data from the URL provided (using HTTP).
 * It exposes GET/PUT/POST/DELETE-like API that operates on the data.  All the data is also
 * stored in Session Storage.  If any data is modified in memory, session storage is updated.
 * If the browser is refreshed, the SessionStorage object will try to fetch the existing data from
 * the session, before falling back to re-fetching the initial data using HTTP.
 *
 * For an example, please see dataSources.js
 */
var SessionStorage = (function () {
    /**
     * Creates a new SessionStorage object
     *
     * @param $http Pass in the $http service
     * @param $timeout Pass in the $timeout service
     * @param $q Pass in the $q service
     * @param sessionStorageKey The session storage key. The data will be stored in browser's session storage under this key.
     * @param sourceUrl The url that contains the initial data.
     * @param AppConfig Pass in the AppConfig object
     */
    function SessionStorage($http, $timeout, $q, sessionStorageKey, sourceUrl, AppConfig) {
        var _this = this;
        this.$timeout = $timeout;
        this.$q = $q;
        this.sessionStorageKey = sessionStorageKey;
        this.AppConfig = AppConfig;
        var data, fromSession = sessionStorage.getItem(sessionStorageKey);
        // A promise for *all* of the data.
        this._data = undefined;
        // For each data object, the _idProp defines which property has that object's unique identifier
        this._idProp = "_id";
        // A basic triple-equals equality checker for two values
        this._eqFn = function (l, r) { return l[_this._idProp] === r[_this._idProp]; };
        if (fromSession) {
            try {
                // Try to parse the existing data from the Session Storage API
                data = JSON.parse(fromSession);
            }
            catch (e) {
                console.log("Unable to parse session messages, retrieving intial data.");
            }
        }
        var stripHashKey = function (obj) {
            return util_1.setProp(obj, '$$hashKey', undefined);
        };
        // Create a promise for the data; Either the existing data from session storage, or the initial data via $http request
        this._data = (data ? $q.resolve(data) : $http.get(sourceUrl).then(function (resp) { return resp.data; }))
            .then(this._commit.bind(this))
            .then(function () { return JSON.parse(sessionStorage.getItem(sessionStorageKey)); })
            .then(function (array) { return array.map(stripHashKey); });
    }
    /** Saves all the data back to the session storage */
    SessionStorage.prototype._commit = function (data) {
        sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(data));
        return this.$q.resolve(data);
    };
    /** Helper which simulates a delay, then provides the `thenFn` with the data */
    SessionStorage.prototype.all = function (thenFn) {
        var _this = this;
        return this.$timeout(function () { return _this._data; }, this.AppConfig.restDelay).then(thenFn);
    };
    /** Given a sample item, returns a promise for all the data for items which have the same properties as the sample */
    SessionStorage.prototype.search = function (exampleItem) {
        var contains = function (search, inString) {
            return ("" + inString).indexOf("" + search) !== -1;
        };
        var matchesExample = function (example, item) {
            return Object.keys(example).reduce(function (memo, key) { return memo && contains(example[key], item[key]); }, true);
        };
        return this.all(function (items) {
            return items.filter(matchesExample.bind(null, exampleItem));
        });
    };
    /** Returns a promise for the item with the given identifier */
    SessionStorage.prototype.get = function (id) {
        var _this = this;
        return this.all(function (items) {
            return items.find(function (item) { return item[_this._idProp] === id; });
        });
    };
    /** Returns a promise to save the item.  It delegates to put() or post() if the object has or does not have an identifier set */
    SessionStorage.prototype.save = function (item) {
        return item[this._idProp] ? this.put(item) : this.post(item);
    };
    /** Returns a promise to save (POST) a new item.   The item's identifier is auto-assigned. */
    SessionStorage.prototype.post = function (item) {
        item[this._idProp] = util_1.guid();
        return this.all(function (items) { return util_1.pushToArr(items, item); }).then(this._commit.bind(this));
    };
    /** Returns a promise to save (PUT) an existing item. */
    SessionStorage.prototype.put = function (item, eqFn) {
        var _this = this;
        if (eqFn === void 0) { eqFn = this._eqFn; }
        return this.all(function (items) {
            var idx = items.findIndex(eqFn.bind(null, item));
            if (idx === -1)
                throw Error(item + " not found in " + _this);
            items[idx] = item;
            return _this._commit(items).then(function () { return item; });
        });
    };
    /** Returns a promise to remove (DELETE) an item. */
    SessionStorage.prototype.remove = function (item, eqFn) {
        var _this = this;
        if (eqFn === void 0) { eqFn = this._eqFn; }
        return this.all(function (items) {
            var idx = items.findIndex(eqFn.bind(null, item));
            if (idx === -1)
                throw Error(item + " not found in " + _this);
            items.splice(idx, 1);
            return _this._commit(items).then(function () { return item; });
        });
    };
    return SessionStorage;
}());
exports.SessionStorage = SessionStorage;


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file imports the third party library dependencies, then creates the angular module "demo"
 * and exports it.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// External dependencies
var angular = __webpack_require__(16);
var angularjs_1 = __webpack_require__(66);
var visualizer_1 = __webpack_require__(94);
// Create the angular 1 module "demo".
//
// Since it is exported, other parts of the application (in other files) can then import it and register things.
// In bootstrap.js, the module is imported, and the components, services, and states are registered.
exports.ngmodule = angular.module("demo", [angularjs_1.default, 'ui.router.upgrade']);
// Show ui-router-visualizer
exports.ngmodule.run(['$uiRouter', function ($uiRouter) { return visualizer_1.visualizer($uiRouter); }]);
var BLANK_MODULE = {
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
function loadNg1AppModule(ngModule, appModule) {
    var module = Object.assign({}, BLANK_MODULE, appModule);
    ngModule.config(['$stateProvider', function ($stateProvider) { return module.states.forEach(function (state) { return $stateProvider.state(state); }); }]);
    Object.keys(module.components).forEach(function (name) { return ngModule.component(name, module.components[name]); });
    Object.keys(module.directives).forEach(function (name) { return ngModule.directive(name, module.directives[name]); });
    Object.keys(module.services).forEach(function (name) { return ngModule.service(name, module.services[name]); });
    Object.keys(module.filters).forEach(function (name) { return ngModule.filter(name, module.filters[name]); });
    module.configBlocks.forEach(function (configBlock) { return ngModule.config(configBlock); });
    module.runBlocks.forEach(function (runBlock) { return ngModule.run(runBlock); });
    return ngModule;
}
exports.loadNg1AppModule = loadNg1AppModule;


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var prefs_component_1 = __webpack_require__(128);
var prefs_states_1 = __webpack_require__(238);
var core_1 = __webpack_require__(8);
var common_1 = __webpack_require__(17);
var forms_1 = __webpack_require__(71);
var angular_1 = __webpack_require__(33);
var PREFS_STATES = [prefs_states_1.prefsState];
/** The NgModule for the Preferences feature */
var PrefsModule = (function () {
    function PrefsModule() {
    }
    return PrefsModule;
}());
PrefsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.UIRouterModule.forChild({ states: PREFS_STATES })
        ],
        declarations: [prefs_component_1.PrefsComponent],
    })
], PrefsModule);
exports.PrefsModule = PrefsModule;


/***/ })

},[215]);
//# sourceMappingURL=sampleapp.js.map