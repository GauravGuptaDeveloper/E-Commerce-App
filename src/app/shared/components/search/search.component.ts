import { AfterViewInit, Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
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
}
