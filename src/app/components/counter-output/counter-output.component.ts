import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterState } from '../counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit,OnDestroy {

 // @Input() counter;

  constructor(private store:Store<{counter: counterState}>) { }
  ngOnDestroy(): void {
    
  }
  counter$:Observable<counterState>;
  ngOnInit(): void {
    this.counter$=this.store.select('counter')
  }

}
