import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { Category } from 'src/app/shared/models/category.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = this.getInitialProducts();

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  setAvailable(product: Product) {
    const index = this.products.indexOf(product);
    this.products[index].isAvailable = true;
  }

  setUnAvailable(product: Product) {
    const index = this.products.indexOf(product);
    this.products[index].isAvailable = false;
  }

  getInitialProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'water',
        description: 'cold and pure',
        price: 10,
        category: Category.Drinks,
        isAvailable: true
      },
      {
        id: 2,
        name: 'ice cream',
        description: 'sweet',
        price: 20,
        category: Category.Sweets,
        isAvailable: true
      },
      {
        id: 3,
        name: 'cola',
        description: 'refreshing',
        price: 15,
        category: Category.Drinks,
        isAvailable: true
      },
      {
        id: 4,
        name: 'apple',
        description: 'elite, red, seducing',
        price: 47,
        category: Category.Fruits,
        isAvailable: false
      }
    ];
  }
}
