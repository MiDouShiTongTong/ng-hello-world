import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { ProductSearchParams } from '../../model/product-search-params';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  productList: Product[];
  productServiceSubscribe: Subscription;

  constructor(
    public productService: ProductService
  ) {
  }

  ngOnInit() {
    // 获取商品列表
    this.productService.asyncGetProductList().subscribe(
      result => this.productList = result['data']
    );
    // 订阅商品搜索流
    // this.productService.productSearchEventEmitter.unsubscribe();
    this.productServiceSubscribe = this.productService.productSearchEventEmitter.subscribe(
      params => {
        // 重新异步加载商品信息
        this.productService.asyncGetProductList(params).subscribe(
          result => this.productList = result['data']
        );
      }
    );
  }

  ngOnDestroy() {
    // 组件销毁取消订阅
    this.productServiceSubscribe.unsubscribe();
  }
}
