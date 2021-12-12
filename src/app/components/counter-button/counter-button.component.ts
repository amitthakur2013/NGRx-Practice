import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../counter.actions';
import { counterState } from '../counter.state';


@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  /*@Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();*/

  incre() {
    //return this.increment.emit();
    this.store.dispatch(increment());
  }

  decre() {
    //return this.decrement.emit();
    this.store.dispatch(decrement());
  }

  res() {
    //this.reset.emit();
    this.store.dispatch(reset());
  }
  
  constructor(private store:Store<{counter: counterState }>) { }

  ngOnInit(): void {
  }

}
