import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, filter, catchError, mergeMap, debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bind3',
  templateUrl: './bind3.component.html',
  styleUrls: ['./bind3.component.scss']
})
export class Bind3Component implements OnInit {
  searchControl: FormControl = new FormControl();

  constructor() {
    of(1, 2, 3, 4, 5)
      .pipe(
        filter(n => n % 2 === 0),
        map(n => n * n)
      )
      .subscribe({
        next: x => console.log(x),
        error: err => console.error(err),
        complete: () => console.log('ok')
      });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => this.handlerInput(value));
  }

  ngOnInit() {
  }

  handlerInput(value: string) {
    console.log(value);
  }

}
