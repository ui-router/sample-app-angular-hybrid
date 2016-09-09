"use strict";
var ui_router_ng2_1 = require("ui-router-ng2");
var core_1 = require("@angular/core");
function addLazyLoadHook(transitionService) {
    transitionService.onBefore({ to: function (state) { return !!state.lazyLoad; } }, lazyHook);
    function lazyHook(transition) {
        var toState = transition.to();
        function retry() {
            if (transition.options().source === 'url') {
                transition.router.urlRouter.sync();
                return;
            }
            var state = transition.targetState().name();
            var params = transition.params();
            var options = transition.options();
            return transition.router.stateService.target(state, params, options);
        }
        return toState.lazyLoad(transition).then(retry);
    }
}
exports.addLazyLoadHook = addLazyLoadHook;
function loadNg2Module(path) {
    return function (transition) {
        // Get the parent NgModule's Angular 2 injector from the resolve UIInjector
        return transition.injector().getAsync(ui_router_ng2_1.NG2_INJECTOR_TOKEN)
            .then(function (ng2Injector) { return ng2Injector.get(core_1.NgModuleFactoryLoader).load(path).then(function (factory) { return [ng2Injector, factory]; }); })
            .then(function (_a) {
            var ng2Injector = _a[0], factory = _a[1];
            return factory.create(ng2Injector);
        })
            .then(function (module) { return applyNewModule(transition, module); });
    };
}
exports.loadNg2Module = loadNg2Module;
function applyNewModule(transition, ng2Module) {
    var registry = transition.router.stateRegistry;
    var placeholderState = transition.to();
    var newStates = ng2Module.injector.get(ui_router_ng2_1.UIROUTER_STATES_TOKEN);
    registry.deregister(placeholderState);
    newStates.forEach(function (state) { return registry.register(state); });
    // Apply the Lazy Loaded Module's Injector to the newly loaded state tree
    // The Injector will be used to load Components and Providers for the NgModule
    var newlyLoadedState = registry.get(placeholderState.name);
    var moduleInjectorResolvable = new ui_router_ng2_1.Resolvable(ui_router_ng2_1.NG2_INJECTOR_TOKEN, function () { return ng2Module.injector; }, null, null, ng2Module.injector);
    newlyLoadedState.$$state().resolvables.push(moduleInjectorResolvable);
}
//# sourceMappingURL=lazy.js.map