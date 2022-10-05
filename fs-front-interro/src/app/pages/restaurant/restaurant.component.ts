import { Component, OnInit } from '@angular/core';
import { RestaurantFormContent } from 'src/app/components/restaurant-form/restaurant-form.component';
import { Restaurant } from 'src/app/dtos/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public restaurants: Restaurant[] = []

  constructor(private restaurantService: RestaurantService) { }

  public ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: restaurants => this.restaurants = restaurants
    })
  }

  public addRestaurant(restaurant: RestaurantFormContent): void {
    this.restaurantService.addRestaurant(restaurant.nom, restaurant.adresse).subscribe({
      next: value => this.restaurants.push(value)
    })
  }
}
