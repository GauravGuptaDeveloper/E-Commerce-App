import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { fromEvent, Observable } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  searchIcon = faSearch

  typeObservable: any;

  inputText: string;

  constructor(private searchService: SearchService) {
    this.inputText = "";
  }

  ngAfterViewInit() { }

  ngOnInit(): void {
    this.searchService.typeObservable.subscribe((keywords)=>{
      this.searchService.typeSubject.next(keywords.target.value);
    })
  }

  getInputBoxValue(){
    // can be used later
    // this.searchService.typeSubject.next(this.inputText);
  }  
}
