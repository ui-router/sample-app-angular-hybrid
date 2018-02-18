import * as angular from "angular";
import { globalModule } from './global.module';

/**
 * This service stores and retrieves user preferences in session storage
 */
export class AppConfig {
  sort: string = '+date';
  emailAddress: string = undefined;
  restDelay: number = 100;

  constructor() {
    this.load();
  }

  load() {
    try {
      return angular.extend(this, angular.fromJson(sessionStorage.getItem("appConfig")))
    } catch (Error) { }

    return this;
  }

  save() {
    sessionStorage.setItem("appConfig", angular.toJson(angular.extend({}, this)));
  }
}

globalModule.service('AppConfig', AppConfig);
