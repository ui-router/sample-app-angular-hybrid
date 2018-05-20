import {FormsModule}   from '@angular/forms';
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {UIRouterUpgradeModule} from "@uirouter/angular-hybrid";

import {contactsState, editContactState, newContactState, viewContactState} from "./contacts.states";
import {ContactDetail} from "./contactDetail.component";
import {ContactList} from "./contactList.component";
import {Contact} from "./contact.component";
import {Contacts} from "./contacts.component";
import {EditContact} from "./editContact.component";

export let CONTACTS_STATES = [contactsState, newContactState, viewContactState, editContactState];

/** The NgModule for Contacts feature */
@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      UIRouterUpgradeModule.forChild({ states: CONTACTS_STATES }),
  ],
  declarations: [Contact, ContactDetail, ContactList, Contacts, EditContact],
})
class ContactsModule {}

export {ContactsModule};
