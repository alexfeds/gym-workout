
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Workout } from '../models/workout'

@Injectable()
export class BicepsService {
  workouts: FirebaseListObservable<any[]>;
  workout: FirebaseObjectObservable<any>;

  constructor(
    public af: AngularFireDatabase
  ) { 
    this.workouts = this.af.list('/workouts/biceps/biceps_bench') as FirebaseListObservable<Workout[]>;
  }

  getWorkouts(){
    return this.workouts;
  }


  newWorkout(workout: Workout[]){
    this.workouts.push(workout)
  }




}