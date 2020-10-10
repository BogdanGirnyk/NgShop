import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<Product> {
  constructor(private productsService: ProductsService, private router: Router) {

  }
  resolve(route: ActivatedRouteSnapshot): Observable<Product | null> {
    if (!route.paramMap.has('productId')) {
      this.router.navigateByUrl('/products');
      return of(null);
    }
    const id = +route.paramMap.get('productId');
    return this.productsService.getProducts().pipe(
      map(products => {
        const product = products.find(p => p.id === id);
        if (!product) {
          this.router.navigateByUrl('/products');
        }
        return product || null;
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/notfound']);
        return of(null);
      })
    );
  }
}
