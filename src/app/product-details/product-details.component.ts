import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  // The @Component is called a 'decorator', similar in function to the <meta> tag used in HTML <head>, and contains three auto-generated attributes:
    // `selector` is just the name, using the naming convention "app-<component_name>"
    // templateUrl and styleUrls reference the HTML and CSS files that will be used to display the component
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  // The Component will export this ProductDetailsComponent, handling the component's function.
  product;

  constructor(
    // This constructor is auto-generated
    // It houses 'injected' data with defined classes from the above imported Angular packages
    // This injection changes a component to be able to use a 'service'
    private route: ActivatedRoute,
    // This `ActivatedRoute` contains information about the route for each individual routed component that it will load.
    // It is not found in the .ts file for any other component, since product-details.component.ts is the only one that needs to use the information.
    private cartService: CartService
  ) { }

  ngOnInit() {
    // 'Subscribing' and fetching the appropriate route, based on the individual product's id (productId)
    // productId is used in the URL to display the product details
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
      // `this.product` is originally just `products`
      // `[+params.get('productId')]` adds the appropriate id
    })
  }

  addToCart(product) {
    this.cartService.addToCart(product)
    window.alert('Your product has been added to the cart!')
  }

}
