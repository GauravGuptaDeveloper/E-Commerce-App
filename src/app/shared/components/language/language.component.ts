import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor(public translate: TranslateService) { 
    translate.addLangs(['en', 'hi']);
    translate.setDefaultLang('en');
    console.log(translate.getBrowserLang(), translate.getLangs());
    
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hi/)? browserLang:'en');
  }

  ngOnInit(): void {
  }
  

}
