import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  getProducts(): Product[] {
    return this.productsService.getProducts();
  }

  onBuy(productToAdd: Product) {
    this.cartService.addToCart(productToAdd);
  }
}
