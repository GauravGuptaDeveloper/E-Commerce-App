import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from 'src/app/core/services/cart.service';
import { CartMockService } from 'src/app/core/services/mock-testing-cart.service';
import { LangModule } from 'src/app/language/lang.module';
import { JumbotronComponent } from 'src/app/shared/components/jumbotron/jumbotron.component';
import { LanguageComponent } from 'src/app/shared/components/language/language.component';
import { CartItemComponent } from '../cart-item/cart-item.component';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent, JumbotronComponent, LanguageComponent, CartItemComponent ],
      imports: [RouterTestingModule, LangModule, HttpClientTestingModule, FormsModule],
      providers: [{
        provide: CartService,
        useClass: CartMockService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have length of cart 2', () => {
    expect(component.getLengthOfCart()).toBe(2);
  });

  it('should have total cost similar to dummy data', () => {
    expect(component.getTotalCost()).toBe(1000);
  });

});
