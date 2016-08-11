import {Component, Input} from "@angular/core";

/**
 * This component renders a read only view of the details for a single contact.
 */
@Component({
  selector: 'contact-detail',
  template: `
  <div class="flex-h">
    <div class="details">
      <h3>{{contact.name.first}} {{contact.name.last}}</h3>
      <div><label>Company</label><div>{{contact.company}}</div></div>
      <div><label>Age</label><div>{{contact.age}}</div></div>
      <div><label>Phone</label><div>{{contact.phone}}</div></div>
      <div><label>Email</label><div>{{contact.email}}</div></div>
      <div class="flex-h">
        <label>Address</label>
        <div>{{contact.address.street}}<br>
              {{contact.address.city}}, {{contact.address.state}} {{contact.address.zip}}
        </div>
      </div>
    </div>

    <div class="flex nogrow">
      <img [src]="contact.picture"/>
    </div>
  </div>
`
})
export class ContactDetail {
  @Input() contact;
}
