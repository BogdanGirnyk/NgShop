import { ProductInCart } from 'src/app/cart/models/product-in-cart';

export class Order {
  id: number;
  products: ProductInCart[];
}
