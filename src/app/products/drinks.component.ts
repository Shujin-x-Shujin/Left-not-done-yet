import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../models/product.model';
import { ProductsService } from '../products.service';


import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  drinksForm: FormGroup;
  dataFromChild: Products;
  @Input() product: Products;
  @Output() notify: EventEmitter<Products> = new EventEmitter<Products>();

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

  constructor(private fb: FormBuilder, private _productService: ProductsService) { }

  ngOnInit() {
    this.drinksForm = this.fb.group({
      quantity: ['', [Validators.required, Validators.max(100), Validators.min(1)]]

    });
    this._productService.getProducts();


  }
  handleClick() {
    this.notify.emit(this.product);
  }
  handleNotify(eventData: Products) {
    this.dataFromChild = eventData;
    console.log(Products);
  }

}

