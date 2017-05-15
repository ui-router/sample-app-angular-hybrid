webpackJsonp([0],{

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(71);
var common_1 = __webpack_require__(17);
var core_1 = __webpack_require__(8);
var angular_1 = __webpack_require__(33);
var contacts_states_1 = __webpack_require__(509);
var contactDetail_component_1 = __webpack_require__(507);
var contactList_component_1 = __webpack_require__(508);
var contact_component_1 = __webpack_require__(504);
var contacts_component_1 = __webpack_require__(505);
var editContact_component_1 = __webpack_require__(506);
var CONTACTS_STATES = [contacts_states_1.contactsState, contacts_states_1.newContactState, contacts_states_1.viewContactState, contacts_states_1.editContactState];
/** The NgModule for Contacts feature */
var ContactsModule = (function () {
    function ContactsModule() {
    }
    return ContactsModule;
}());
ContactsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.UIRouterModule.forChild({ states: CONTACTS_STATES })
        ],
        declarations: [contact_component_1.Contact, contactDetail_component_1.ContactDetail, contactList_component_1.ContactList, contacts_component_1.Contacts, editContact_component_1.EditContact],
    })
], ContactsModule);
exports.ContactsModule = ContactsModule;


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
/**
 * This component renders details for a single contact
 *
 * A button messages the contact by linking to `mymessages.compose` state passing the email as a state parameter.
 * Another button edits the contact by linking to `contacts.contact.edit` state.
 */
var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Contact.prototype, "contact", void 0);
Contact = __decorate([
    core_1.Component({
        selector: 'contact',
        template: "\n    <div class=\"contact\">\n      <contact-detail [contact]=\"contact\"></contact-detail>\n    \n      <!-- This button has an ui-sref to the mymessages.compose state. The ui-sref provides the mymessages.compose\n           state with an non-url parameter, which is used as the initial message model -->\n      <button class=\"btn btn-primary\" uiSref=\"mymessages.compose\" [uiParams]=\"{ message: { to: contact.email } }\">\n        <i class=\"fa fa-envelope\"></i><span>Message</span>\n      </button>\n    \n      <!-- This button has a relative ui-sref to the contacts.contact.edit state. -->\n      <button class=\"btn btn-primary\" uiSref=\".edit\">\n        <i class=\"fa fa-pencil\"></i><span>Edit Contact</span>\n      </button>\n      <ui-view></ui-view>\n    </div>\n"
    })
], Contact);
exports.Contact = Contact;


/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
/**
 * This component renders the contacts submodule.
 *
 * On the left is the list of contacts.
 * On the right is the ui-view viewport where contact details appear.
 */
