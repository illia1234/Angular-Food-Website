import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../header/shared/Cart';
import { CartItem } from '../header/shared/models/CartItem';
import { FoodComponent } from '../servise/food/food/food.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart;
  constructor(private cartService: CartService,
    private  foodService: FoodComponent){
      // let foods = foodService.getAll();
      // cartService.addToCart(foods[0]);
      // cartService.addToCart(foods[2]);
    this.setCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  ngOnInit(): void {
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
}


