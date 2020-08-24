import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductInCart } from '../../models/product-in-cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() productInCart: ProductInCart;
  @Output() increaseQuantity = new EventEmitter();
  @Output() decreaseQuantity = new EventEmitter();
  @Output() removeFromCart = new EventEmitter();

  onRemoveFromCart() {
    this.removeFromCart.emit();
  }

  onIncreaseQuantity() {
    this.increaseQuantity.emit();
  }

  onDecreaseQuantity() {
    this.decreaseQuantity.emit();
  }
}
