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
var forms_1 = require('@angular/forms');
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var ui_router_ng2_1 = require("ui-router-ng2");
var contacts_states_1 = require("./contacts.states");
var contactDetail_component_1 = require("./contactDetail.component");
var contactList_component_1 = require("./contactList.component");
var contact_component_1 = require("./contact.component");
var contacts_component_1 = require("./contacts.component");
var editContact_component_1 = require("./editContact.component");
var CONTACTS_STATES = [contacts_states_1.contactsState, contacts_states_1.newContactState, contacts_states_1.viewContactState, contacts_states_1.editContactState];
/** The NgModule for Contacts feature */
var ContactsModule = (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ui_router_ng2_1.UIRouterModule.forChild({ states: CONTACTS_STATES })
            ],
            declarations: [contact_component_1.Contact, contactDetail_component_1.ContactDetail, contactList_component_1.ContactList, contacts_component_1.Contacts, editContact_component_1.EditContact],
        }), 
        __metadata('design:paramtypes', [])
    ], ContactsModule);
    return ContactsModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContactsModule;
//# sourceMappingURL=index.js.map