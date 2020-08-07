import { Injectable } from '@angular/core';
import { Products } from '../app/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private listProducts: Products[] = [
    {
      id: 1,
      productName: 'Affogato',
      category: 'Beverage',
      quantityOnHand: 100,
      price: 4.75
    },
    {
      id: 2,
      productName: 'Coke',
      category: 'Beverage',
      quantityOnHand: 500,
      price: 0.50
    },
    {
      id: 3,
      productName: 'Ice cold Lemonade',
      category: 'Beverage',
      quantityOnHand: 200,
      price: 2
    },

    {
      id: 4,
      productName: 'C2',
      category: 'Beverage',
      quantityOnHand: 500,
      price: 1.50
    },

    {
      id: 5,
      productName: 'Lemon Juice',
      category: 'Beverage',
      quantityOnHand: 500,
      price: 2.50
    },

    {
      id: 6,
      productName: 'Orange Juice',
      category: 'Beverage',
      quantityOnHand: 500,
      price: 2.50
    },

    {
      id: 7,
      productName: 'Mocha Kape',
      category: 'Beverage',
      quantityOnHand: 500,
      price: 3.50
    },

    {
      id: 8,
      productName: 'Coffee',
      category: 'Beverage',
      quantityOnHand: 500,
      price: 2.50
    },

    {
      id: 9,
      productName: 'Iced Tea',
      category: 'Beverage',
      quantityOnHand: 500,
      price: 1
    }
  ];

  constructor() { }
  getProducts(): Products[] {
    return this.listProducts;
  }
  save(products: Products) {
    this.listProducts.push(products);
  }
}
