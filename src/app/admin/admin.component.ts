import { MainData } from './../Models/MainData';
import { SubMarket } from './../Models/SubMarket';
import { Market } from './../Models/Market';
import { DataService } from './../shared/data-storage.service';
import { Category } from './../Models/Category';
import { Year } from './../Models/Year';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  nameData = 'Inventory';
  name: Observable<Category[]>;
  markets: Observable<Market[]>;
  subMarkets: Observable<SubMarket[]>;
  years: Observable<Year[]>;
  q1;
  q2;
  q3;
  q4;

  year: Year[];
  market: Market[];
  submarket: SubMarket[];
  category: Category[];
  errorMessage: String;


  constructor(private http: Http, private dataService: DataService) { }

  ngOnInit() {


    this.name = this.dataService.getCategoryWithObservable();
      this.name.subscribe(
      category => this.category = category,
      error =>  this.errorMessage = <any>error);


     this.years = this.dataService.getYearsWithObservable();
      this.years.subscribe(
      year => this.year = year,
      error =>  this.errorMessage = <any>error);

       this.markets = this.dataService.getMarketWithObservable();
      this.markets.subscribe(
      market => this.market = market,
      error =>  this.errorMessage = <any>error);

      this.subMarkets = this.dataService.getSubMarketWithObservable();
      this.subMarkets.subscribe(
      submarket => this.submarket = submarket,
      error =>  this.errorMessage = <any>error);

  }

  onSubmit(form: NgForm) {
    const mainUrl = 'api/MainModels';

     const value = form.value;
    console.log(value.submarket);
  const mainObj = new MainData(
                  value.name,
                  value.marketName,
                  value.marketCode,
                  value.subMarketName,
                  value.subMarketCode,
                  value.year, value.q1,
                  value.q2,
                   value.q3,
                   value.q4);
    this.http.post(mainUrl, mainObj)
      .subscribe((response: Response) => {
        console.log(response);
      },
      (error ) => {
        console.log(error);
      }
    );

  }

}
