import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Workout } from '../../models/workout';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})

export class LogComponent  {


 
  displayedColumns = ['reps', 'weight'];
  dataSource = new ExampleDataSource();
  workout: Workout[] = [];

  saveSetLocally(rep, weight) {
    this.workout.push({ reps: parseInt(rep), weight: parseInt(weight) })
    console.log(this.workout)
  }


}





var data: Workout[] = this.workout;
// let i: LogComponent=new LogComponent();
// console.log(i.workout);

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Workout[]> {
    return Observable.of(data);
  }

  disconnect() { }
}
