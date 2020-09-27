import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AboutComponent } from './layout/components/about/about.component';
import { NotFoundComponent } from './layout/components/not-found/not-found.component';
import { OrderComponent } from './orders/components/order/order.component';
import { SuccessfulSubmissionComponent } from './orders/components/successful-submission/successful-submission.component';
import { ProductCardComponent } from './products/components/product-card/product-card.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductResolveGuard } from './products/guards/product-resolve.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'product/:productId',
    component: ProductCardComponent,
    resolve: {
      product: ProductResolveGuard
    }
  },
  {
    path: 'cart',
    component: CartListComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'success',
    component: SuccessfulSubmissionComponent,
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'notfound',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
