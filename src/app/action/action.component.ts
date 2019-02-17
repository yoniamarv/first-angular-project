import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  @Output('actionTotal') totalEmmiter : EventEmitter<number>;

  total : number;

  constructor() {
    this.totalEmmiter = new EventEmitter<number>();
    this.total = 0;
   }

  ngOnInit() {
  }

  increment(){
    this.totalEmmiter.emit(++this.total);
  }

  decrement(){
    this.total--;
    if(this.total<0){
      this.total=0;
    }
    this.totalEmmiter.emit(this.total);
  }
}