var Contacts = (function () {
    function Contacts() {
    }
    return Contacts;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Contacts.prototype, "contacts", void 0);
Contacts = __decorate([
    core_1.Component({
        selector: 'contacts',
        template: "\n    <div class=\"my-contacts flex-h\">\n    \n      <contact-list [contacts]=\"contacts\" class=\"flex nogrow\"></contact-list>\n    \n      <div ui-view>\n        <!-- This default content is displayed when the ui-view is not filled in by a child state -->\n        <h4 style=\"margin: 1em 2em;\">Select a contact</h4>\n      </div>\n    </div>\n"
    })
], Contacts);
exports.Contacts = Contacts;


/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(16);
var angular_1 = __webpack_require__(33);
var core_1 = __webpack_require__(6);
var core_2 = __webpack_require__(8);
/**
 * The EditContact component
 *
 * This component is used by both `contacts.contact.edit` and `contacts.new` states.
 *
 * The component makes a copy of the contqct data for editing.
 * The new copy and original (pristine) copy are used to determine if the contact is "dirty" or not.
 * If the user navigates to some other state while the contact is "dirty", the `uiCanExit` component
 * hook asks the user to confirm navigation away, losing any edits.
 *
 * The Delete Contact button is wired to the `remove` method, which:
 * - asks for confirmation from the user
 * - deletes the resource from REST API
 * - navigates back to the contacts grandparent state using relative addressing `^.^`
 *   the `reload: true` option re-fetches the contacts list from the server
 *
 * The Save Contact button is wired to the `save` method which:
 * - saves the REST resource (PUT or POST, depending)
 * - navigates back to the parent state using relative addressing `^`.
 *   when editing an existing contact, this returns to the `contacts.contact` "view contact" state
 *   when creating a new contact, this returns to the `contacts` list.
 *   the `reload: true` option re-fetches the contacts resolve data from the server
 */
var EditContact = (function () {
    // Note: you can inject StateService from @uirouter/core
    function EditContact($state, DialogService, Contacts, view, $trans) {
        this.$state = $state;
        this.DialogService = DialogService;
        this.Contacts = Contacts;
        this.$trans = $trans;
        this.state = view && view.context && view.context.name;
    }
    EditContact.prototype.ngOnInit = function () {
        var _this = this;
        // Make an editable copy of the pristineContact
        this.contact = angular.copy(this.pristineContact);
        this.deregister = this.$trans.onBefore({ exiting: this.state }, function () { return _this.uiCanExit(); });
    };
    EditContact.prototype.ngOnDestroy = function () {
        if (this.deregister)
            this.deregister();
    };
    EditContact.prototype.uiCanExit = function () {
        if (this.canExit || angular.equals(this.contact, this.pristineContact)) {
            return true;
        }
        var message = 'You have unsaved changes to this contact.';
        var question = 'Navigate away and lose changes?';
        return this.DialogService.confirm(message, question);
    };
    /** Ask for confirmation, then delete the contact, then go to the grandparent state ('contacts') */
    EditContact.prototype.remove = function (contact) {
        var _this = this;
        this.DialogService.confirm("Delete contact: " + contact.name.first + " " + contact.name.last)
            .then(function () { return _this.Contacts.remove(contact); })
            .then(function () { return _this.canExit = true; })
            .then(function () { return _this.$state.go("^.^", null, { reload: true }); });
    };
    /** Save the contact, then go to the parent state (either 'contacts' or 'contacts.contact') */
    EditContact.prototype.save = function (contact) {
        var _this = this;
        this.Contacts.save(contact)
            .then(function () { return _this.canExit = true; })
            .then(function () { return _this.$state.go("^", null, { reload: true }); });
    };
    return EditContact;
}());
__decorate([
    core_2.Input(),
    __metadata("design:type", Object)
], EditContact.prototype, "pristineContact", void 0);
EditContact = __decorate([
    core_2.Component({
        selector: 'edit-contact',
        template: "\n    <div class=\"contact\">\n      <div class=\"details\">\n        <div><label>First</label><input type=\"text\" [(ngModel)]=\"contact.name.first\"></div>\n        <div><label>Last</label><input type=\"text\" [(ngModel)]=\"contact.name.last\"></div>\n        <div><label>Company</label><input type=\"text\" [(ngModel)]=\"contact.company\"></div>\n        <div><label>Age</label><input type=\"text\" [(ngModel)]=\"contact.age\"></div>\n        <div><label>Phone</label><input type=\"text\" [(ngModel)]=\"contact.phone\"></div>\n        <div><label>Email</label><input type=\"text\" [(ngModel)]=\"contact.email\"></div>\n        <div><label>Street</label><input type=\"text\" [(ngModel)]=\"contact.address.street\"></div>\n        <div><label>City</label><input type=\"text\" [(ngModel)]=\"contact.address.city\"> </div>\n        <div><label>State</label><input type=\"text\" [(ngModel)]=\"contact.address.state\"></div>\n        <div><label>Zip</label><input type=\"text\" [(ngModel)]=\"contact.address.zip\"></div>\n        <div><label>Image</label><input type=\"text\" [(ngModel)]=\"contact.picture\"></div>\n      </div>\n    \n      <hr>\n    \n      <div>\n        <!-- This button's ui-sref relatively targets the parent state, i.e., contacts.contact -->\n        <button class=\"btn btn-primary\" uiSref=\"^\"><i class=\"fa fa-close\"></i><span>Cancel</span></button>\n        <button class=\"btn btn-primary\" (click)=\"save(contact)\"><i class=\"fa fa-save\"></i><span>Save</span></button>\n        <button class=\"btn btn-primary\" (click)=\"remove(contact)\"><i class=\"fa fa-close\"></i><span>Delete</span></button>\n      </div>\n    </div>\n"
    }),
    __param(1, core_2.Inject('DialogService')),
    __param(2, core_2.Inject('Contacts')),
    __param(3, core_2.Optional()), __param(3, core_2.Inject(angular_1.UIView.PARENT_INJECT)),
    __metadata("design:paramtypes", [core_1.StateService, Object, Object, Object, core_1.TransitionService])
], EditContact);
exports.EditContact = EditContact;


/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
/**
 * This component renders a read only view of the details for a single contact.
 */
var ContactDetail = (function () {
    function ContactDetail() {
    }
    return ContactDetail;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ContactDetail.prototype, "contact", void 0);
ContactDetail = __decorate([
    core_1.Component({
        selector: 'contact-detail',
        template: "\n  <div class=\"flex-h\">\n    <div class=\"details\">\n      <h3>{{contact.name.first}} {{contact.name.last}}</h3>\n      <div><label>Company</label><div>{{contact.company}}</div></div>\n      <div><label>Age</label><div>{{contact.age}}</div></div>\n      <div><label>Phone</label><div>{{contact.phone}}</div></div>\n      <div><label>Email</label><div>{{contact.email}}</div></div>\n      <div class=\"flex-h\">\n        <label>Address</label>\n        <div>{{contact.address.street}}<br>\n              {{contact.address.city}}, {{contact.address.state}} {{contact.address.zip}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex nogrow\">\n      <img [src]=\"contact.picture\"/>\n    </div>\n  </div>\n"
    })
], ContactDetail);
exports.ContactDetail = ContactDetail;


/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
/**
 * This component renders a list of contacts.
 *
 * At the top is a "new contact" button.
 * Each list item is a clickable link to the `contacts.contact` details substate
 */
var ContactList = (function () {
    function ContactList() {
    }
    return ContactList;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ContactList.prototype, "contacts", void 0);
ContactList = __decorate([
    core_1.Component({
        selector: 'contact-list',
        template: "\n  <ul class=\"selectlist list-unstyled\">\n    <li>\n      <!-- This link is a relative ui-sref to the contacts.new state. -->\n      <a uiSref=\".new\">\n        <button class=\"btn btn-primary\">\n          <i class=\"fa fa-pencil\"></i><span>New Contact</span>\n        </button>\n      </a>\n    </li>\n\n    <li>&nbsp;</li>\n\n    <!-- Highlight the selected contact:\n        When the current state matches the ui-sref's state (and its parameters)\n        ui-sref-active applies the 'selected' class to the li element -->\n    <li *ngFor=\"let contact of contacts\" >\n      <a uiSref=\".contact\" [uiParams]=\"{contactId: contact._id}\" uiSrefActive=\"selected\">\n        {{contact.name.first}} {{contact.name.last}}\n      </a>\n    </li>\n  </ul>\n"
    })
], ContactList);
exports.ContactList = ContactList;


/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contact_component_1 = __webpack_require__(504);
var contacts_component_1 = __webpack_require__(505);
var editContact_component_1 = __webpack_require__(506);
/**
 * This state displays the contact list.
 * It also provides a nested ui-view (viewport) for child states to fill in.
 *
 * The contacts are fetched using a resolve.
 */
exports.contactsState = {
    parent: 'app',
    name: "contacts",
    url: "/contacts",
    resolve: {
        // Resolve all the contacts.  The resolved contacts are injected into the controller.
        contacts: function (Contacts) { return Contacts.all(); }
    },
    data: { requiresAuth: true },
    component: contacts_component_1.Contacts
};
/**
 * This state displays a single contact.
 * The contact to display is fetched using a resolve, based on the `contactId` parameter.
 */
exports.viewContactState = {
    name: 'contacts.contact',
    url: '/:contactId',
    resolve: {
        // Resolve the contact, based on the contactId parameter value.
        // The resolved contact is provided to the contactComponent's contact binding
        contact: function (Contacts, $transition$) { return Contacts.get($transition$.params().contactId); }
    },
    component: contact_component_1.Contact
};
/**
 * This state allows a user to edit a contact
 *
 * The contact data to edit is injected from the parent state's resolve.
 *
 * This state uses view targeting to replace the parent ui-view (which would normally be filled
 * by 'contacts.contact') with the edit contact template/controller
 */
exports.editContactState = {
    name: 'contacts.contact.edit',
    url: '/edit',
    views: {
        // Relatively target the grand-parent-state's $default (unnamed) ui-view
        // This could also have been written using ui-view@state addressing: $default@contacts
        // Or, this could also have been written using absolute ui-view addressing: !$default.$default.$default
        '^.^.$default': {
            bindings: { pristineContact: "contact" },
            component: editContact_component_1.EditContact
        }
    }
};
/**
 * This state allows a user to create a new contact
 *
 * The contact data to edit is injected into the component from the parent state's resolve.
 */
exports.newContactState = {
    name: 'contacts.new',
    url: '/new',
    resolve: {
        pristineContact: function () { return ({ name: {}, address: {} }); }
    },
    component: editContact_component_1.EditContact
};


/***/ })

});
//# sourceMappingURL=0.js.map