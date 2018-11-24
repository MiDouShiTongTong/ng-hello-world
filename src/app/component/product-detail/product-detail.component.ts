import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../model/Product';
import { Comment } from '../../model/Comment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product; // 商品详情
  productCommentList: Comment[]; // 商品评论
  isHiddenPostProductCommentContainer: boolean; // 发表商品评论区域是否可见
  postProductCommentContent: string; // 发表商品评论内容
  postProductCommentRating: number; // 发表商品评论评分

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private datePipe: DatePipe
  ) {
    this.postProductCommentRating = 5; // 默认五星, 通过子组件改变
    this.isHiddenPostProductCommentContainer = true; // 默认隐藏评论容器
  }

  ngOnInit() {
    // 初始化商品, 商品评论
    this.product = this.productService.getProductById(this.route.snapshot.params.id * 1);
    this.productCommentList = this.productService.getCommentListByProductId(this.product.id);
  }

  /**
   * 发表商品评论
   *
   */
  postProductComment() {
    // 添加新评论, 注意要构成一个新的数组
    const newComment = new Comment(
      1,
      this.product.id,
      '小杨啊啊啊',
      this.postProductCommentContent,
      this.postProductCommentRating,
      this.datePipe.transform(new Date().toString(), 'yyyy-MM-dd HH:mm:ss'));
    this.productCommentList = [].concat(newComment, this.productCommentList);

    // 重新计算商品的评分
    const ratingCount = this.productCommentList.reduce((preCount, comment) => preCount + comment.rating, 0);
    this.product.rating = ratingCount / this.productCommentList.length;

    // 清空表单内容
    this.postProductCommentContent = '';
    // 设置默认为五星
    this.postProductCommentRating = 5;
    // 吟唱评论容器
    this.isHiddenPostProductCommentContainer = true;
  }
}
