"use strict";
var User = (function () {
    function User(id, first_name, last_name, email, enabled, roles, phone, password, password_confirmation, agency_id, is_agent) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.enabled = enabled;
        this.roles = [];
        this.roles.push(roles);
        this.phone = phone;
        this.password = password;
        this.agency_id = agency_id;
        this.password_confirmation = password_confirmation;
        this.is_agent = is_agent;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map