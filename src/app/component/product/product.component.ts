import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: Product[];

  constructor(
    public productService: ProductService
  ) {

  }

  ngOnInit() {
    this.productList = this.productService.getProductList();
  }
}
