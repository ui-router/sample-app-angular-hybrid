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
var core_1 = require("@angular/core");
/**
 * This component renders a read only view of the details for a single contact.
 */
var ContactDetail = (function () {
    function ContactDetail() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ContactDetail.prototype, "contact", void 0);
    ContactDetail = __decorate([
        core_1.Component({
            selector: 'contact-detail',
            template: "\n  <div class=\"flex-h\">\n    <div class=\"details\">\n      <h3>{{contact.name.first}} {{contact.name.last}}</h3>\n      <div><label>Company</label><div>{{contact.company}}</div></div>\n      <div><label>Age</label><div>{{contact.age}}</div></div>\n      <div><label>Phone</label><div>{{contact.phone}}</div></div>\n      <div><label>Email</label><div>{{contact.email}}</div></div>\n      <div class=\"flex-h\">\n        <label>Address</label>\n        <div>{{contact.address.street}}<br>\n              {{contact.address.city}}, {{contact.address.state}} {{contact.address.zip}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex nogrow\">\n      <img [src]=\"contact.picture\"/>\n    </div>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ContactDetail);
    return ContactDetail;
}());
exports.ContactDetail = ContactDetail;
//# sourceMappingURL=contactDetail.component.js.map