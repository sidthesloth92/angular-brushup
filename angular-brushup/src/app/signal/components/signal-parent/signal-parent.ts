import { ChangeDetectionStrategy, Component, DoCheck, NgZone, OnChanges, OnInit, signal } from '@angular/core';
import { SignalChild } from '../signal-child/signal-child';
import { timer } from 'rxjs';
import { SignalChildTwo } from '../signal-child-two/signal-child-two';

@Component({
  selector: 'app-signal-parent',
  imports: [SignalChild, SignalChildTwo],
  templateUrl: './signal-parent.html',
  styleUrl: './signal-parent.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class SignalParent implements OnInit, DoCheck {
  constructor(private ngZone: NgZone) {}
  ngDoCheck(): void {
   console.log('Signal Parent Changes Detected')
  }

   ngOnInit(): void {
  
      // timer(3000).subscribe(() => {
        console.log('Signal Parent Signal Counter updated to 9 after 3 seconds (via Observable)');
        this.signalCounter.set(9);
      // });
  
      // this.ngZone.runOutsideAngular(() => {
      //   setTimeout(() => {
      //     // This will only update the signal and the child view, not trigger parent change detection
      //     this.signalCounter.set(20);
      //     console.log('Signal Parent Signal Counter updated to 20 after 6 seconds (outside Angular zone)');
      //   }, 6000);
      // });
    }

  nonSignalCounter = 0;
  signalCounter = signal(0);

  updateSignalCounter() {
    console.log('Signal Parent Signal Counter clicked')
    this.signalCounter.update(value => value + 1);
  }


  updateNonSignalCounter() {
    console.log('Signal Parent Non Signal Counter clicked')
    this.nonSignalCounter = this.nonSignalCounter + 1;
  }
}
