import {UIROUTER_DIRECTIVES} from "ui-router-ng2";
import {Component, Input} from "@angular/core";

/**
 * This component renders a list of contacts.
 * 
 * At the top is a "new contact" button.
 * Each list item is a clickable link to the `contacts.contact` details substate
 */
@Component({
  selector: 'contact-list',
  directives: [UIROUTER_DIRECTIVES],
  template: `
  <ul class="selectlist list-unstyled">
    <li>
      <!-- This link is a relative ui-sref to the contacts.new state. -->
      <a uiSref=".new">
        <button class="btn btn-primary">
          <i class="fa fa-pencil"></i><span>New Contact</span>
        </button>
      </a>
    </li>

    <li>&nbsp;</li>

    <!-- Highlight the selected contact:
        When the current state matches the ui-sref's state (and its parameters)
        ui-sref-active applies the 'selected' class to the li element -->
    <li *ngFor="#contact of contacts" >
      <a uiSref=".contact" [uiParams]="{contactId: contact._id}" uiSrefActive="selected">
        {{contact.name.first}} {{contact.name.last}}
      </a>
    </li>
  </ul>
`})
export class ContactList {
  @Input() contacts;
}
