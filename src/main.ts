import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SampleAppModuleAngular } from './AngularModule';
import { sampleAppModuleAngularJS } from "./AngularJSModule";

// Manually bootstrap the Angular app
platformBrowserDynamic().bootstrapModule(SampleAppModuleAngular).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, [sampleAppModuleAngularJS.name]);
});
