import { ChangeDetectionStrategy, Component, DoCheck, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signal-child-two',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signal-child-two.html',
  styleUrl: './signal-child-two.scss',
  imports: [],
})
export class SignalChildTwo implements DoCheck, OnInit {
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.signalCounter.set(9);
    //   console.log('Signal Child Two Signal Counter updated to 9 after 5 seconds');
    // }, 5000);
  }

  ngDoCheck(): void {
    console.log('Signal Child Two Changes Detected');
  }

  nonSignalCounter = 0;
  signalCounter = signal(0);

  updateSignalCounter() {
    this.signalCounter.update(value => value + 1);
    console.log('Signal Child Two Signal Counter clicked');
  }

  updateNonSignalCounter() {
    this.nonSignalCounter = this.nonSignalCounter + 1;
    console.log('Signal Child Two Non Signal Counter clicked');
  }
}
