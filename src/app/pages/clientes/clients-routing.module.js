"use strict";
// import { NgModule } from '@angular/core';
var router_1 = require("@angular/router");
var clients_add_component_1 = require("./clients-add/clients-add.component");
var clients_list_component_1 = require("./clients-list/clients-list.component");
var client_update_component_1 = require("./client-update/client-update.component");
var client_detail_component_1 = require("./client-detail/client-detail.component");
var routes = [
    { path: '', component: clients_list_component_1.ClientsListComponent, pathMatch: 'full' },
    {
        path: 'list',
        component: clients_list_component_1.ClientsListComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Clients List' }
    },
    {
        path: 'detail/:id',
        component: client_detail_component_1.ClientDetailComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Client Details' }
    },
    {
        path: 'add',
        component: clients_add_component_1.ClientsAddComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Client' },
    },
    {
        path: 'update/:id',
        component: client_update_component_1.ClientUpdateComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Update Client' }
    }
];
exports.ClientsRoutingModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=clients-routing.module.js.map