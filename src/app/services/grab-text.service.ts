import { Injectable } from '@angular/core';


@Injectable()
export class GrabTextService {
   exercise:string

  constructor() { }

  passExerciseName(exercise) {
    this.exercise = exercise;


}

getExerciseName() {
  return this.exercise;
}



}