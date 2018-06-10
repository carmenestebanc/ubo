import { SharedModule } from './pages/com.acorde.common/shared.module';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { routing } from './app.routing';
import { AppConfig } from './app.config';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/shared-components/error/error.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDatePickerModule } from 'mydatepicker';
import { LoginService } from './pages/shared-components/login/login.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { environment } from '../environments/environment';
import { Logger, Options } from "angular2-logger/core";
import { NguiDatetimePickerModule, NguiDatetime } from '@ngui/datetime-picker';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NguiDatetimePickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    }),
    routing,
    BrowserAnimationsModule,
    MyDatePickerModule,
    SharedModule,
    ToastModule.forRoot()
  ],
  providers: [AppConfig, LoginService, Logger, Options],

  bootstrap: [AppComponent],

})
export class AppModule {
  constructor(private logger: Logger) {
    this.logger.level = environment.logger;
  }
}
