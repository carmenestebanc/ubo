"use strict";
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
var blank_component_1 = require("./shared-components/blank/blank.component");
var search_component_1 = require("./shared-components/search/search.component");
exports.routes = [
    {
        path: '',
        component: pages_component_1.PagesComponent,
        children: [
            { path: '', redirectTo: 'agencies', pathMatch: 'full' },
            //{ path: 'categories', loadChildren: 'app/pages/categorias/categorias.module#CategoriasModule', data: { breadcrumb: 'Categories' } },
            { path: 'agents', loadChildren: 'app/pages/agents/agents.module#AgentsModule', data: { breadcrumb: 'Agents' } },
            { path: 'agencies', loadChildren: 'app/pages/agencias/agency.module#AgencyModule', data: { breadcrumb: 'Agencies' } },
            { path: 'clients', loadChildren: 'app/pages/clientes/client.module#ClientModule', data: { breadcrumb: 'Clients' } },
            { path: 'users', loadChildren: 'app/pages/users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
            { path: 'search', component: search_component_1.SearchComponent, data: { breadcrumb: 'Search' } },
            { path: 'blank', component: blank_component_1.BlankComponent, data: { breadcrumb: 'Blank page' } },
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=pages.routing.js.map