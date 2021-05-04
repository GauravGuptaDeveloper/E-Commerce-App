import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce-app';

  showLoadingIndicator: boolean = false;

  constructor(private router: Router){
    this.router.events.subscribe((routerEvent: any)=>{
      if(routerEvent instanceof NavigationStart){
        this.showLoadingIndicator = true;
      }
      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
        this.showLoadingIndicator = false
      }
    })
  }
  
  ngOnInit(): void {
    
  }


}
