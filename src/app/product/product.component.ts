import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private productList: Product[];

  constructor() {
    this.productList = [
      new Product(1, '第一个商品', 1.99, 3.5, '商品1', ['食品', '养生']),
      new Product(2, '第二个商品', 2.99, 2.5, '商品2', ['男鞋', '养生']),
      new Product(3, '第三个商品', 3.99, 1.5, '商品3', ['女鞋', '养生']),
      new Product(4, '第四个商品', 5.99, 3.5, '商品4', ['水果', '养生']),
      new Product(5, '第五个商品', 5.99, 5, '商品5', ['图书', '养生'])
    ];
  }

  ngOnInit() {
  }
}

export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public description: string,
    public categoryList: string[]
  ) {

  }
}
