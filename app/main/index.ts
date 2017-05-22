import { loadNg1AppModule, ngmodule } from '../bootstrap/angularJSModule';

import { otherwiseConfigBlock, traceRunBlock } from './app.config';
import { appState, homeState, loginState, welcomeState } from './app.states';

import { app } from './app.component';
import { home } from './home.component';
import { login } from './login.component';
import { welcome } from './welcome.component';

const mainAppModule = {
  components: { app, welcome, login, home },
  states: [ appState, homeState, loginState, welcomeState ],
  configBlocks: [ otherwiseConfigBlock ],
  runBlocks: [ traceRunBlock ]
};

loadNg1AppModule(ngmodule, mainAppModule);
