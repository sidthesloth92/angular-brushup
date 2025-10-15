import { Component, signal } from '@angular/core';
import { SignalParent } from '../../components/signal-parent/signal-parent';
import { ExchangeRateService } from '../../../exchange-rate';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signal-page',
  imports: [ SignalParent, JsonPipe],
  templateUrl: './signal-page.html',
  styleUrl: './signal-page.scss'
})
export class SignalPage {
protected readonly exchangeRates = signal<any>(null);
  protected readonly isLoading = signal(false);

  constructor(private exchangeRateService: ExchangeRateService) {}

  fetchExchangeRates() {
    this.isLoading.set(true);
    this.exchangeRateService.getLatestRates().subscribe((data) => {
      this.exchangeRates.set(data);
      this.isLoading.set(false);``
      console.log('Fetched Exchange Rates:', data);
    });
  }
}
