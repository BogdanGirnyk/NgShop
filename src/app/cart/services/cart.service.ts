import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductInCart } from '../models/product-in-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productsInTheCart: ProductInCart[] = [];

  constructor() { }

  getProductsInTheCart(): ProductInCart[] {
    return this.productsInTheCart;
  }

  addToCart(productToAdd: Product) {
    let existing = this.productsInTheCart.find(p => p.product === productToAdd);
    if (!existing) {
      existing = { product: productToAdd, quantity: 0};
      this.productsInTheCart.push(existing);
    }
    existing.quantity++;
  }

  removeFromCart(productToRemove: Product) {
    const item = this.productsInTheCart.find(p => p.product === productToRemove);
    if (item) {
      this.productsInTheCart.splice(this.productsInTheCart.indexOf(item), 1);
    }
  }

  increaseQuantity(product: Product) {
    const item = this.productsInTheCart.find(p => p.product === product);
    item.quantity++;
  }

  decreaseQuantity(product: Product) {
    const item = this.productsInTheCart.find(p => p.product === product);
    item.quantity--;
    if (item.quantity === 0) {
      this.removeFromCart(product);
    }
  }


  isInCart(product: Product): boolean {
    return !!this.productsInTheCart.find(p => p.product === product);
  }

  getTotalQuantity(): number {
    return this.productsInTheCart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
  }

  getTotalSum(): number {
    return this.productsInTheCart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.product.price, 0);
  }

}
