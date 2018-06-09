"use strict";
// import { NgModule } from '@angular/core';
var router_1 = require("@angular/router");
var user_add_component_1 = require("./users-add/user-add.component");
var users_list_component_1 = require("./users-list/users-list.component");
var user_update_component_1 = require("./user-update/user-update.component");
var profile_component_1 = require("../profile/profile.component");
var user_detail_component_1 = require("./user-detail/user-detail.component");
var routes = [
    { path: '', component: users_list_component_1.UsersListComponent, pathMatch: 'full' },
    {
        path: 'list',
        component: users_list_component_1.UsersListComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Users List' }
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Profile' }
    },
    {
        path: 'detail/:id',
        component: user_detail_component_1.UserDetailComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'User Details' }
    },
    {
        path: 'add',
        component: user_add_component_1.UsersAddComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Add User' },
    },
    {
        path: 'update/:id',
        component: user_update_component_1.UserUpdateComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Update User' }
    }
];
exports.UsersRoutingModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=users-routing.module.js.map