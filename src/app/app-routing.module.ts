import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './servise/food/food/food.component';
import { FoodPageComponent} from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'favorite-page', component: CartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [FoodComponent] // добавьте сервис в раздел providers
})
export class AppRoutingModule { }
