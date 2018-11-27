import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-order',
  templateUrl: './stock-order.component.html',
  styleUrls: ['./stock-order.component.scss']
})
export class StockOrderComponent implements OnInit {
  @Input()
  stock: Stock;

  constructor() {
  }

  ngOnInit() {
  }
}
