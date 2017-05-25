import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { MathService } from './shared/math.service';
import { SettingsService } from './shared/setting.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { settingsReducer } from './store/settings.reducer';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SettingsComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.provideStore({ settings: settingsReducer })
  ],
  providers: [  
    MathService,
    SettingsService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
