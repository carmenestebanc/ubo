"use strict";
var router_1 = require("@angular/router");
var error_component_1 = require("./pages/shared-components/error/error.component");
var authorizated_guard_1 = require("./pages/com.acorde.common/guard/authorizated.guard");
var public_guard_1 = require("./pages/com.acorde.common/guard/public.guard");
var authorizatedComponent_guard_1 = require("./pages/com.acorde.common/guard/authorizatedComponent.guard");
exports.routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'pages',
        loadChildren: 'app/pages/pages.module#PagesModule',
        canActivate: [authorizated_guard_1.AuthorizatedGuard],
        canActivateChild: [authorizatedComponent_guard_1.AuthorizatedComponentGuard]
    },
    {
        path: 'login',
        loadChildren: 'app/pages/shared-components/login/login.module#LoginModule',
        canActivate: [public_guard_1.PublicGuard]
    },
    {
        path: '**',
        component: error_component_1.ErrorComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, {
    preloadingStrategy: router_1.PreloadAllModules,
    useHash: true
});
//# sourceMappingURL=app.routing.js.map