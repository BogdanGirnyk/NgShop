import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { AboutComponent } from './layout/components/about/about.component';
import { constantValue, SOMECONSTANT } from './core';
import { SharedModule } from './shared/shared.module';
import { ApplicationRoutingModule } from './application-routing.module';
import { OrderComponent } from './orders/components/order/order.component';
import { OrdersAdminViewComponent } from './admin/components/orders-admin-view/orders-admin-view.component';
import { NotFoundComponent } from './layout/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    OrderComponent,
    OrdersAdminViewComponent,
    NotFoundComponent
  ],
  providers: [
    {
      provide: SOMECONSTANT,
      useValue: constantValue
    }
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    SharedModule,
    CartModule,
    ApplicationRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
