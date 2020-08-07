import { Component, OnInit } from '@angular/core';
import { Products } from '../models/product.model';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: Products[] = [{
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
    quantityOnHand: 500,
    price: 0.50
  },

  {
    id: 4,
    productName: 'C2',
    category: 'Beverage',
    quantityOnHand: 500,
    price: 0.50
  },

  {
    id: 5,
    productName: 'Lemon Juice',
    category: 'Beverage',
    quantityOnHand: 500,
    price: 0.50
  },

  {
    id: 6,
    productName: 'Orange Juice',
    category: 'Beverage',
    quantityOnHand: 500,
    price: 0.50
  },

  {
    id: 7,
    productName: 'Mocha Kape',
    category: 'Beverage',
    quantityOnHand: 500,
    price: 0.50
  },

  {
    id: 8,
    productName: 'Coffee',
    category: 'Beverage',
    quantityOnHand: 500,
    price: 0.50
  },

  {
    id: 9,
    productName: 'Iced Tea',
    category: 'Beverage',
    quantityOnHand: 500,
    price: 0.50
  }
];
  constructor() { }

  ngOnInit() {
  }

}
