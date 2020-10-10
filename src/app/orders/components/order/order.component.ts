import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInCart } from 'src/app/cart/models/product-in-cart';
import { CartService } from 'src/app/cart/services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  productsInOrder: Promise<ProductInCart[]>;
  submitted = false;

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.refreshProducts();
  }

  getTotalSum(): number {
    return this.cartService.getTotalSum();
  }

  onSubmitOrder() {
    this.productsInOrder.then(p => this.orderService.submitOrder(p));
    this.cartService.removeAllProducts();
    this.router.navigateByUrl('/success');
  }

  refreshProducts() {
    this.productsInOrder = this.cartService.getProductsInTheCart();
  }

}
