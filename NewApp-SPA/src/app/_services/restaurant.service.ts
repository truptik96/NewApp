import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Restaurant } from '../_models/restaurant';
import { map } from 'rxjs/operators';
<<<<<<< HEAD

=======
import { FoodItem } from '../_models/FoodItem';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Authorization': 'Bearer ' + localStorage.getItem('token')
//   })
// };
>>>>>>> d702adf5e127ff358fad8ba2750362ce1377c348
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  baseUrl = environment.apiUrl;
  
constructor(private http: HttpClient) { }

getRestaurants(): Observable<Restaurant[]> {
  return this.http.get<Restaurant[]>(this.baseUrl + 'Restaurants');
}

<<<<<<< HEAD
getRestaurant(id): Observable<Restaurant> {
=======

getRestaurant(id): Observable<Restaurant> {
  
>>>>>>> d702adf5e127ff358fad8ba2750362ce1377c348
  return this.http.get<Restaurant>(this.baseUrl + 'Restaurants/' + id);
}



}
