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
 * This component renders details for a single contact
 *
 * A button messages the contact by linking to `mymessages.compose` state passing the email as a state parameter.
 * Another button edits the contact by linking to `contacts.contact.edit` state.
 */
var Contact = (function () {
    function Contact() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Contact.prototype, "contact", void 0);
    Contact = __decorate([
        core_1.Component({
            selector: 'contact',
            template: "\n    <div class=\"contact\">\n      <contact-detail [contact]=\"contact\"></contact-detail>\n    \n      <!-- This button has an ui-sref to the mymessages.compose state. The ui-sref provides the mymessages.compose\n           state with an non-url parameter, which is used as the initial message model -->\n      <button class=\"btn btn-primary\" uiSref=\"mymessages.compose\" [uiParams]=\"{ message: { to: contact.email } }\">\n        <i class=\"fa fa-envelope\"></i><span>Message</span>\n      </button>\n    \n      <!-- This button has a relative ui-sref to the contacts.contact.edit state. -->\n      <button class=\"btn btn-primary\" uiSref=\".edit\">\n        <i class=\"fa fa-pencil\"></i><span>Edit Contact</span>\n      </button>\n      <ui-view></ui-view>\n    </div>\n" }), 
        __metadata('design:paramtypes', [])
    ], Contact);
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=contact.component.js.map