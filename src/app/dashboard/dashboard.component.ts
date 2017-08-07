import { Observable } from 'rxjs/Observable';
import { Year } from './../Models/Year';
import { DataService } from './../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  observableYears: Observable<Year[]>;
    years: Year[];
   errorMessage: String;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.observableYears = this.dataService.getYearsWithObservable();
this.observableYears.subscribe(
      years => this.years = years,
      error =>  this.errorMessage = <any>error);
  }

}
