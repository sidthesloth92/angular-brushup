import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  


  constructor(private http: HttpClient, @Inject('API_KEY') private apiKey: string) {}

  getLatestRates() {
    const url = `https://rest.coincap.io/v3/exchanges?limit=5&offset=0`;
    return this.http.get(url).pipe(map((response: any) => response.data));
  }
}
