import { Component } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  orderNum: number;
  orderName: string;

  stock: Stock = new Stock('', 0);

  // 子组件触发
  handlerLatestStock(stock: Stock) {
    this.stock = stock;
  }

  // 子组件触发
  handlerBuyStock(stock: Stock) {
    this.stock = stock;
  }
}
