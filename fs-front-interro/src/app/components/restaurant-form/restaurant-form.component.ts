import {NgForm} from "@angular/forms";
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  public nomInput: string = "";
  public adresseInput: string = "";

  @Output()
  public restaurantAdd: EventEmitter<RestaurantFormContent> = new EventEmitter();

  constructor() { 

  }

  public ngOnInit(): void {
  }

  public add(form: NgForm): void {

      if (form.valid) {
        this.restaurantAdd.emit({
        nom: this.nomInput,
        adresse: this.adresseInput
      });
    }
  }
}

export interface RestaurantFormContent {

  nom: string;
  adresse: string;

}
