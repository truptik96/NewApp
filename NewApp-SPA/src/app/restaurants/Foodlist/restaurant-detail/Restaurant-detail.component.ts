import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/_models/restaurant';
import { RestaurantService } from 'src/app/_services/restaurant.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';
import { FoodItem } from 'src/app/_models/FoodItem';

@Component({
  selector: 'app-Restaurant-detail',
  templateUrl: './Restaurant-detail.component.html',
  styleUrls: ['./Restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurants: Restaurant;
  fooditem: FoodItem;

  constructor(private restaurantService: RestaurantService, private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.restaurants = data['restaurant'];
    
      //this.fooditem = data['fooditem'];
    });
  }

  // loadrestaurant() {
  //   this.restaurantService.getRestaurant(+this.route.snapshot.params['id']).subscribe((restaurants: Restaurant) => {
  //     this.restaurants = restaurants;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }

  getfood() {
    const category = [];
    for (const fooditem of this.restaurants.fooditem) {
      category: fooditem.category;
    }
    return category;
  }
}
