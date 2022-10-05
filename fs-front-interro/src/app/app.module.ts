import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { RestaurantTableComponent } from './components/restaurant-table/restaurant-table.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import {FormsModule} from "@angular/forms";
import { EvaluationFormComponent } from './components/evaluation-form/evaluation-form.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { HomeComponent } from './pages/home/home.component';
import { EvaluationPathComponent } from './pages/evaluation-path/evaluation-path.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantTableComponent,
    RestaurantComponent,
    RestaurantFormComponent,
    EvaluationFormComponent,
    EvaluationComponent,
    HomeComponent,
    EvaluationPathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
