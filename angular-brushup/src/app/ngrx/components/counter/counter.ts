import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/counter.actions';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [ AsyncPipe],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {

  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select(state => state.count);
  }

  increment() {
    console.log('Increment button clicked');
    this.store.dispatch(increment());
  }

  decrement() {
    console.log('Decrement button clicked');
    this.store.dispatch(decrement())
  }

  reset() {
    console.log('Reset button clicked');
    this.store.dispatch(reset())
  }
}
