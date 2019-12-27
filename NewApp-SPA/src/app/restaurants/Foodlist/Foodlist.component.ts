import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../_services/restaurant.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Restaurant } from '../../_models/restaurant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Foodlist',
  templateUrl: './Foodlist.component.html',
  styleUrls: ['./Foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

<<<<<<< HEAD
  restaurants: Restaurant[];

  constructor(private restaurantSerivce: RestaurantService, private alertify: AlertifyService, 
    private route:ActivatedRoute) { }
=======
  restaurants: Restaurant[] = [];

  constructor(private restaurantSerivce: RestaurantService, private alertify: AlertifyService, private route: ActivatedRoute) { }
>>>>>>> d702adf5e127ff358fad8ba2750362ce1377c348

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.restaurants = data['restaurants'];
    });
  }
<<<<<<< HEAD
  // loadRestaurants() {
=======
  // loadRestaurant() {
>>>>>>> d702adf5e127ff358fad8ba2750362ce1377c348
  //   this.restaurantSerivce.getRestaurants().subscribe((restaurants: Restaurant[]) => {
  //     this.restaurants = restaurants;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }

}
