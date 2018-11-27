import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../router/product.resolve';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private product: Product;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // 参数快照, 当前路由组件的参数不会发生改变的情况下使用
    // this.productId = this.route.snapshot.queryParams.id;
    // this.productId = this.route.snapshot.params.id;
    // 参数订阅, 当前路由组件的参数可能会发生改变的情况下使用
    // this.route.params.subscribe((params: Params) => console.log(params.id));
    this.route.data.subscribe((data: { product: Product }) => this.product = data.product);
  }
}
