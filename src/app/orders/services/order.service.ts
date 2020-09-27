import { Injectable } from '@angular/core';
import { ProductInCart } from 'src/app/cart/models/product-in-cart';
import { CartService } from 'src/app/cart/services/cart.service';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];

  constructor(private cartService: CartService) { }

  getOrders(): Order[] {
    return this.orders;
  }
  submitOrder(items: ProductInCart[]) {
    this.orders.push({ products: items, id: (this.orders.length ? Math.max(...this.orders.map(o => o.id)) : 0) + 1  });
  }
}
