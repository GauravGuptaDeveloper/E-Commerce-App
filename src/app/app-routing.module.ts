import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PaymentcancellationGuard } from './guards/paymentcancellation.guard';
import { CartComponent } from './layout/components/cart/cart.component';
import { CheckOutComponent } from './layout/components/check-out/check-out.component';
import { LoginComponent } from './layout/components/login/login.component';
import { ProductDetailComponent } from './layout/components/product-detail/product-detail.component';
import { ProductsGridComponent } from './layout/components/products-grid/products-grid.component';
import { ProductResolver } from './resolvers/product.resolver';
import { RoutedelayResolver } from './resolvers/routedelay.resolver';
import { AboutComponent } from './shared/components/about/about.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { PaymentComponent } from './shared/components/payment/payment.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'product', component: ProductsGridComponent, resolve: {
    "classification": ProductResolver,
    "resolve": RoutedelayResolver
  }},

  {path: 'product/:classification', component: ProductsGridComponent, resolve: {
    "classification": ProductResolver,
    "resolve": RoutedelayResolver
  }},

  {path: 'product-detail/:classification/:type/:id', component: ProductDetailComponent, resolve: {
    "resolve": RoutedelayResolver
  }},
  
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard], resolve: {
    "resolve": RoutedelayResolver
  }},
  
  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard], resolve: {
    "resolve": RoutedelayResolver
  }, canDeactivate: [PaymentcancellationGuard]},

  {path: 'payment', component: PaymentComponent, canActivate: [AuthGuard], resolve: {
    "resolve": RoutedelayResolver
  }},

  {path: 'about', component: AboutComponent, resolve: {
    "resolve": RoutedelayResolver
  }},

  { path: '', redirectTo: 'product', pathMatch: 'full'},
  { path: 'not-found', component: PageNotFoundComponent, resolve: {
    "resolve": RoutedelayResolver
  }},
  { path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
