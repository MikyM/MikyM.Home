import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { NgParticlesModule } from "ng-particles";

@NgModule({
  declarations: [
    AppComponent,
    MaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    NgParticlesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
