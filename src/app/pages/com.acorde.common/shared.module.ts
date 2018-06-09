import {PipesModule} from '../../theme/pipes/pipes.module';
import {HttpModule} from '@angular/http';
import {DirectivesModule} from '../../theme/directives/directives.module';
import {ModalService} from '../com.acorde.service/modal/modal.service';
import {BaseCore} from './base.core';
import {CategoryComponent} from '../com.acorde.portal/category/category.component';
import {SelectListComponent} from '../com.acorde.ui/component/list-filter/select.list.component';
import {ListAutocompleteComponent} from '../com.acorde.ui/component/list-autocomplete/list-autocomplete.component';
import {ModalComponent} from '../com.acorde.ui/component/modal/modal.component';
import {FormComponent} from '../com.acorde.ui/component/form/form.component';
import {TableComponent} from '../com.acorde.ui/component/table/table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageViewComponent } from '../com.acorde.ui/component/image-view/image.view.component';
import { RestShared } from './rest/rest.shared';
import { AuthorizatedGuard } from './guard/authorizated.guard';
import { PublicGuard } from './guard/public.guard';
import { AuthorizatedComponentGuard } from './guard/authorizatedComponent.guard';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

const AppComponents = [
  TableComponent,
  FormComponent,
  ModalComponent,
  SelectListComponent,
  ListAutocompleteComponent,
  ImageViewComponent
];
const PortalComponents = [
  CategoryComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NguiAutoCompleteModule
  ],
  declarations: [
    PortalComponents,
    AppComponents,
  ],
  providers:[
      BaseCore,
      ModalService,
      RestShared,
      AuthorizatedGuard,
      PublicGuard,
      AuthorizatedComponentGuard
  ],
  exports:[SelectListComponent,ImageViewComponent,ListAutocompleteComponent]
})
export class SharedModule { }