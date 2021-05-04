import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { SearchComponent } from './components/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryTreeComponent } from './components/category-tree/category-tree.component';
import { CategoryMenuItemComponent } from './components/category-menu-item/category-menu-item.component';
import { PlaygroundComponent } from './components/playground/playground.component'
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    PageNotFoundComponent,
    PaymentComponent,
    SpinnerComponent,
    CategoryTreeComponent,
    CategoryMenuItemComponent,
    PlaygroundComponent,
    AboutComponent,
    JumbotronComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    PageNotFoundComponent,
    PaymentComponent,
    SpinnerComponent,
    CategoryTreeComponent,
    PlaygroundComponent,
    AboutComponent,
    JumbotronComponent
  ]
})
export class SharedModule { }
