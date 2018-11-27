import { Component, OnInit } from '@angular/core';
import { AnotherProductService } from '../../service/another-product/another-product.service';
import { ProductService } from '../../service/product/product.service';
import { Product } from 'src/app/model/Product';

// Cpm
@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss'],
  providers: [
    // 在组件中声明 provide
    //    只有当前组件和子组件可见
    //    会替换以有的 ProductService
    // { provide: ProductService, useClass: AnotherProductService }
  ]
})
export class Product2Component implements OnInit {
  private product: Product;

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }
}
