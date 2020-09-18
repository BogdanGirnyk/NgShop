import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductInCart } from '../models/product-in-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: ProductInCart[] = [];
  private totalQuantity: number;
  private totalSum: number;

  getProductsInTheCart(): ProductInCart[] {
    return this.cartProducts;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  getTotalSum(): number {
    return this.totalSum;
  }

  updateCartData() {
    this.totalQuantity = this.cartProducts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.product.price, 0);
    this.totalSum = this.cartProducts.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
  }

  addToCart(productToAdd: Product) {
    let existing = this.cartProducts.find(p => p.product === productToAdd);
    if (!existing) {
      existing = { product: productToAdd, quantity: 0};
      this.cartProducts.push(existing);
    }
    existing.quantity++;
    this.updateCartData();
  }

  removeAllProducts() {
    this.cartProducts = [];
    this.updateCartData();
  }

  removeFromCart(productToRemove: Product) {
    const item = this.cartProducts.find(p => p.product === productToRemove);
    if (item) {
      this.cartProducts.splice(this.cartProducts.indexOf(item), 1);
    }
    this.updateCartData();
  }

  increaseQuantity(product: Product) {
    const item = this.cartProducts.find(p => p.product === product);
    item.quantity++;
    this.updateCartData();
  }

  decreaseQuantity(product: Product) {
    const item = this.cartProducts.find(p => p.product === product);
    item.quantity--;
    if (item.quantity === 0) {
      this.removeFromCart(product);
    }
    this.updateCartData();
  }


  isInCart(product: Product): boolean {
    return !!this.cartProducts.find(p => p.product === product);
  }

}
