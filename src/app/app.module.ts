import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { InterestRatesService } from './interest-rates.service';
import { InterestRatesComponent } from './dashboard/interest-rates/interest-rates.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent, InterestRatesComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ InterestRatesService ]
})
export class AppModule { }
