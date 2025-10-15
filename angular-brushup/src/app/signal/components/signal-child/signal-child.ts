import { ChangeDetectionStrategy, Component, DoCheck, NgZone, OnInit, signal } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-signal-child',
  imports: [],
  templateUrl: './signal-child.html',
  styleUrl: './signal-child.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, 
  // Using OnPush is the modern default with signals, maximizing efficiency
})
export class SignalChild implements DoCheck, OnInit{

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {

    // timer(4000).subscribe(() => {
    //   console.log('Signal Child Signal Counter updated to 9 after 3 seconds (via Observable)');
    //   this.signalCounter.set(3);
    // });

    // this.ngZone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     // This will only update the signal and the child view, not trigger parent change detection
    //     this.signalCounter.set(20);
    //     console.log('Signal Child Signal Counter updated to 20 after 6 seconds (outside Angular zone)');
    //   }, 6000);
    // });
  }
  ngDoCheck(): void {
    console.log('Signal Child Changes Detected');
  }


  nonSignalCounter = 0;
  signalCounter = signal(0);

  updateSignalCounter() {


    console.log('Signal Child Signal Counter clicked')
    this.signalCounter.update(value => value + 1);

   
  }


  updateNonSignalCounter() {
    console.log('Signal Child Non Signal Counter clicked')
    this.nonSignalCounter = this.nonSignalCounter + 1;
  }
}
