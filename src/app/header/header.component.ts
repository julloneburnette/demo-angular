import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() filterStatus: EventEmitter<string> = new EventEmitter<string>();
isIn = false;
  constructor() { }

  ngOnInit() {
  }

  onSelected(event) {
    let val = '';

    if (event.target.value === '1') {
      val = 'marketName';
    }else if (event.target.value === '2') {
      val = 'marketCode';
    }else if (event.target.value === '3') {
      val = 'subMarketName';
    }else if (event.target.value === '4') {
      val = 'subMarketName';
    }

     this.filterStatus.emit(val);
    }

onClickNav()
// tslint:disable-next-line:one-line
{
const bool =  this.isIn;
        this.isIn = bool === false ? true : false;
}
}
