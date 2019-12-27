import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodlistComponent } from './restaurants/Foodlist/Foodlist.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
<<<<<<< HEAD
import { RestaurantDetailComponent } from './restaurants/Foodlist/restaurant-detail/restaurant-detail.component';
import { RestaurantDetailResolver } from './_resolvers/restaurant-detail.resolver';
import { RestaurantListResolver } from './_resolvers/restaurant-list.resolver';
=======
import { RestaurantDetailComponent } from './restaurants/Foodlist/Restaurant-detail/Restaurant-detail.component';
import { RestaurantDetailResolver } from './_resolvers/Restaurant-detail.resolver';
import { Restaurantlistresolver } from './_resolvers/Restaurant-list.resolver';
>>>>>>> d702adf5e127ff358fad8ba2750362ce1377c348

export const appRoutes: Routes = [
{path: 'home', component: HomeComponent},
{
 path: '',
 runGuardsAndResolvers: 'always',
 canActivate: [AuthGuard],
 children: [
<<<<<<< HEAD
    {path: 'Foodlist', component: FoodlistComponent, resolve: {restaurants: RestaurantListResolver}},
=======
    {path: 'Foodlist', component: FoodlistComponent,
      resolve: {restaurants: Restaurantlistresolver}},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
     resolve: {restaurant: RestaurantDetailResolver}},
>>>>>>> d702adf5e127ff358fad8ba2750362ce1377c348
    {path: 'messages', component: MessagesComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent, 
    resolve: {restaurant: RestaurantDetailResolver}},
    {path: 'lists', component: ListsComponent},
 ]
},
{path: '**', redirectTo: 'home', pathMatch: 'full'}

];
