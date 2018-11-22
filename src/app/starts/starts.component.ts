import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.scss']
})
export class StartsComponent implements OnInit {
  @Input()
  private rating: number;

  private startList: boolean[] = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 1; i <= 5; i++) {
      this.startList.push(this.rating >= i);
    }
  }
}
