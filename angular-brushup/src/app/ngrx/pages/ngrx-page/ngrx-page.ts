import { Component } from '@angular/core';
import { Counter } from '../../components/counter/counter';

@Component({
  selector: 'app-ngrx-page',
  imports: [ Counter],
  templateUrl: './ngrx-page.html',
  styleUrl: './ngrx-page.scss'
})
export class NgrxPage {

}
