import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 19.876251;
  lng: number = 75.354726;
  

  constructor() { }

  ngOnInit() {
  }

}
