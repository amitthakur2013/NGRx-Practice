import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  //counter:any=0;

  constructor() { }

  ngOnInit(): void {
  }
/*
  increase() {
    this.counter+=1;
  }

  decrease(){
    this.counter-=1;
  }

  rese() {
    this.counter=0;
  }
*/
}
