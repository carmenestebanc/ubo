import {FormComponent} from './com.acorde.ui/component/form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

import {DirectivesModule} from '../theme/directives/directives.module';
import {PipesModule} from '../theme/pipes/pipes.module';
import {HttpModule} from '@angular/http';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import {routing} from './pages.routing';
import {PagesComponent} from './pages.component';
import {BlankComponent} from './shared-components/blank/blank.component';
import {MenuComponent} from '../theme/components/menu/menu.component';
import {NavbarComponent} from '../theme/components/navbar/navbar.component';
import {BreadcrumbComponent} from '../theme/components/breadcrumb/breadcrumb.component';
import {BackTopComponent} from '../theme/components/back-top/back-top.component';
import {SearchComponent} from './shared-components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    routing,
    HttpModule,
    NguiAutoCompleteModule
  ],
  providers:[
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  declarations: [
    PagesComponent,
    BlankComponent,
    MenuComponent,
    NavbarComponent,
    BreadcrumbComponent,
    BackTopComponent,
    SearchComponent
  ],
})
export class PagesModule { }
