import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input()
  orderName: string;

  @Input()
  orderNum: number;

  constructor() {
    setInterval(() => {
      this.orderName = 'qqqqqqqq';
    }, 2000);
  }

  ngOnInit() {
  }

}
