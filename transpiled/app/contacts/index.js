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
var ui_router_ng2_1 = require("ui-router-ng2");
var contacts_states_1 = require("./contacts.states");
var contactDetail_component_1 = require("./contactDetail.component");
var contactList_component_1 = require("./contactList.component");
/** The NgModule for Contacts feature */
var ContactsModule = (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        ui_router_ng2_1.UIRouterModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [contactList_component_1.ContactList, contactDetail_component_1.ContactDetail],
            states: [contacts_states_1.contactsState, contacts_states_1.newContactState, contacts_states_1.viewContactState, contacts_states_1.editContactState]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactsModule);
    return ContactsModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContactsModule;
//# sourceMappingURL=index.js.map