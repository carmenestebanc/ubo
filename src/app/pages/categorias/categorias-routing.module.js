"use strict";
var router_1 = require("@angular/router");
var categorias_list_component_1 = require("./categorias-list/categorias-list.component");
var categorias_add_component_1 = require("./categorias-add/categorias-add.component");
var categorias_update_component_1 = require("./categorias-update/categorias-update.component");
var categorias_detail_component_1 = require("./categorias-detail/categorias-detail.component");
var routes = [
    { path: '', component: categorias_list_component_1.CategoriasListComponent, pathMatch: 'full' },
    {
        path: 'list',
        component: categorias_list_component_1.CategoriasListComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Categories List' }
    },
    {
        path: 'add',
        component: categorias_add_component_1.CategoriasAddComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Add Category' },
    },
    {
        path: 'detail/:id',
        component: categorias_detail_component_1.CategoriasDetailComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Category Details' }
    },
    {
        path: 'update/:id',
        component: categorias_update_component_1.CategoriasUpdateComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Update Category' }
    },
];
exports.CategoriasRoutingModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=categorias-routing.module.js.map