import {ngmodule, loadNg1AppModule} from "../bootstrap/ngmodule";

import {prefs} from "./prefs.component";
import {prefsState} from "./prefs.states";

const prefsAppModule = {
  components: {prefs},
  states: [prefsState]
};

loadNg1AppModule(ngmodule, prefsAppModule);