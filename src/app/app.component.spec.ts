import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { MaterialModule } from './material/material.module';
import { SearchComponent } from './shared/components/search/search.component';
import { SearchService } from './core/services/search.service';
import { SharedModule } from './shared/shared.module';
import { LangModule } from './language/lang.module';
import { LanguageComponent } from './shared/components/language/language.component';
import { CategoryTreeComponent } from './shared/components/category-tree/category-tree.component';
import { CategoryMenuItemComponent } from './shared/components/category-menu-item/category-menu-item.component';
import { CartItemComponent } from './layout/components/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MaterialModule,
        SharedModule,
        LangModule,
        FormsModule
      ],
      declarations: [
        CategoryTreeComponent,
        CategoryMenuItemComponent,
        LanguageComponent,
        SearchComponent,
        AppComponent,
        CartItemComponent,
        FooterComponent,
        HeaderComponent,
        SpinnerComponent
      ],
      providers: [SearchService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'e-commerce-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('e-commerce-app');
  });
  
});
