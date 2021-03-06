import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first/first.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsService } from './services/products.service';
import { CartModule } from '../cart/cart.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [FirstComponent, ProductComponent, ProductListComponent, ProductCardComponent],
  imports: [
    SharedModule,
    CartModule
  ],
  providers: [ProductsService],
  exports: [ProductListComponent]
})
export class ProductsModule { }
