"use strict";
// import { NgModule } from '@angular/core';
var router_1 = require("@angular/router");
var agencies_add_component_1 = require("./agencias-add/agencies-add.component");
var agencies_list_component_1 = require("./agencies-list/agencies-list.component");
var agency_update_component_1 = require("./agency-update/agency-update.component");
var agency_detail_component_1 = require("./agency-detail/agency-detail.component");
var routes = [
    { path: '', component: agencies_list_component_1.AgenciesListComponent, pathMatch: 'full' },
    {
        path: 'list',
        component: agencies_list_component_1.AgenciesListComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Agencies List' }
    },
    {
        path: 'detail/:id',
        component: agency_detail_component_1.AgencyDetailComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Agency Details' }
    },
    {
        path: 'add',
        component: agencies_add_component_1.AgenciesAddComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Agency' },
    },
    {
        path: 'update/:id',
        component: agency_update_component_1.AgencyUpdateComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Update Agency' }
    }
];
exports.AgenciesRoutingModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=agencies-routing.module.js.map