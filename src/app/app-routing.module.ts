import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CartComponent } from './layout/components/cart/cart.component';
import { CheckOutComponent } from './layout/components/check-out/check-out.component';
import { LoginComponent } from './layout/components/login/login.component';
import { ProductDetailComponent } from './layout/components/product-detail/product-detail.component';
import { ProductsGridComponent } from './layout/components/products-grid/products-grid.component';
import { ProductResolver } from './resolvers/product.resolver';
import { AboutComponent } from './shared/components/about/about.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { PaymentComponent } from './shared/components/payment/payment.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'product', component: ProductsGridComponent, resolve: {
    "classification": ProductResolver
  }},
  {path: 'product/:classification', component: ProductsGridComponent},

  {path: 'product-detail/:classification/:type/:id', component: ProductDetailComponent},

  {path: 'search', component: ProductsGridComponent},
  
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
  {path: 'payment', component: PaymentComponent, canActivate: [AuthGuard]},

  {path: 'about', component: AboutComponent},
  { path: '', redirectTo: 'product', pathMatch: 'full' },

  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
