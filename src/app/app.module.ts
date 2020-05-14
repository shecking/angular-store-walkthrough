// This file is the "hub" for routes, components, and modules used in the app (imported, declared, etc)
// Routes are listed in the RouterModule below
// Components consist of three parts (auto-generated?):
  // 1. The `component` class, handling data (ex. product data in products.ts), functionality via event listeners/handlers (ex. share() method, notify.emit() method, etc).
  // 2. The HTML template, determining the UI (names, descriptions, 'Share' button, etc)
  // 3. CSS styling specific to the component it's housed in (currently empty)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
// This HttpClientModule is included in the @angular package
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  imports: [
    // Listing the imports we need from above
    BrowserModule,
    HttpClientModule,
      // This registers the HttpClient globally for the app
    ReactiveFormsModule,
    RouterModule.forRoot([
      // This RouterModule houses all the potential routes for the site, imported from the @angular/router package. This module can be comprised of one or more path/component pairs.
      // Each of these objects has both a `path` and `component` attribute, which are used to define the relative URL and what component the path will load upon navigation.
      // For example, the first path is empty (no additional URL material), with ProductListComponent as its component (leading to product-list.product-list.component)
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent}
    ])
  ],
  declarations: [
    // After importing, this list defines all the components we will use
    // These declarations only happens ONCE, and only in this file
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ CartService ]
})
export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
