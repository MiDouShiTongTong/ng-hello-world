import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stock: Stock;

  @Output()
  latestStock: EventEmitter<Stock> = new EventEmitter<Stock>();

  @Output()
  buyStock: EventEmitter<Stock> = new EventEmitter<Stock>();

  constructor() {
    this.stock = new Stock('', 0);
    setInterval(() => {
      const stock = new Stock('Tecnent', 100 * Math.random());
      this.stock = stock;
      // 发布最新的 股票价格
      this.latestStock.emit(stock);
    }, 1000);
  }

  ngOnInit() {
  }

  handlerBuyStock() {
    this.buyStock.emit(this.stock);
  }

}
