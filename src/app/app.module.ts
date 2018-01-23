import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import { AppComponent } from './app.component';
import { LocalComponent } from './local/local.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { LosangelesComponent } from './losangeles/losangeles.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';





@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    ChicagoComponent,
    DallasComponent,
    LosangelesComponent,
    SanjoseComponent,
    SeattleComponent,
    WashingtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
