import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { AboutComponent } from './layout/components/about/about.component';
import { constantValue, SOMECONSTANT } from './core';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
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
    CartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
