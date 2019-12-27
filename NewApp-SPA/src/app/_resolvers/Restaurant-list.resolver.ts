import { Injectable } from "@angular/core";
import { Restaurant } from '../_models/restaurant';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router'; 
import { RestaurantService } from '../_services/restaurant.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class Restaurantlistresolver implements Resolve<Restaurant[]> {
    constructor(private restaurantService: RestaurantService,
        private router: Router, private alertify: AlertifyService){}

        resolve(route: ActivatedRouteSnapshot): Observable<Restaurant[]> {
            return this.restaurantService.getRestaurants().pipe(
                catchError(error => {
                    this.alertify.error('problem retrieving data');
                    this.router.navigate(['/home']);
                    return of(null);
                })
            );
        }
    }