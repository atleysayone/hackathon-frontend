import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  // styleUrls: ['./app.component.css'],

  template: `
   <h1 style="padding-left:70px">Product List</h1>
   <router-outlet></router-outlet>
 `
})
export class AppComponent {
  title = 'Products';
  constructor(
    // private AccountsService: AccountsService,
  ) {}
}
