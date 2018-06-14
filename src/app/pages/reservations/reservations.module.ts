import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { ReservationsDetailsComponent } from './reservations-details/reservations-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReservationsListComponent, ReservationsDetailsComponent]
})
export class ReservationsModule { }
