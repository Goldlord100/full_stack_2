import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fs-front-interro';

  constructor(private router: Router, private httpClient: HttpClient){
    
  }
  
  public NavigateToHome(path: string) : void {
    this.router.navigate([path]);
  }

  public NavigateToEvaluation(path: string) : void {
    this.router.navigate([path]);
  }
}
