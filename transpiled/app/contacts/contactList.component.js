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
 * This component renders a list of contacts.
 *
 * At the top is a "new contact" button.
 * Each list item is a clickable link to the `contacts.contact` details substate
 */
var ContactList = (function () {
    function ContactList() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ContactList.prototype, "contacts", void 0);
    ContactList = __decorate([
        core_1.Component({
            selector: 'contact-list',
            template: "\n  <ul class=\"selectlist list-unstyled\">\n    <li>\n      <!-- This link is a relative ui-sref to the contacts.new state. -->\n      <a uiSref=\".new\">\n        <button class=\"btn btn-primary\">\n          <i class=\"fa fa-pencil\"></i><span>New Contact</span>\n        </button>\n      </a>\n    </li>\n\n    <li>&nbsp;</li>\n\n    <!-- Highlight the selected contact:\n        When the current state matches the ui-sref's state (and its parameters)\n        ui-sref-active applies the 'selected' class to the li element -->\n    <li *ngFor=\"let contact of contacts\" >\n      <a uiSref=\".contact\" [uiParams]=\"{contactId: contact._id}\" uiSrefActive=\"selected\">\n        {{contact.name.first}} {{contact.name.last}}\n      </a>\n    </li>\n  </ul>\n" }), 
        __metadata('design:paramtypes', [])
    ], ContactList);
    return ContactList;
}());
exports.ContactList = ContactList;
//# sourceMappingURL=contactList.component.js.map