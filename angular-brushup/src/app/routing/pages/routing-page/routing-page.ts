import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-page',
  imports: [JsonPipe],
  templateUrl: './routing-page.html',
  styleUrl: './routing-page.scss'
})
export class RoutingPage {

  protected readonly router = inject(ActivatedRoute);

  constructor() {}  
}
