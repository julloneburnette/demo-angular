import { SearchPipe } from './../../shared/pipe';
import { MainData } from './../../Models/MainData';
import { DataService } from './../../shared/data-storage.service';
import { Market } from './../../Models/Market';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  filterStatus = '';
 filterStatusName = 'marketName';


  @Input() term;
 observableMarkets: Observable<MainData[]>;
    master: MainData[];
   errorMessage: String;
  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.observableMarkets = this.dataService.getMasterWithObservable();
      this.observableMarkets.subscribe(
      master => this.master = master,
      error =>  this.errorMessage = <any>error);
  }

 onSelected(event) {

    if (event.target.value === '1') {
      this.filterStatusName = 'marketName';
    }else if (event.target.value === '2') {
      this.filterStatusName = 'marketCode';
    }else if (event.target.value === '3') {
      this.filterStatusName = 'subMarketName';
    }else if (event.target.value === '4') {
      this.filterStatusName = 'subMarketCode';
    }

    }

}
