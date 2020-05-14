import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  // The @Component is called a 'decorator', similar in function to the <meta> tag used in HTML <head>, and contains three auto-generated attributes:
    // `selector` is just the name, using the naming convention "app-<component_name>"
    // templateUrl and styleUrls reference the HTML and CSS files that will be used to display the component
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  // The Component will export this ProductListComponent, handling the component's function.
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    // This method will be called if:
      // the button from product-alerts.component.html is clicked
      // (triggering the notify method in product-alerts.component.ts)
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
