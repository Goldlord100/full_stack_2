import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'restaurants', pathMatch: "full"
  },
  {
    path: 'restaurants', component: RestaurantComponent
  },
  {
    path: 'restaurants/:id/evaluations', component: EvaluationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
