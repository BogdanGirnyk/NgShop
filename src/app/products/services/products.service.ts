import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { Category } from 'src/app/shared/models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = this.getInitialProducts();

  getProducts(): Product[] {
    return this.products;
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
        name: 'water',
        description: 'cold and pure',
        price: 10,
        category: Category.Drinks,
        isAvailable: true
      },
      {
        name: 'ice cream',
        description: 'sweet',
        price: 20,
        category: Category.Sweets,
        isAvailable: true
      },
      {
        name: 'cola',
        description: 'refreshing',
        price: 15,
        category: Category.Drinks,
        isAvailable: true
      },
      {
        name: 'apple',
        description: 'red, seducing',
        price: 7,
        category: Category.Fruits,
        isAvailable: false
      }
    ];
  }
}
