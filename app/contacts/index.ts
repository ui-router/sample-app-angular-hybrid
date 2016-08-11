import {contactsState, editContactState, newContactState, viewContactState} from "./contacts.states";
import {NgModule} from "@angular/core";
import {FormsModule}   from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import {Contact} from "./contact.component";
import {ContactDetail} from "./contactDetail.component";
import {ContactList} from "./contactList.component";
import {Contacts} from "./contacts.component";
import {EditContact} from "./editContact.component";
import {UIRouterModule} from "../bootstrap/uirouter";

export const CONTACTS_MODULE = {
  states: [contactsState, newContactState, viewContactState, editContactState]
};

@NgModule({
  imports: [BrowserModule, FormsModule, UIRouterModule],
  declarations: [Contact, ContactDetail, ContactList, Contacts, EditContact],
  entryComponents: [Contact, ContactDetail, ContactList, Contacts, EditContact],
})
export class ContactsModule {}
