import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateProductsComponent } from './products/create-products.component';
import { ListProductsComponent } from './products/list-products.component';
import { PopularComponent } from './products/popular.component';
import { FoodsComponent } from './products/foods.component';
import { DrinksComponent } from './products/drinks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsService } from '../app/products.service';

const appRoutes: Routes = [
  { path: 'list', component: ListProductsComponent },
  { path: 'create', component: CreateProductsComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'foods', component: FoodsComponent },
  { path: 'drinks', component: DrinksComponent },

  { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateProductsComponent,
    ListProductsComponent,
    PopularComponent,
    FoodsComponent,
    DrinksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
