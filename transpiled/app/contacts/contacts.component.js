"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
/**
 * This component renders the contacts submodule.
 *
 * On the left is the list of contacts.
 * On the right is the ui-view viewport where contact details appear.
 */
var Contacts = (function () {
    function Contacts() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Contacts.prototype, "contacts", void 0);
    Contacts = __decorate([
        core_1.Component({
            selector: 'contacts',
            template: "\n    <div class=\"my-contacts flex-h\">\n    \n      <contact-list [contacts]=\"contacts\" class=\"flex nogrow\"></contact-list>\n    \n      <div ui-view>\n        <!-- This default content is displayed when the ui-view is not filled in by a child state -->\n        <h4 style=\"margin: 1em 2em;\">Select a contact</h4>\n      </div>\n    </div>\n" }), 
        __metadata('design:paramtypes', [])
    ], Contacts);
    return Contacts;
}());
exports.Contacts = Contacts;
//# sourceMappingURL=contacts.component.js.map