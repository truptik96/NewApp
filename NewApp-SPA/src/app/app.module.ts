import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { FoodlistComponent } from './restaurants//Foodlist/Foodlist.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { RestaurantService } from './_services/restaurant.service';
import { RestaurantCardComponent } from './restaurants/Foodlist/restaurant-card/restaurant-card.component';
<<<<<<< HEAD
import { RestaurantDetailComponent } from './restaurants/Foodlist/restaurant-detail/restaurant-detail.component';
import { AuthGuard } from './_guards/auth.guard';
import { RestaurantDetailResolver } from './_resolvers/restaurant-detail.resolver';
import { RestaurantListResolver } from './_resolvers/restaurant-list.resolver';

=======
import { RestaurantDetailComponent } from './restaurants/Foodlist/Restaurant-detail/Restaurant-detail.component';
import { AuthGuard } from './_guards/auth.guard';
import { RestaurantDetailResolver } from './_resolvers/Restaurant-detail.resolver';
import { Restaurantlistresolver } from './_resolvers/Restaurant-list.resolver';


export function tokenGetter() {
   return localStorage.getItem('token');
}
>>>>>>> d702adf5e127ff358fad8ba2750362ce1377c348

export function tokenGetter(){
 return localStorage.getItem('token');
}
@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      FoodlistComponent,
      MessagesComponent,
      ListsComponent,
      RestaurantCardComponent,
<<<<<<< HEAD
      RestaurantDetailComponent
      
=======
      RestaurantDetailComponent,
>>>>>>> d702adf5e127ff358fad8ba2750362ce1377c348
   ],
   imports: [
      BrowserModule,
      CollapseModule.forRoot(),
      BsDropdownModule.forRoot(),
      HttpClientModule,
      FormsModule,
      CollapseModule.forRoot(),
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      ErrorInterceptorProvider,
      AuthService,
      AlertifyService,
      AuthGuard,
      RestaurantService,
      RestaurantDetailResolver,
<<<<<<< HEAD
      RestaurantListResolver
=======
      Restaurantlistresolver
>>>>>>> d702adf5e127ff358fad8ba2750362ce1377c348
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
