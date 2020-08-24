import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/shared/models/product.model';
import { ProductInCart } from '../../models/product-in-cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getProductsInTheCart(): ProductInCart[] {
    return this.cartService.getProductsInTheCart();
  }

  removeFromCart(productToRemove: Product) {
    this.cartService.removeFromCart(productToRemove);
  }

  increaseQuantity(product: Product) {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: Product) {
    this.cartService.decreaseQuantity(product);
  }

  totalCount(): number {
    return this.cartService.getTotalQuantity();
  }

  totalSum(): number {
    return this.cartService.getTotalSum();
  }
}
