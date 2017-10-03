import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
import { GrabTextService } from '../../services/grab-text.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardScreens: Array<any>;
  clicked: string;
  
  
    constructor(private http:Http, private grabTextService: GrabTextService, private router: Router) {
      
      this.http.get('assets/imagesJson/dashboard.json')
        .map(response => response.json().screenshots)
        .subscribe(res => this.dashboardScreens = res);
  
    }


    onClick(clicked){
     
      this.grabTextService.passExerciseName(clicked);
      this.router.navigate(['/exercise']);
    }
   

  ngOnInit() {
  }

}
