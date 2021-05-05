import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { LoginService } from './core/services/login.service';
import { CartService } from './core/services/cart.service';
import { SearchService } from './core/services/search.service';
import { TilecasePipe } from './pipes/tilecase.pipe';
import { PaymentcancellationGuard } from './guards/paymentcancellation.guard';
import { LangModule } from './language/lang.module';

@NgModule({
  declarations: [
    AppComponent,
    TilecasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    LayoutModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    LangModule
  ],
  providers: [LoginService, CartService, SearchService, PaymentcancellationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
