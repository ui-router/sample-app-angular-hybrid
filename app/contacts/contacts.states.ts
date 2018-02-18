import {Ng2StateDeclaration} from "@uirouter/angular";

import {Contact} from "./contact.component";
import {Contacts} from "./contacts.component";
import {EditContact} from "./editContact.component";


// Resolve all the contacts.  The resolved contacts are injected into the controller.
resolveContacts.$inject = ['Contacts'];
export function resolveContacts(Contacts) {
  return Contacts.all();
}

/**
 * This state displays the contact list.
 * It also provides a nested ui-view (viewport) for child states to fill in.
 *
 * The contacts are fetched using a resolve.
 */
export const contactsState: Ng2StateDeclaration = {
  parent: 'app', // declares that 'contacts' is a child of 'app'
  name: "contacts",
  url: "/contacts",
  resolve: {
    contacts: resolveContacts
  },
  data: { requiresAuth: true },
  component: Contacts
};

resolveContact.$inject = ['Contacts', '$transition$'];
export function resolveContact(Contacts, $transition$) {
  return Contacts.get($transition$.params().contactId);
}

/**
 * This state displays a single contact.
 * The contact to display is fetched using a resolve, based on the `contactId` parameter.
 */
export const viewContactState: Ng2StateDeclaration = {
  name: 'contacts.contact',
  url: '/:contactId',
  resolve: {
    // Resolve the contact, based on the contactId parameter value.
    // The resolved contact is provided to the contactComponent's contact binding
    contact: resolveContact
  },
  component: Contact
};


/**
 * This state allows a user to edit a contact
 *
 * The contact data to edit is injected from the parent state's resolve.
 *
 * This state uses view targeting to replace the parent ui-view (which would normally be filled
 * by 'contacts.contact') with the edit contact template/controller
 */
export const editContactState: Ng2StateDeclaration = {
  name: 'contacts.contact.edit',
  url: '/edit',
  views: {
    // Relatively target the grand-parent-state's $default (unnamed) ui-view
    // This could also have been written using ui-view@state addressing: $default@contacts
    // Or, this could also have been written using absolute ui-view addressing: !$default.$default.$default
    '^.^.$default': {
      bindings: { pristineContact: "contact" },
      component: EditContact
    }
  }
};

export function resolvePristineContact() {
  return { name: {}, address: {} };
}
/**
 * This state allows a user to create a new contact
 *
 * The contact data to edit is injected into the component from the parent state's resolve.
 */
export const newContactState: Ng2StateDeclaration = {
  name: 'contacts.new',
  url: '/new',
  resolve: {
    pristineContact: resolvePristineContact
  },
  component: EditContact
};
