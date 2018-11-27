import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind2',
  templateUrl: './bind2.component.html',
  styleUrls: ['./bind2.component.scss']
})
export class Bind2Component implements OnInit {
  name: string;

  constructor() {
  }

  ngOnInit() {
    this.name = '1';
  }

  handlerInput(event) {
    this.name = event.target.value;
  }

}
