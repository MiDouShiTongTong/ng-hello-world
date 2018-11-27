import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('child2 destroy');
  }

  sayGreeting(greeting: string) {
    console.log(greeting);
  }

}
