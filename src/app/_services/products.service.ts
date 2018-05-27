import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Product } from '../products/product';
import { Router } from '@angular/router';



@Injectable()
export class ProductService {
  private headers = new Headers();

  private productsUrl : string = 'http://localhost:8000/api/products';
  constructor(private http: HttpClient, private router: Router) {
    }

  getHeroes(): Promise<Product[]> {
    const url = `${this.productsUrl}/`
    return this.http.get(url)
               .toPromise()
               .then(response => response as Product[])
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
