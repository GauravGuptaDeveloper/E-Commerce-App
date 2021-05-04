import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material/material.module';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { LoginComponent } from './components/login/login.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    ProductsGridComponent,
    CartComponent,
    ProductComponent,
    ProductDetailComponent,
    CartItemComponent,
    LoginComponent,
    CheckOutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    Ng2SearchPipeModule
  ],
  exports:[
    ProductsGridComponent,
    CartComponent,
    ProductComponent,
    ProductDetailComponent,
    LoginComponent,
    CheckOutComponent,
    CartItemComponent
  ]
})
export class LayoutModule { }
