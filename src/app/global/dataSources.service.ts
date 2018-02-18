import {SessionStorage} from "../util/sessionStorage"
import {AppConfig} from "./appConfig.service";
import { globalModule } from './global.module';

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
export class Contacts extends SessionStorage {
  static $inject = ['$http', '$timeout', '$q', 'AppConfig'];
  constructor($http, $timeout, $q, AppConfig: AppConfig) {
    // http://beta.json-generator.com/api/json/get/V1g6UwwGx
    super($http, $timeout, $q, "contacts", "data/contacts.json", AppConfig);
  }
}

/** A fake Folders REST client API */
export class Folders extends SessionStorage {
  static $inject = ['$http', '$timeout', '$q', 'AppConfig'];
  constructor($http, $timeout, $q, AppConfig) {
    super($http, $timeout, $q, 'folders', 'data/folders.json', AppConfig);
  }
}

export class Messages extends SessionStorage {
  static $inject = ['$http', '$timeout', '$q', 'AppConfig'];
  constructor($http, $timeout, $q, public AppConfig: AppConfig) {
    // http://beta.json-generator.com/api/json/get/VJl5GbIze
    super($http, $timeout, $q, 'messages', 'data/messages.json', AppConfig);
  }

  byFolder(folder) {
    let searchObject = { folder: folder._id };
    let toFromAttr = ["drafts", "sent"].indexOf(folder._id) !== -1 ? "from" : "to";
    searchObject[toFromAttr] = this.AppConfig.emailAddress;
    return this.search(searchObject);
  }
}

globalModule.service('Contacts', Contacts);
globalModule.service('Folders', Folders);
globalModule.service('Messages', Messages);
