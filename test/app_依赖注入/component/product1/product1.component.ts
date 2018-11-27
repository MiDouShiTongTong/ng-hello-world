import { Component, OnInit, Injector } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product/product.service';

// 声明 Component 装饰器, 就能注入 service
// Component 装饰器是 Injectable 的子类
@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component implements OnInit {
  private product: Product;

  private productService: ProductService;

  constructor(
    injector: Injector
  ) {
    this.productService = injector.get(ProductService);
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }
}
