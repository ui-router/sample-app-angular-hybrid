"use strict";
var BLANK_MODULE = {
    states: [], components: {}, directives: {}, services: {}, filters: {}, configBlocks: [], runBlocks: []
};
/**
 * Register each module's states, directives, components, filters, services, and config/run blocks
 *
 * @param ngmodule the `angular.module()` object
 * @param appModule the feature module consisting of components, states, services, etc
 */
exports.loadNg1Module = function (ngmodule, appModule) {
    var module = Object.assign({}, BLANK_MODULE, appModule);
    ngmodule.config(['$stateProvider', function ($stateProvider) { return module.states.forEach(function (state) { return $stateProvider.state(state); }); }]);
    Object.keys(module.components).forEach(function (name) { return ngmodule.component(name, module.components[name]); });
    Object.keys(module.directives).forEach(function (name) { return ngmodule.directive(name, module.directives[name]); });
    Object.keys(module.services).forEach(function (name) { return ngmodule.service(name, module.services[name]); });
    Object.keys(module.filters).forEach(function (name) { return ngmodule.filter(name, module.filters[name]); });
    module.configBlocks.forEach(function (configBlock) { return ngmodule.config(configBlock); });
    module.runBlocks.forEach(function (runBlock) { return ngmodule.run(runBlock); });
};
//# sourceMappingURL=loadNg1Module.js.map