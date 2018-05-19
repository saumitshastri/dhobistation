import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../_animations/index';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  animations: [slideInOutAnimation],
  styleUrls: ['./services.component.css'],
  host: { '[@slideInOutAnimation]': '' }
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
