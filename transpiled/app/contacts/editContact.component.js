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
var angular = require("angular");
var ui_router_ng2_1 = require("ui-router-ng2");
var core_1 = require("@angular/core");
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditContact.prototype, "pristineContact", void 0);
    EditContact = __decorate([
        core_1.Component({
            selector: 'edit-contact',
            template: "\n    <div class=\"contact\">\n      <div class=\"details\">\n        <div><label>First</label><input type=\"text\" [(ngModel)]=\"contact.name.first\"></div>\n        <div><label>Last</label><input type=\"text\" [(ngModel)]=\"contact.name.last\"></div>\n        <div><label>Company</label><input type=\"text\" [(ngModel)]=\"contact.company\"></div>\n        <div><label>Age</label><input type=\"text\" [(ngModel)]=\"contact.age\"></div>\n        <div><label>Phone</label><input type=\"text\" [(ngModel)]=\"contact.phone\"></div>\n        <div><label>Email</label><input type=\"text\" [(ngModel)]=\"contact.email\"></div>\n        <div><label>Street</label><input type=\"text\" [(ngModel)]=\"contact.address.street\"></div>\n        <div><label>City</label><input type=\"text\" [(ngModel)]=\"contact.address.city\"> </div>\n        <div><label>State</label><input type=\"text\" [(ngModel)]=\"contact.address.state\"></div>\n        <div><label>Zip</label><input type=\"text\" [(ngModel)]=\"contact.address.zip\"></div>\n        <div><label>Image</label><input type=\"text\" [(ngModel)]=\"contact.picture\"></div>\n      </div>\n    \n      <hr>\n    \n      <div>\n        <!-- This button's ui-sref relatively targets the parent state, i.e., contacts.contact -->\n        <button class=\"btn btn-primary\" uiSref=\"^\"><i class=\"fa fa-close\"></i><span>Cancel</span></button>\n        <button class=\"btn btn-primary\" (click)=\"save(contact)\"><i class=\"fa fa-save\"></i><span>Save</span></button>\n        <button class=\"btn btn-primary\" (click)=\"remove(contact)\"><i class=\"fa fa-close\"></i><span>Delete</span></button>\n      </div>\n    </div>\n" }),
        __param(0, core_1.Inject('$state')),
        __param(1, core_1.Inject('DialogService')),
        __param(2, core_1.Inject('Contacts')),
        __param(3, core_1.Optional()),
        __param(3, core_1.Inject(ui_router_ng2_1.UIView.PARENT_INJECT)), 
        __metadata('design:paramtypes', [Object, Object, Object, Object, ui_router_ng2_1.TransitionService])
    ], EditContact);
    return EditContact;
}());
exports.EditContact = EditContact;
//# sourceMappingURL=editContact.component.js.map