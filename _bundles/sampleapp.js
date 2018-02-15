webpackJsonp([1],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(8);
// The angularjs module for 'mymessages'
// This module is imported in each of the
exports.mymessagesModule = angular.module('mymessages', ['ui.router']);
//# sourceMappingURL=mymessages.module.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** Some utility functions used by the application */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProp = function (obj, key, val) { obj[key] = val; return obj; };
exports.pushToArr = function (array, item) { array.push(item); return array; };
exports.uniqReduce = function (arr, item) { return arr.indexOf(item) !== -1 ? arr : exports.pushToArr(arr, item); };
exports.flattenReduce = function (arr, item) { return arr.concat(item); };
var guidChar = function (c) { return c !== 'x' && c !== 'y' ? '-' : Math.floor(Math.random() * 16).toString(16).toUpperCase(); };
var ɵ0 = guidChar;
exports.ɵ0 = ɵ0;
exports.guid = function () { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("").map(guidChar).join(""); };
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 126:
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
Object.defineProperty(exports, "__esModule", { value: true });
// Google analytics
__webpack_require__(127);
var core_1 = __webpack_require__(4);
var visualizer_1 = __webpack_require__(125);
var angularJSModule_1 = __webpack_require__(57);
var __NgCli_bootstrap_1 = __webpack_require__(232);
var __NgCli_bootstrap_2 = __webpack_require__(23);
// Using AngularJS config block, call `deferIntercept()`.
// This tells UI-Router to delay the initial URL sync (until all bootstrapping is complete)
angularJSModule_1.sampleAppModuleAngularJS.config(['$urlServiceProvider', function ($urlService) { return $urlService.deferIntercept(); }]);
// Manually bootstrap the Angular app
__NgCli_bootstrap_2.platformBrowser().bootstrapModuleFactory(__NgCli_bootstrap_1.SampleAppModuleAngularNgFactory).then(function (platformRef) {
    // Intialize the Angular Module
    // (get() any UIRouter service from DI to initialize it)
    var urlService = platformRef.injector.get(core_1.UIRouter).urlService;
    // Instruct UIRouter to listen to URL changes
    urlService.listen();
    urlService.sync();
});
// Show ui-router-visualizer
angularJSModule_1.sampleAppModuleAngularJS.run(['$uiRouter', function ($uiRouter) { return visualizer_1.visualizer($uiRouter); }]);


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angularJSModule_1 = __webpack_require__(57);
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
window['ga']('create', 'UA-73329341-1', 'auto');
window['ga']('send', 'pageview');
angularJSModule_1.sampleAppModuleAngularJS.config(function ($transitionsProvider) {
    var vpv = function (vpath) {
        return window['ga']('send', 'pageview', vpath);
    };
    var path = function (trans) {
        var formattedRoute = trans.$to().url.format(trans.params());
        var withSitePrefix = location.pathname + formattedRoute;
        return "/" + withSitePrefix.split('/').filter(function (x) { return x; }).join('/');
    };
    var error = function (trans) {
        var err = trans.error();
        var type = err && err.hasOwnProperty('type') ? err.type : '_';
        var message = err && err.hasOwnProperty('message') ? err.message : '_';
        vpv(path(trans) + ';errorType=' + type + ';errorMessage=' + message);
    };
    $transitionsProvider.onSuccess({}, function (trans) { return vpv(path(trans)); }, { priority: -10000 });
    $transitionsProvider.onError({}, function (trans) { return error(trans); }, { priority: -10000 });
});
//# sourceMappingURL=ga.js.map

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(8);
exports.globalModule = angular.module('global', ['ui.router']);
//# sourceMappingURL=global.module.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(18));
__webpack_require__(205);
__webpack_require__(206);
__webpack_require__(207);
__webpack_require__(209);
__webpack_require__(210);
__webpack_require__(211);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(8);
var global_module_1 = __webpack_require__(18);
/**
 * This service stores and retrieves user preferences in session storage
 */
var AppConfig = /** @class */ (function () {
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
global_module_1.globalModule.service('AppConfig', AppConfig);
//# sourceMappingURL=appConfig.service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global_module_1 = __webpack_require__(18);
/**
 * This service emulates an Authentication Service.
 */
var AuthService = /** @class */ (function () {
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
global_module_1.globalModule.service('AuthService', AuthService);
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 207:
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
var sessionStorage_1 = __webpack_require__(208);
var global_module_1 = __webpack_require__(18);
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
var Contacts = /** @class */ (function (_super) {
    __extends(Contacts, _super);
    function Contacts($http, $timeout, $q, AppConfig) {
        // http://beta.json-generator.com/api/json/get/V1g6UwwGx
        return _super.call(this, $http, $timeout, $q, "contacts", "data/contacts.json", AppConfig) || this;
    }
    return Contacts;
}(sessionStorage_1.SessionStorage));
exports.Contacts = Contacts;
/** A fake Folders REST client API */
var Folders = /** @class */ (function (_super) {
    __extends(Folders, _super);
    function Folders($http, $timeout, $q, AppConfig) {
        return _super.call(this, $http, $timeout, $q, 'folders', 'data/folders.json', AppConfig) || this;
    }
    return Folders;
}(sessionStorage_1.SessionStorage));
exports.Folders = Folders;
var Messages = /** @class */ (function (_super) {
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
global_module_1.globalModule.service('Contacts', Contacts);
global_module_1.globalModule.service('Folders', Folders);
global_module_1.globalModule.service('Messages', Messages);
//# sourceMappingURL=dataSources.service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(124);
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
var SessionStorage = /** @class */ (function () {
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
//# sourceMappingURL=sessionStorage.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global_module_1 = __webpack_require__(18);
var dialogDirective = function ($timeout, $q) {
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
var ɵ0 = dialogDirective;
exports.ɵ0 = ɵ0;
global_module_1.globalModule.directive('dialog', dialogDirective);
//# sourceMappingURL=dialog.directive.js.map

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(8);
var global_module_1 = __webpack_require__(18);
var DialogService = /** @class */ (function () {
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
global_module_1.globalModule.service('DialogService', DialogService);
//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global_module_1 = __webpack_require__(18);
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
global_module_1.globalModule.run(authHookRunBlock);
//# sourceMappingURL=requiresAuth.hook.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(24));
__webpack_require__(213);
__webpack_require__(214);
__webpack_require__(215);
__webpack_require__(216);
__webpack_require__(217);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_module_1 = __webpack_require__(24);
/**
 * The controller for the `app` component.
 */
var AuthedController = /** @class */ (function () {
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
var appComponent = {
    controller: AuthedController,
    template: "\n    <div class=\"navheader\">\n      <ul ng-if=\"::$ctrl.isAuthenticated\" class=\"nav nav-tabs\">\n    \n        <li ui-sref-active=\"active\"> <a ui-sref=\"mymessages\" role=\"button\"> Messages </a> </li>\n        <li ui-sref-active=\"active\"> <a ui-sref=\"contacts\" role=\"button\"> Contacts </a> </li>\n        <li ui-sref-active=\"active\"> <a ui-sref=\"prefs\" role=\"button\"> Preferences </a> </li>\n    \n        <li class=\"navbar-right\">\n          <button class=\"btn btn-primary fa fa-home\" ui-sref=\"home\"></button>\n          <button style=\"margin-right: 15px;\" class=\"btn btn-primary\" ui-sref=\"mymessages.compose\"><i class=\"fa fa-envelope\"></i> New Message</button>\n        </li>\n    \n        <li class=\"navbar-text navbar-right logged-in-user\" style=\"margin: 0.5em 1.5em;\">\n          <div>\n            {{::$ctrl.emailAddress}} <i class=\"fa fa-chevron-down\"></i>\n            <div class=\"hoverdrop\">\n              <button class=\"btn btn-primary\" ng-click=\"$ctrl.logout()\">Log Out</button>\n            </div>\n          </div>\n        </li>\n    \n      </ul>\n    </div>\n    \n    <div ui-view/>\n"
};
home_module_1.homeModule.component('app', appComponent);
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_module_1 = __webpack_require__(24);
/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
var appState = {
    name: 'app',
    redirectTo: 'welcome',
    component: 'app'
};
/**
 * This is the 'welcome' state.  It is the default state (as defined by app.js) if no other state
 * can be matched to the URL.
 */
var welcomeState = {
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
var homeState = {
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
var loginState = {
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
home_module_1.homeModule.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state(appState);
        $stateProvider.state(welcomeState);
        $stateProvider.state(homeState);
        $stateProvider.state(loginState);
    }]);
//# sourceMappingURL=app.states.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_module_1 = __webpack_require__(24);
// This is a home component for authenticated users.
// It shows giant buttons which activate their respective submodules: Messages, Contacts, Preferences
var homeComponent = {
    template: "\n    <div class=\"home buttons\">\n      <button ui-sref=\"mymessages\" class=\"btn btn-primary\">\n        <h1><i class=\"fa fa-envelope\"></i></h1>\n        <h1>Messages</h1>\n      </button>\n\n      <button ui-sref=\"contacts\" class=\"btn btn-primary\">\n      <h1><i class=\"fa fa-users\"></i></h1>\n      <h1>Contacts</h1>\n      </button>\n\n      <button ui-sref=\"prefs\" class=\"btn btn-primary\">\n        <h1><i class=\"fa fa-cogs\"></i></h1>\n        <h1>Preferences</h1>\n      </button>\n    </div>\n"
};
home_module_1.homeModule.component('home', homeComponent);
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(8);
var home_module_1 = __webpack_require__(24);
/**
 * The controller for the `login` component
 *
 * The `login` method validates the credentials.
 * Then it sends the user back to the `returnTo` state, which is provided as a resolve data.
 */
var LoginController = /** @class */ (function () {
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
                var options = angular.extend({}, _this.returnTo.options(), { reload: true });
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
var loginComponent = {
    bindings: { returnTo: '<' },
    controller: LoginController,
    template: "\n    <div class=\"container\">\n      <div class=\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n        <h3>Log In</h3>\n        <p>(This login screen is for demonstration only... just pick a username, enter 'password' and click <b>\"Log in\"</b>)</p>\n        <hr>\n    \n        <div>\n          <label for=\"username\">Username:</label>\n          <select class=\"form-control\" name=\"username\" id=\"username\"\n            ng-model=\"$ctrl.credentials.username\" ng-options=\"username for username in $ctrl.usernames\"></select>\n          <i style=\"position: relative; bottom: 1.8em; margin-left: 10em; height: 0\"\n              ng-hide=\"$ctrl.credentials.username\" class=\"fa fa-arrow-left bounce-horizontal\"> Choose </i>\n        </div>\n        <br>\n    \n        <div>\n          <label for=\"password\">Password:</label>\n          <input class=\"form-control\" type=\"password\" name=\"password\" ng-model=\"$ctrl.credentials.password\">\n          <i style=\"position: relative; bottom: 1.8em; margin-left: 5em; height: 0\"\n              ng-hide=\"!$ctrl.credentials.username || $ctrl.credentials.password == 'password'\" class=\"fa fa-arrow-left bounce-horizontal\">\n            Enter '<b>password</b>' here\n          </i>\n        </div>\n    \n        <div ng-show=\"$ctrl.errorMessage\" class=\"well error\">{{ $ctrl.errorMessage }}</div>\n    \n        <hr>\n        <div>\n          <button class=\"btn btn-primary\" type=\"button\"\n              ng-disabled=\"$ctrl.authenticating\" ng-click=\"$ctrl.login($ctrl.credentials)\">\n            <i class=\"fa fa-spin fa-spinner\" ng-show=\"$ctrl.authenticating\"></i> <span>Log in</span>\n          </button>\n          <i ng-show=\"$ctrl.credentials.username && $ctrl.credentials.password == 'password'\" style=\"position: relative;\" class=\"fa fa-arrow-left bounce-horizontal\"> Click Me!</i>\n      </div>\n    </div>\n    "
};
home_module_1.homeModule.component('login', loginComponent);
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_module_1 = __webpack_require__(24);
var welcomeComponent = {
    template: "\n    <div class=\"container-fluid\">\n    \n      <h3>UI-Router Sample App</h3>\n    \n      <p>Welcome to the sample app!</p>\n      <p>This is a demonstration app intended to highlight some patterns that can be used within UI-Router.\n        These patterns should help you to to build cohesive, robust apps.  Additionally, this app uses state-vis\n        to show the tree of states, and a transition log visualizer.</p>\n    \n      <h4>App Overview</h4>\n      <p>\n        First, start exploring the application's functionality at a high level by activating\n        one of the three submodules: Messages, Contacts, or Preferences. If you are not already logged in,\n        you will be taken to an authentication screen (the authentication is fake; the password is \"password\")\n        <div>\n          <button class=\"btn btn-primary\" ui-sref=\"mymessages\"><i class=\"fa fa-envelope\"></i><span>Messages</span></button>\n          <button class=\"btn btn-primary\" ui-sref=\"contacts\"><i class=\"fa fa-users\"></i><span>Contacts</span></button>\n          <button class=\"btn btn-primary\" ui-sref=\"prefs\"><i class=\"fa fa-cogs\"></i><span>Preferences</span></button>\n        </div>\n      </p>\n    \n      <h4>Patterns and Recipes</h4>\n      <ul>\n        <li>Require Authentication</li>\n        <li>Previous State</li>\n        <li>Redirect Hook</li>\n        <li>Default Param Values</li>\n      </ul>\n    </div>"
};
home_module_1.homeModule.component('welcome', welcomeComponent);
//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(10));
__webpack_require__(219);
__webpack_require__(220);
__webpack_require__(221);
__webpack_require__(222);
__webpack_require__(223);
__webpack_require__(224);
__webpack_require__(225);
__webpack_require__(226);
__webpack_require__(228);
__webpack_require__(230);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(8);
var mymessages_module_1 = __webpack_require__(10);
/**
 * The controller for the Compose component
 */
var ComposeController = /** @class */ (function () {
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
var composeComponent = {
    bindings: { $stateParams: '<', $transition$: '<' },
    controller: ComposeController,
    template: "\n    <div class=\"compose\">\n      <div class=\"header\">\n        <div class=\"flex-h\"> <label>Recipient</label> <input type=\"text\" id=\"to\" name=\"to\" ng-model=\"$ctrl.message.to\"> </div>\n        <div class=\"flex-h\"> <label>Subject</label> <input type=\"text\" id=\"subject\" name=\"subject\" ng-model=\"$ctrl.message.subject\"> </div>\n      </div>\n    \n      <div class=\"body\">\n        <textarea name=\"body\" id=\"body\" ng-model=\"$ctrl.message.body\" cols=\"30\" rows=\"20\"></textarea>\n        \n        <div class=\"buttons\">\n          <!-- Clicking this button brings the user back to the state they came from (previous state) -->\n          <button class=\"btn btn-primary\" ng-click=\"$ctrl.gotoPreviousState()\"><i class=\"fa fa-times-circle-o\"></i><span>Cancel</span></button>\n          <button class=\"btn btn-primary\" ng-click=\"$ctrl.save($ctrl.message)\"><i class=\"fa fa-save\"></i><span>Save as Draft</span></button>\n          <button class=\"btn btn-primary\" ng-click=\"$ctrl.send($ctrl.message)\"><i class=\"fa fa-paper-plane-o\"></i><span>Send</span></button>\n        </div>\n      </div>\n    </div>\n"
};
mymessages_module_1.mymessagesModule.component('compose', composeComponent);
//# sourceMappingURL=compose.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mymessages_module_1 = __webpack_require__(10);
/**
 * Renders a list of folders
 */
var folderListComponent = {
    bindings: { folders: '<' },
    template: "\n    <!-- Renders a list of folders -->\n    <div class=\"folderlist\">\n      <ul class=\"selectlist list-unstyled\">\n  \n        <!-- Highlight the selected folder:\n            When the current state matches the ui-sref's state (and its parameters)\n            ui-sref-active applies the 'selected' class to the li element -->\n        <li class=\"folder\" ui-sref-active=\"selected\" ng-repeat=\"folder in $ctrl.folders\" >\n          <!-- This ui-sref is a relative link to the 'mymessages.messagelist' substate. It provides the\n              'folderId' parameter value from the current folder's .id property -->\n          <a ui-sref=\".messagelist({folderId: folder._id})\"><i class=\"fa\"></i>{{folder._id}}</a>\n        </li>\n      </ul>\n    </div>\n"
};
mymessages_module_1.mymessagesModule.component('folderList', folderListComponent);
//# sourceMappingURL=folderList.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(124);
var mymessages_module_1 = __webpack_require__(10);
/** Helper function to prefix a message with "fwd: " or "re: " */
var prefixSubject = function (prefix, message) { return prefix + message.subject; };
var ɵ0 = prefixSubject;
exports.ɵ0 = ɵ0;
/** Helper function which quotes an email message */
var quoteMessage = function (message) { return "\n\n\n\n---------------------------------------\nOriginal message:\nFrom: " + message.from + "\nDate: " + message.date + "\nSubject: " + message.subject + "\n\n" + message.body; };
var ɵ1 = quoteMessage;
exports.ɵ1 = ɵ1;
/** Helper function to make a response message object */
var makeResponseMsg = function (subjectPrefix, origMsg) { return ({
    from: origMsg.to,
    to: origMsg.from,
    subject: prefixSubject(subjectPrefix, origMsg),
    body: quoteMessage(origMsg)
}); };
var ɵ2 = makeResponseMsg;
exports.ɵ2 = ɵ2;
/**
 * The controller for the Message component
 */
var MessageController = /** @class */ (function () {
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
exports.messageComponent = {
    bindings: { folder: '<', message: '<', nextMessageGetter: '<' },
    controller: MessageController,
    template: "\n    <div class=\"message\">\n    \n      <div class=\"header\">\n        <div>\n          <h4>{{$ctrl.message.subject}}</h4>\n          <h5>{{$ctrl.message.from}} <i class=\"fa fa-long-arrow-right\"></i> {{$ctrl.message.to}}</h5>\n        </div>\n    \n        <div class=\"line2\">\n          <div>{{$ctrl.message.date | date: 'longDate'}} {{$ctrl.message.date | date: 'mediumTime'}}</div>\n          <div>\n            <button class=\"btn btn-primary\" ng-show=\"$ctrl.actions.edit\" ng-click=\"$ctrl.editDraft($ctrl.message)\"><i class=\"fa fa-pencil\"></i> <span>Edit Draft</span></button>\n            <button class=\"btn btn-primary\" ng-show=\"$ctrl.actions.reply\" ng-click=\"$ctrl.reply($ctrl.message)\"><i class=\"fa fa-reply\"></i> <span>Reply</span></button>\n            <button class=\"btn btn-primary\" ng-show=\"$ctrl.actions.forward\" ng-click=\"$ctrl.forward($ctrl.message)\"><i class=\"fa fa-forward\" ></i> <span>Forward</span></button>\n            <button class=\"btn btn-primary\" ng-show=\"$ctrl.actions.delete\" ng-click=\"$ctrl.remove($ctrl.message)\"><i class=\"fa fa-close\"></i> <span>Delete</span></button>\n          </div>\n        </div>\n      </div>\n    \n      <!-- Pass the raw (plain text) message body through the messageBody filter to format slightly nicer. -->\n      <div class=\"body\" ng-bind-html=\"::$ctrl.message.body | messageBody\"></div>\n    </div>\n"
};
mymessages_module_1.mymessagesModule.component('message', exports.messageComponent);
//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mymessages_module_1 = __webpack_require__(10);
/**
 * This component renders a list of messages using the `messageTable` component
 */
var messageListComponent = {
    bindings: { folder: '<', messages: '<' },
    template: "\n    <div class=\"messages\">\n      <message-table columns=\"$ctrl.folder.columns\" messages=\"$ctrl.messages\"></message-table>\n    </div>\n"
};
mymessages_module_1.mymessagesModule.component('messageList', messageListComponent);
//# sourceMappingURL=messageList.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mymessages_module_1 = __webpack_require__(10);
var ɵ0 = function (AppConfig) {
    var _this = this;
    this.AppConfig = AppConfig;
    this.colVisible = function (name) { return _this.columns.indexOf(name) !== -1; };
};
exports.ɵ0 = ɵ0;
/**
 * A component that displays a folder of messages as a table
 *
 * If a row is clicked, the details of the message is shown using a relative ui-sref to `.message`.
 *
 * ui-sref-active is used to highlight the selected row.
 *
 * Shows/hides specific columns based on the `columns` input binding.
 */
var messageTableComponent = {
    bindings: { columns: '<', messages: '<' },
    controller: ɵ0,
    template: "\n    <table>\n      <thead>\n        <tr>\n          <td ng-if=\"::$ctrl.colVisible('read')\"></td>\n          <td ng-if=\"::$ctrl.colVisible('from')\"     sort-messages=\"from\">Sender</td>\n          <td ng-if=\"::$ctrl.colVisible('to')\"       sort-messages=\"to\">Recipient</td>\n          <td ng-if=\"::$ctrl.colVisible('subject')\"  sort-messages=\"subject\">Subject</td>\n          <td ng-if=\"::$ctrl.colVisible('date')\"     sort-messages=\"date\">Date</td>\n        </tr>\n      </thead>\n  \n      <tbody>\n        <tr ng-repeat=\"message in $ctrl.messages | orderBy: $ctrl.AppConfig.sort track by message._id\"\n            ui-sref=\".message({messageId: message._id})\" ui-sref-active=\"active\">\n          <td ng-if=\"::$ctrl.colVisible('read')\"><i class=\"fa fa-circle\" style=\"font-size: 50%\" ng-show=\"!message.read\"></td>\n          <td ng-if=\"::$ctrl.colVisible('from')\">{{ message.from }}</td>\n          <td ng-if=\"::$ctrl.colVisible('to')\">{{ message.to }}</td>\n          <td ng-if=\"::$ctrl.colVisible('subject')\">{{ message.subject }}</td>\n          <td ng-if=\"::$ctrl.colVisible('date')\">{{ message.date | date: \"yyyy-MM-dd\" }}</td>\n        </tr>\n      </tbody>\n  \n    </table>\n"
};
mymessages_module_1.mymessagesModule.component('messageTable', messageTableComponent);
//# sourceMappingURL=messageTable.component.js.map

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mymessages_module_1 = __webpack_require__(10);
/**
 * The main mymessages component.
 *
 * Renders a list of folders, and has two viewports:
 * - messageList: filled with the list of messages for a folder
 * - messagecontent: filled with the contents of a single message.
 */
var mymessagesComponent = {
    bindings: { folders: '<' },
    template: "\n    <div class=\"my-messages\">\n    \n      <!-- Show message folders -->\n      <folder-list folders=\"$ctrl.folders\"></folder-list>\n    \n      <!-- A named view for the list of messages in this folder.  This will be  filled in by the 'mymessages.messagelist' child state -->\n      <div ui-view=\"messagelist\" class=\"messagelist\"> </div>\n    \n    </div>\n    \n    <!-- A named ui-view for a message's contents.  The 'mymessages.messagelist.message' grandchild state plugs into this ui-view -->\n    <div ui-view=\"messagecontent\"></div>\n"
};
mymessages_module_1.mymessagesModule.component('mymessages', mymessagesComponent);
//# sourceMappingURL=mymessages.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mymessages_module_1 = __webpack_require__(10);
/**
 * This state allows the user to compose a new message, edit a drafted message, send a message,
 * or save an unsent message as a draft.
 *
 * This state uses view-targeting to take over the ui-view that would normally be filled by the 'mymessages' state.
 */
var composeState = {
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
var ɵ0 = function (Folders) { return Folders.all(); }, ɵ1 = { requiresAuth: true };
exports.ɵ0 = ɵ0;
exports.ɵ1 = ɵ1;
/**
 * The mymessages state. This is the main state for the mymessages submodule.
 *
 * This state shows the list of folders for the current user. It retrieves the folders from the
 * Folders service.  If a user navigates directly to this state, the state redirects to the 'mymessages.messagelist'.
 */
var mymessagesState = {
    parent: 'app',
    name: "mymessages",
    url: "/mymessages",
    resolve: {
        // All the folders are fetched from the Folders service
        folders: ɵ0
    },
    // If mymessages state is directly activated, redirect the transition to the child state 'mymessages.messagelist'
    redirectTo: 'mymessages.messagelist',
    component: 'mymessages',
    // Mark this state as requiring authentication.  See ../routerhooks/requiresAuth.js.
    data: ɵ1
};
var ɵ2 = function (Messages, $stateParams) { return Messages.get($stateParams.messageId); }, ɵ3 = function (MessageListUI, messages) { return MessageListUI.proximalMessageId.bind(MessageListUI, messages); };
exports.ɵ2 = ɵ2;
exports.ɵ3 = ɵ3;
/**
 * This state shows the contents of a single message.
 * It also has UI to reply, forward, delete, or edit an existing draft.
 */
var messageState = {
    name: 'mymessages.messagelist.message',
    url: '/:messageId',
    resolve: {
        // Fetch the message from the Messages service using the messageId parameter
        message: ɵ2,
        // Provide the component with a function it can query that returns the closest message id
        nextMessageGetter: ɵ3
    },
    views: {
        // Relatively target the parent-state's parent-state's 'messagecontent' ui-view
        // This could also have been written using ui-view@state addressing: 'messagecontent@mymessages'
        // Or, this could also have been written using absolute ui-view addressing: '!$default.$default.messagecontent'
        "^.^.messagecontent": 'message'
    }
};
var ɵ4 = function (Folders, $stateParams) { return Folders.get($stateParams.folderId); }, ɵ5 = function (Messages, folder) { return Messages.byFolder(folder); };
exports.ɵ4 = ɵ4;
exports.ɵ5 = ɵ5;
/**
 * This state shows the contents (a message list) of a single folder
 */
var messageListState = {
    name: 'mymessages.messagelist',
    url: '/:folderId',
    // The folderId parameter is part of the URL.  This params block sets 'inbox' as the default value.
    // If no parameter value for folderId is provided on the transition, then it will be defaulted to 'inbox'
    params: { folderId: "inbox" },
    resolve: {
        // Fetch the current folder from the Folders service, using the folderId parameter
        folder: ɵ4,
        // The resolved folder object (from the resolve above) is injected into this resolve
        // The list of message for the folder are fetched from the Messages service
        messages: ɵ5
    },
    views: {
        // This targets the "messagelist" named ui-view added to the DOM in the parent state 'mymessages'
        "messagelist": 'messageList'
    }
};
mymessages_module_1.mymessagesModule.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state(composeState);
        $stateProvider.state(mymessagesState);
        $stateProvider.state(messageState);
        $stateProvider.state(messageListState);
    }]);
//# sourceMappingURL=mymessages.states.js.map

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(227);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(8);
var mymessages_module_1 = __webpack_require__(10);
/**
 * A directive (for a table header) which changes the app's sort order
 */
var sortMessagesDirective = function (AppConfig) {
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
var ɵ0 = sortMessagesDirective;
exports.ɵ0 = ɵ0;
mymessages_module_1.mymessagesModule.directive('sortMessages', sortMessagesDirective);
//# sourceMappingURL=sortMessages.directive.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(229);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mymessages_module_1 = __webpack_require__(10);
/** Angular filter to format fake emails as HTML*/
var messageBody = function ($sce) {
    return function (msgText) {
        if (msgText === void 0) { msgText = ''; }
        return $sce.trustAsHtml(msgText.split(/\n/).map(function (p) { return "<p>" + p + "</p>"; }).join('\n'));
    };
};
var ɵ0 = messageBody;
exports.ɵ0 = ɵ0;
mymessages_module_1.mymessagesModule.filter('messageBody', messageBody);
//# sourceMappingURL=messageBody.filter.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(231);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mymessages_module_1 = __webpack_require__(10);
/** Provides services related to a message list */
var MessageListUI = /** @class */ (function () {
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
mymessages_module_1.mymessagesModule.service('MessageListUI', MessageListUI);
//# sourceMappingURL=messagesListUI.service.js.map

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(3);
var i1 = __webpack_require__(233);
var i2 = __webpack_require__(82);
var i3 = __webpack_require__(234);
var i4 = __webpack_require__(235);
var i5 = __webpack_require__(11);
var i6 = __webpack_require__(23);
var i7 = __webpack_require__(52);
var i8 = __webpack_require__(67);
var i9 = __webpack_require__(25);
var i10 = __webpack_require__(41);
var i11 = __webpack_require__(51);
var i12 = __webpack_require__(35);
var i13 = __webpack_require__(26);
var i14 = __webpack_require__(42);
var i15 = __webpack_require__(44);
var i16 = __webpack_require__(46);
var i17 = __webpack_require__(45);
var i18 = __webpack_require__(36);
var i19 = __webpack_require__(54);
var i20 = __webpack_require__(27);
var i21 = __webpack_require__(236);
var i22 = __webpack_require__(81);
var i23 = __webpack_require__(56);
var SampleAppModuleAngularNgFactory = i0.ɵcmf(i1.SampleAppModuleAngular, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.UIViewNgFactory, i3.UIViewNgUpgradeNgFactory, i4.PrefsComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵq, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID, [2, i5.ɵa]]), i0.ɵmpd(4608, i0.Compiler, i0.Compiler, []), i0.ɵmpd(5120, i0.APP_ID, i0.ɵi, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵn, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵo, []), i0.ɵmpd(4608, i6.DomSanitizer, i6.ɵe, [i5.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i6.DomSanitizer]), i0.ɵmpd(4608, i6.HAMMER_GESTURE_CONFIG, i6.HammerGestureConfig, []), i0.ɵmpd(5120, i6.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new i6.ɵDomEventsPlugin(p0_0, p0_1), new i6.ɵKeyEventsPlugin(p1_0), new i6.ɵHammerGesturesPlugin(p2_0, p2_1)]; }, [i5.DOCUMENT, i0.NgZone, i5.DOCUMENT, i5.DOCUMENT, i6.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i6.EventManager, i6.EventManager, [i6.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i6.ɵDomSharedStylesHost, i6.ɵDomSharedStylesHost, [i5.DOCUMENT]), i0.ɵmpd(4608, i6.ɵDomRendererFactory2, i6.ɵDomRendererFactory2, [i6.EventManager, i6.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i6.ɵDomRendererFactory2]), i0.ɵmpd(6144, i6.ɵSharedStylesHost, null, [i6.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i6.Meta, i6.Meta, [i5.DOCUMENT]), i0.ɵmpd(4608, i6.Title, i6.Title, [i5.DOCUMENT]), i0.ɵmpd(5120, "$injector", i7.ɵa, []), i0.ɵmpd(5120, "$rootScope", i7.ɵb, ["$injector"]), i0.ɵmpd(5120, "$compile", i7.ɵc, ["$injector"]), i0.ɵmpd(5120, "$parse", i7.ɵd, ["$injector"]), i0.ɵmpd(5120, "$uiRouter", i8.getUIRouter, ["$injector"]), i0.ɵmpd(5120, i9.UIRouter, i8.uiRouterUpgradeFactory, ["$uiRouter", i0.Injector]), i0.ɵmpd(5120, i10.StateRegistry, i11.fnStateRegistry, [i9.UIRouter]), i0.ɵmpd(5120, "UIView.PARENT_INJECT", i8.getParentUIViewInject, [i10.StateRegistry]), i0.ɵmpd(5120, i12.StateService, i11.fnStateService, [i9.UIRouter]), i0.ɵmpd(5120, i13.TransitionService, i11.fnTransitionService, [i9.UIRouter]), i0.ɵmpd(5120, i14.UrlMatcherFactory, i11.fnUrlMatcherFactory, [i9.UIRouter]), i0.ɵmpd(5120, i15.UrlRouter, i11.fnUrlRouter, [i9.UIRouter]), i0.ɵmpd(5120, i16.UrlService, i11.fnUrlService, [i9.UIRouter]), i0.ɵmpd(5120, i17.ViewService, i11.fnViewService, [i9.UIRouter]), i0.ɵmpd(5120, i18.UIRouterGlobals, i11.fnGlobals, [i9.UIRouter]), i0.ɵmpd(4608, i19.ɵi, i19.ɵi, []), i0.ɵmpd(4608, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(5120, "DialogService", i1.getDialogService, ["$injector"]), i0.ɵmpd(5120, "Contacts", i1.getContactsService, ["$injector"]), i0.ɵmpd(512, i5.CommonModule, i5.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i6.ɵa, []), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0) { return [i6.ɵh(p0_0)]; }, [[2, i0.NgProbeToken]]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i6.BrowserModule, i6.BrowserModule, [[3, i6.BrowserModule]]), i0.ɵmpd(512, i7.UpgradeModule, i7.UpgradeModule, [i0.Injector, i0.NgZone]), i0.ɵmpd(512, i20.UIRouterModule, i20.UIRouterModule, []), i0.ɵmpd(512, i8.UIRouterUpgradeModule, i8.UIRouterUpgradeModule, []), i0.ɵmpd(512, i19.ɵba, i19.ɵba, []), i0.ɵmpd(512, i19.FormsModule, i19.FormsModule, []), i0.ɵmpd(512, i21.PrefsModule, i21.PrefsModule, []), i0.ɵmpd(512, i1.SampleAppModuleAngular, i1.SampleAppModuleAngular, [i7.UpgradeModule]), i0.ɵmpd(1024, i20.UIROUTER_ROOT_MODULE, function () { return [{}]; }, []), i0.ɵmpd(1024, i20.UIROUTER_MODULE_TOKEN, function () { return [{ states: [{ parent: "app", name: "prefs", url: "/prefs", component: i22.PrefsComponent, data: { requiresAuth: true } }] }, { states: [{ name: "contacts.**", url: "/contacts", loadChildren: "./contacts/contacts.module#ContactsModule" }] }]; }, []), i0.ɵmpd(1024, i23.ROUTES, function () { return [[{ parent: "app", name: "prefs", url: "/prefs", component: i22.PrefsComponent, data: { requiresAuth: true } }], [{ name: "contacts.**", url: "/contacts", loadChildren: "./contacts/contacts.module#ContactsModule" }]]; }, [])]); });
exports.SampleAppModuleAngularNgFactory = SampleAppModuleAngularNgFactory;


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var static_1 = __webpack_require__(52);
var angular_hybrid_1 = __webpack_require__(66);
var angularJSModule_1 = __webpack_require__(57);
// Create a "future state" (a placeholder) for the Contacts
// Angular module which will be lazy loaded by UI-Router
exports.contactsFutureState = {
    name: 'contacts.**',
    url: '/contacts',
    loadChildren: './contacts/contacts.module#ContactsModule',
};
function getDialogService($injector) {
    return $injector.get('DialogService');
}
exports.getDialogService = getDialogService;
function getContactsService($injector) {
    return $injector.get('Contacts');
}
exports.getContactsService = getContactsService;
// The main NgModule for the Angular portion of the hybrid app
var SampleAppModuleAngular = /** @class */ (function () {
    function SampleAppModuleAngular(upgrade) {
        this.upgrade = upgrade;
    }
    SampleAppModuleAngular.prototype.ngDoBootstrap = function () {
        this.upgrade.bootstrap(document.body, [angularJSModule_1.sampleAppModuleAngularJS.name]);
    };
    return SampleAppModuleAngular;
}());
exports.SampleAppModuleAngular = SampleAppModuleAngular;
//# sourceMappingURL=angularModule.js.map

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(3);
var i1 = __webpack_require__(67);
var i2 = __webpack_require__(82);
var i3 = __webpack_require__(11);
var i4 = __webpack_require__(52);
var i5 = __webpack_require__(25);
var i6 = __webpack_require__(41);
var i7 = __webpack_require__(51);
var i8 = __webpack_require__(35);
var i9 = __webpack_require__(26);
var i10 = __webpack_require__(42);
var i11 = __webpack_require__(44);
var i12 = __webpack_require__(46);
var i13 = __webpack_require__(45);
var i14 = __webpack_require__(36);
var i15 = __webpack_require__(27);
var i16 = __webpack_require__(16);
var UIRouterUpgradeModuleNgFactory = i0.ɵcmf(i1.UIRouterUpgradeModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.UIViewNgFactory, UIViewNgUpgradeNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵa]]), i0.ɵmpd(5120, "$injector", i4.ɵa, []), i0.ɵmpd(5120, "$rootScope", i4.ɵb, ["$injector"]), i0.ɵmpd(5120, "$compile", i4.ɵc, ["$injector"]), i0.ɵmpd(5120, "$parse", i4.ɵd, ["$injector"]), i0.ɵmpd(5120, "$uiRouter", i1.getUIRouter, ["$injector"]), i0.ɵmpd(5120, i5.UIRouter, i1.uiRouterUpgradeFactory, ["$uiRouter", i0.Injector]), i0.ɵmpd(5120, i6.StateRegistry, i7.fnStateRegistry, [i5.UIRouter]), i0.ɵmpd(5120, "UIView.PARENT_INJECT", i1.getParentUIViewInject, [i6.StateRegistry]), i0.ɵmpd(5120, i8.StateService, i7.fnStateService, [i5.UIRouter]), i0.ɵmpd(5120, i9.TransitionService, i7.fnTransitionService, [i5.UIRouter]), i0.ɵmpd(5120, i10.UrlMatcherFactory, i7.fnUrlMatcherFactory, [i5.UIRouter]), i0.ɵmpd(5120, i11.UrlRouter, i7.fnUrlRouter, [i5.UIRouter]), i0.ɵmpd(5120, i12.UrlService, i7.fnUrlService, [i5.UIRouter]), i0.ɵmpd(5120, i13.ViewService, i7.fnViewService, [i5.UIRouter]), i0.ɵmpd(5120, i14.UIRouterGlobals, i7.fnGlobals, [i5.UIRouter]), i0.ɵmpd(512, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(512, i15.UIRouterModule, i15.UIRouterModule, []), i0.ɵmpd(512, i4.UpgradeModule, i4.UpgradeModule, [i0.Injector, i0.NgZone]), i0.ɵmpd(512, i1.UIRouterUpgradeModule, i1.UIRouterUpgradeModule, []), i0.ɵmpd(1024, i15.UIROUTER_ROOT_MODULE, function () { return [{}]; }, [])]); });
exports.UIRouterUpgradeModuleNgFactory = UIRouterUpgradeModuleNgFactory;
var styles_UIViewNgUpgrade = [];
var RenderType_UIViewNgUpgrade = i0.ɵcrt({ encapsulation: 2, styles: styles_UIViewNgUpgrade, data: {} });
exports.RenderType_UIViewNgUpgrade = RenderType_UIViewNgUpgrade;
function View_UIViewNgUpgrade_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "ui-view", [], null, null, null, i2.View_UIView_0, i2.RenderType_UIView)), i0.ɵdid(1, 245760, null, 0, i16.UIView, [i5.UIRouter, "UIView.PARENT_INJECT", i0.ViewContainerRef], { name: [0, "name"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.name; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_UIViewNgUpgrade_0 = View_UIViewNgUpgrade_0;
function View_UIViewNgUpgrade_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ui-view-ng-upgrade", [], null, null, null, View_UIViewNgUpgrade_0, RenderType_UIViewNgUpgrade)), i0.ɵprd(9216, null, "UIView.PARENT_INJECT", i1.objectFactory, []), i0.ɵdid(2, 49152, null, 0, i1.UIViewNgUpgrade, [i0.ElementRef, "UIView.PARENT_INJECT", i6.StateRegistry], null, null)], null, null); }
exports.View_UIViewNgUpgrade_Host_0 = View_UIViewNgUpgrade_Host_0;
var UIViewNgUpgradeNgFactory = i0.ɵccf("ui-view-ng-upgrade", i1.UIViewNgUpgrade, View_UIViewNgUpgrade_Host_0, { name: "name" }, {}, []);
exports.UIViewNgUpgradeNgFactory = UIViewNgUpgradeNgFactory;


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(3);
var i1 = __webpack_require__(54);
var i2 = __webpack_require__(81);
var styles_PrefsComponent = [];
var RenderType_PrefsComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_PrefsComponent, data: {} });
exports.RenderType_PrefsComponent = RenderType_PrefsComponent;
function View_PrefsComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(1, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(3, 0, null, null, 4, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.reset() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 0, "i", [["class", "fa fa-recycle"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Reset All Data"])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n\n      "])), (_l()(), i0.ɵeld(10, 0, null, null, 14, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(12, 0, null, null, 1, "label", [["for", "restDelay"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Simulated REST API delay (ms)"])), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(15, 0, null, null, 5, "input", [["name", "restDelay"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 16)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 16).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 16)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 16)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.prefs.restDelay = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(16, 16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.DefaultValueAccessor]), i0.ɵdid(18, 671744, null, 0, i1.NgModel, [[8, null], [8, null], [8, null], [2, i1.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(20, 16384, null, 0, i1.NgControlStatus, [i1.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(22, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.savePrefs() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["Save"])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = "restDelay"; var currVal_8 = _co.prefs.restDelay; _ck(_v, 18, 0, currVal_7, currVal_8); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 20).ngClassUntouched; var currVal_1 = i0.ɵnov(_v, 20).ngClassTouched; var currVal_2 = i0.ɵnov(_v, 20).ngClassPristine; var currVal_3 = i0.ɵnov(_v, 20).ngClassDirty; var currVal_4 = i0.ɵnov(_v, 20).ngClassValid; var currVal_5 = i0.ɵnov(_v, 20).ngClassInvalid; var currVal_6 = i0.ɵnov(_v, 20).ngClassPending; _ck(_v, 15, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
exports.View_PrefsComponent_0 = View_PrefsComponent_0;
function View_PrefsComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "prefs-component", [], null, null, null, View_PrefsComponent_0, RenderType_PrefsComponent)), i0.ɵdid(1, 114688, null, 0, i2.PrefsComponent, ["AppConfig"], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_PrefsComponent_Host_0 = View_PrefsComponent_Host_0;
var PrefsComponentNgFactory = i0.ɵccf("prefs-component", i2.PrefsComponent, View_PrefsComponent_Host_0, {}, {}, []);
exports.PrefsComponentNgFactory = PrefsComponentNgFactory;


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var prefs_states_1 = __webpack_require__(237);
var PREFS_STATES = [prefs_states_1.prefsState];
/** The NgModule for the Preferences feature */
var PrefsModule = /** @class */ (function () {
    function PrefsModule() {
    }
    return PrefsModule;
}());
exports.PrefsModule = PrefsModule;
//# sourceMappingURL=prefs.module.js.map

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var prefs_component_1 = __webpack_require__(81);
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
//# sourceMappingURL=prefs.states.js.map

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(8);
exports.homeModule = angular.module('main', ['ui.router']);
//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file imports the third party library dependencies, then creates the angular module "demo"
 * and exports it.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// External dependencies
var angular = __webpack_require__(8);
var angularjs_1 = __webpack_require__(58);
var angular_hybrid_1 = __webpack_require__(66);
// Feature Modules
var index_1 = __webpack_require__(204);
var index_2 = __webpack_require__(212);
var index_3 = __webpack_require__(218);
// Create the angular 1 module "demo".
//
// Since it is exported, other parts of the application (in other files) can then import it and register things.
// In bootstrap.js, the module is imported, and the components, services, and states are registered.
exports.sampleAppModuleAngularJS = angular.module("sampleapp", [
    angularjs_1.default,
    angular_hybrid_1.upgradeModule.name,
    index_2.homeModule.name,
    index_1.globalModule.name,
    index_3.mymessagesModule.name,
]);
var ɵ0 = function ($urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise("/welcome");
};
exports.ɵ0 = ɵ0;
// Apply some global configuration...
// If the user enters a URL that doesn't match any known URL (state), send them to `/welcome`
var otherwiseConfigBlock = ['$urlRouterProvider', '$locationProvider', ɵ0];
exports.sampleAppModuleAngularJS.config(otherwiseConfigBlock);
var ɵ1 = function ($trace) { $trace.enable(1); };
exports.ɵ1 = ɵ1;
// Enable tracing of each TRANSITION... (check the javascript console)
// This syntax `$trace.enable(1)` is an alternative to `$trace.enable("TRANSITION")`.
// Besides "TRANSITION", you can also enable tracing for : "RESOLVE", "HOOK", "INVOKE", "UIVIEW", "VIEWCONFIG"
var traceRunBlock = ['$trace', ɵ1];
exports.sampleAppModuleAngularJS.run(traceRunBlock);
//# sourceMappingURL=angularJSModule.js.map

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var PrefsComponent = /** @class */ (function () {
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
exports.PrefsComponent = PrefsComponent;
//# sourceMappingURL=prefs.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(3);
var i1 = __webpack_require__(11);
var i2 = __webpack_require__(16);
var i3 = __webpack_require__(25);
var styles_UIView = [];
var RenderType_UIView = i0.ɵcrt({ encapsulation: 2, styles: styles_UIView, data: {} });
exports.RenderType_UIView = RenderType_UIView;
function View_UIView_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_UIView_2(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0), (_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_UIView_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { _componentTarget: 0 }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, [[1, 3], ["componentTarget", 2]], null, 0, null, View_UIView_1)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UIView_2)), i0.ɵdid(5, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co._componentRef; _ck(_v, 5, 0, currVal_0); }, null); }
exports.View_UIView_0 = View_UIView_0;
function View_UIView_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "ui-view", [], null, null, null, View_UIView_0, RenderType_UIView)), i0.ɵdid(1, 245760, null, 0, i2.UIView, [i3.UIRouter, "UIView.PARENT_INJECT", i0.ViewContainerRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_UIView_Host_0 = View_UIView_Host_0;
var UIViewNgFactory = i0.ɵccf("ui-view, [ui-view]", i2.UIView, View_UIView_Host_0, { name: "name", _name: "ui-view" }, {}, ["*"]);
exports.UIViewNgFactory = UIViewNgFactory;


/***/ })

},[126]);
//# sourceMappingURL=sampleapp.js.map