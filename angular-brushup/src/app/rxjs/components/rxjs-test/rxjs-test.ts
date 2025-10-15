import { Component, OnInit } from '@angular/core';
import { first, from, map, Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-rxjs-test',
  imports: [],
  templateUrl: './rxjs-test.html',
  styleUrl: './rxjs-test.scss'
})
export class RxjsTest implements OnInit {
  message: string = '';
  numbers: number[] = [];
  
  ngOnInit(): void {
    
    const observable = new Observable<number>((subscriber) => {
      try{
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3); 

        setTimeout(() => {
          console.log("Producding value 4 after 2 seconds");
          subscriber.next(4);
          subscriber.complete();
        }, 2000);
      } catch (err) {
        subscriber.error(err);
      }
    });

    observable.subscribe((value) => {
      console.log(value);
    });
    console.log('Observable created and subscribed');


    observable.subscribe({
      next: (value) => {
        console.log('Received value:', value);
      },
      complete: () => {
        console.log('Observable completed');
      }


    });


    this.listenToAnObservableAndSubscriberStopsAfterSomeTime();
    this.createMyOwnOfObservable();

    this.pipeDream();
  }

  createMyOwnOfObservable() {
    this.dbOf([10, 20, 30, 40]).subscribe({
      next: (value) => {
        this.numbers.push(value);
        console.log('DB Value:', value);
      },
      complete: () => {
        this.message = 'All DB values received';
        console.log('DB Observable completed');
      }
    });
  }

  listenToAnObservableAndSubscriberStopsAfterSomeTime() {

    // the subscriber decides to stop listening after receiving 5 values. Other subscribers can continue to listen.
    // This is useful in scenarios like user navigates away from a page, so we want to stop listening to avoid memory leaks.
    const emitter = new Observable<number> (s => {
      let count = 0;
      const interval = setInterval(() => {
        const nextVal = ++count;
        console.log('Emitting:', nextVal);
        s.next(nextVal);
      }, 1000);

      return () => {
        clearInterval(interval);
        console.log('Observable cleaned up');
      };
    });
    

    const subscription = emitter.subscribe({
      next: (value) => {
        console.log('Received value:', value);

        if (value == 5) {
          console.log('Unsubscribing after receiving 5');
          subscription.unsubscribe();
        }
      },
      complete: () => {
        console.log('Observable completed');
      }
    });
  }


  dbOf(params: Array<any>): Observable<any> {
    return new Observable<any>(s => {
      params.forEach(p => {
        s.next(p);
      });
      s.complete();
    });
  }

  pipeDream() {
    const source = from([1, 2, 3]);

    source.pipe(map(v => v * 2)).subscribe(v => console.log("mapped value:", v));


    const myPipe = pipe(map((v: number) => v + 10), first())

    myPipe(source).subscribe(v => console.log("piped value:", v));

  }
}
