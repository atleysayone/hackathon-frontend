import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { Product } from './product';

 @Component({
   selector: 'my-app',
   templateUrl: './product-list.html',
 })
 export class NewListComponent implements OnInit {

   products = PRODUCTS;
   private LOGO = ("./assets/prd-img.jpg");

   selectedProduct: Product;
   selectedCard : string;


   constructor() { }

   ngOnInit() {
   }

   onSelect(product: Product): void {
     this.selectedProduct = product;
   }
   clickEvent(product_id: string): void {
     this.selectedCard = 'card'+product_id;
   }

 }
