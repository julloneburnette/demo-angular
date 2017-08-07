import { Category } from './../Models/Category';
import { SubMarket } from './../Models/SubMarket';
import { MainData } from './../Models/MainData';
import { Market } from './../Models/Market';
import { Year } from './../Models/Year';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService  {

  private yearsUrl = 'api/Years';
  private masterDataUrl = 'api/Master';
  private marketsUrl = 'api/Markets';
  private subMarketsUrl = 'api/SubMarkets';
  private categoryUrl = 'api/Master/Categories';

  constructor (private http: Http) {}

addMainData(maindata: MainData) {

}

  getCategoryWithObservable(): Observable<Category[]> {
    return this.http.get(this.categoryUrl)
        .map(this.extractData);
  }

  getMasterWithObservable(): Observable<MainData[]> {
    return this.http.get(this.masterDataUrl)
        .map(this.extractData);
  }

getMarketWithObservable(): Observable<Market[]> {
    return this.http.get(this.marketsUrl)
        .map(this.extractData);
  }

  getSubMarketWithObservable(): Observable<SubMarket[]> {
    return this.http.get(this.subMarketsUrl)
        .map(this.extractData);
  }

getYearsWithObservable(): Observable<Year[]> {
    return this.http.get(this.yearsUrl)
        .map(this.extractData);
  }

    private extractData(res: Response) {
    const body = res.json();
    return body;
}

 private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
}

}
