"use strict";
// import { NgModule } from '@angular/core';
var router_1 = require("@angular/router");
var agent_add_component_1 = require("./agents-add/agent-add.component");
var agents_list_component_1 = require("./agents-list/agents-list.component");
var agent_update_component_1 = require("./agent-update/agent-update.component");
var agent_detail_component_1 = require("./agent-detail/agent-detail.component");
var routes = [
    { path: '', component: agents_list_component_1.AgentsListComponent, pathMatch: 'full' },
    {
        path: 'list',
        component: agents_list_component_1.AgentsListComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Agents List' }
    },
    {
        path: 'detail/:id',
        component: agent_detail_component_1.AgentDetailComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Agent Details' }
    },
    {
        path: 'add',
        component: agent_add_component_1.AgentsAddComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Add Agent' },
    },
    {
        path: 'update/:id',
        component: agent_update_component_1.AgentUpdateComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Update Agent' }
    }
];
exports.AgentsRoutingModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=agents-routing.module.js.map