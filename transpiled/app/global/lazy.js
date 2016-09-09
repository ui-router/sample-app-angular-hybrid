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
function createNg2Module(transition, ng2ModuleFactory) {
    var placeholderState = transition.to();
    var parentNg2Injector = placeholderState.data.$Ng2Injector;
    return ng2ModuleFactory.create(parentNg2Injector);
}
function applyNewStates(transition, ng2Module) {
    var registry = transition.router.stateRegistry;
    var placeholderState = transition.to();
    var newStates = ng2Module.injector.get(ui_router_ng2_1.UIROUTER_STATES_TOKEN);
    registry.deregister(placeholderState);
    newStates.forEach(function (state) { return registry.register(state); });
}
function loadNg2Module(path) {
    return function (transition) {
        var ng1Injector = transition.injector();
        // Get the Angular 2 Root injector (provided by ui-router-ng1-to-ng2)
        var ng2Injector = ng1Injector.get("$Ng2Injector");
        var factoryLoader = ng2Injector.get(core_1.NgModuleFactoryLoader);
        return factoryLoader.load(path)
            .then(function (factory) { return createNg2Module(transition, factory); })
            .then(function (module) { return applyNewStates(transition, module); });
    };
}
exports.loadNg2Module = loadNg2Module;
//# sourceMappingURL=lazy.js.map