import {FormsModule}   from '@angular/forms';
import {CommonModule} from "@angular/common";
import {UIRouterModule} from "ui-router-ng2";

import {contactsState, editContactState, newContactState, viewContactState} from "./contacts.states";
import {ContactDetail} from "./contactDetail.component";
import {ContactList} from "./contactList.component";

/** The NgModule for Contacts feature */
@UIRouterModule({
  imports: [CommonModule, FormsModule],
  declarations: [ContactList, ContactDetail], // non routed components
  states: [contactsState, newContactState, viewContactState, editContactState]
})
export default class ContactsModule {}
