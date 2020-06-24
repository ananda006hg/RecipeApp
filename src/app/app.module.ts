import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent }  from './warning-alert/warning-alert-component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    HeaderComponent
   
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      SharedModule,
      CoreModule
     

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
