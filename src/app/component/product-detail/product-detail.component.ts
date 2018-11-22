import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../model/Product';
import { Comment } from '../../model/Comment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productCommentList: Comment[];

  constructor(
    public route: ActivatedRoute,
    public productService: ProductService
  ) {
  }

  ngOnInit() {
    this.product = this.productService.getProductById(this.route.snapshot.params.id * 1);
    this.productCommentList = this.productService.getCommentListByProductId(this.product.id);
  }
}
