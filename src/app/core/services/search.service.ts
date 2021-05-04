import { Injectable } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  typeObservable: Observable<any>;

  typeSubject: Subject<string>;

  constructor() { 
    this.typeObservable = new Observable<any>();
    this.typeObservable = fromEvent(document.getElementsByTagName('input'), 'keyup');
    this.typeSubject = new Subject();
  }
}
