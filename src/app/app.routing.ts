import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ErrorComponent } from './pages/shared-components/error/error.component';
import { AuthorizatedGuard } from './pages/com.acorde.common/guard/authorizated.guard';
import { PublicGuard } from './pages/com.acorde.common/guard/public.guard';
import { AuthorizatedComponentGuard } from './pages/com.acorde.common/guard/authorizatedComponent.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    loadChildren: 'app/pages/pages.module#PagesModule',
    canActivate:[AuthorizatedGuard],
    canActivateChild:[AuthorizatedComponentGuard]
  },
  {
    path: 'login',
    loadChildren: 'app/pages/shared-components/login/login.module#LoginModule',
    canActivate: [PublicGuard]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  useHash: true
});
