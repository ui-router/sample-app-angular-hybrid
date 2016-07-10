import {contactsState, editContactState, newContactState, viewContactState} from "./contacts.states";

export const CONTACTS_MODULE = {
  states: [contactsState, newContactState, viewContactState, editContactState]
};