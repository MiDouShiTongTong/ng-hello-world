import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  birthday: Date = new Date();
  PI: any = 3.123456;

  constructor() {
  }

  ngOnInit() {
  }

  date(value: any) {
    return value;
  }

}
