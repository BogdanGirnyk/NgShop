import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartService } from './services/cart.service';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { LocalStorageService } from '../core';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    SharedModule
  ],
  providers: [LocalStorageService],
  exports: [CartListComponent]
})
export class CartModule { }
