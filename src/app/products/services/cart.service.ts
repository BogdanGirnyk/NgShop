import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsInTheCart: Product[] = [];

  constructor(private productsService: ProductsService) { }

  addToCart(productToAdd: Product) {
    this.productsInTheCart.push(productToAdd);
    this.productsService.setUnAvailable(productToAdd);
  }

  removeFromCart(productToRemove: Product) {
    const index = this.productsInTheCart.indexOf(productToRemove);
    this.productsInTheCart.splice(index, 1);
    this.productsService.setAvailable(productToRemove);
  }
}
