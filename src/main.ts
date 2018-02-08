////////////// HYBRID BOOTSTRAP ///////////////
import { Injector } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SampleAppModuleAngular } from './angularModule';
import { sampleAppModuleAngularJS } from "./angularJSModule";

// Manually bootstrap the Angular app
platformBrowserDynamic().bootstrapModule(SampleAppModuleAngular).then(platformRef => {
  const injector: Injector = platformRef.injector;
  const upgrade = injector.get(UpgradeModule) as UpgradeModule;

  // The DOM must be already be available
  upgrade.bootstrap(document.body, [sampleAppModuleAngularJS.name]);
});
