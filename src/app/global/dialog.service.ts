import * as angular from "angular";
import { globalModule } from './global.module';

export class DialogService {
  confirm;

  static $inject = ['$document', '$compile', '$rootScope'];
  constructor($document, $compile, $rootScope) {
    let body = $document.find("body");
    let elem = angular.element("<div class='dialog' dialog='opts'></div>");

    this.confirm = (message, details = "Are you sure?", yesMsg = "Yes", noMsg = "No") => {
      $compile(elem)(angular.extend($rootScope.$new(), {message, details, yesMsg, noMsg}));
      body.append(elem);
      return elem.data("promise").finally(() => elem.removeClass('active').remove());
    }
  }
}

globalModule.service('DialogService', DialogService);
