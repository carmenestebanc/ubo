import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsDetailsComponent } from './payments-details/payments-details.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaymentsDetailsComponent, PaymentsListComponent]
})
export class PaymentsModule { }
