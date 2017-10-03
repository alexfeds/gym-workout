import { Component, OnInit } from '@angular/core';
import { BicepsService } from '../../../services/biceps.service';
import { Workout } from '../../../models/workout';

@Component({
  selector: 'app-biceps-bench',
  templateUrl: './biceps-bench.component.html',
  styleUrls: ['./biceps-bench.component.css']
})
export class BicepsBenchComponent implements OnInit {
 workout: Workout[] = [];

  constructor( public bicepsService:BicepsService) {
    
   }

  


  ngOnInit() {
  }

  saveAll(rep,weight){
    this.workout.push({reps:rep,weight:weight})
    console.log(this.workout)
    
}


saveDB(workout){
  this.bicepsService.newWorkout(this.workout)
  alert("Saved successfully")
}






  

}
