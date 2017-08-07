import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: `<div>
       <input type="text" #input (input)="update.emit(input.value)">
  </div>`
})
export class SearchBoxComponent implements OnInit {
  @Output() update =  new EventEmitter();

  ngOnInit() {
    this.update.emit('');
  }
}
