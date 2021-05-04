import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckOutComponent } from '../layout/components/check-out/check-out.component';

@Injectable({
  providedIn: 'root'
})
export class PaymentcancellationGuard implements CanDeactivate<CheckOutComponent> {
  canDeactivate(
    component: CheckOutComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate();
  }
  
}
