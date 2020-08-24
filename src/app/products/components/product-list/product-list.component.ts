import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onBuy(productToAdd: Product) {
    this.cartService.addToCart(productToAdd);
  }
}
