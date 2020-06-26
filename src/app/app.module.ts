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
import { StoreModule } from '@ngrx/store'
import * as  fromApp from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { RecipeEffects } from './recipes/store/recipe.effects';

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
      StoreModule.forRoot(fromApp.appReducer),
      StoreDevtoolsModule.instrument({logOnly:environment.production}),
      EffectsModule.forRoot([AuthEffects, RecipeEffects]),
      StoreRouterConnectingModule.forRoot(),
      SharedModule,
      CoreModule
     

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
