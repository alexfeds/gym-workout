import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
import { GrabTextService } from '../../services/grab-text.service';
import 'rxjs/Rx';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  thexersice: string;
  dashboardScreens: Array<any>;


       
  
  
    constructor(private http:Http, private router: Router, private grabTextService: GrabTextService) {

      this.http.get('assets/imagesJson/' + this.grabTextService.getExerciseName() + '.json')
        .map(response => response.json().screenshots)
        .subscribe(res => this.dashboardScreens = res);

    }

 
   

  ngOnInit() {
  }


  onClick(clicked){
     this.router.navigate(['/log']);
   }

}