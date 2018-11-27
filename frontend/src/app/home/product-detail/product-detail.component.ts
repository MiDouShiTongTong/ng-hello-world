import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../model/product';
import { Comment } from '../../model/comment';
import { environment } from '../../../environments/environment';
import { ProductBidWebSocketService } from 'src/app/service/product-bid-web-socket/product-bid-web-socket.service';

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
  isWatchProductBid: boolean; // 是否已关注当前商品报价
  latestWatchProductBid: number; // 当前商品的最新报价
  watchProductBidSubscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private productService: ProductService,
    private productBidWebSocketService: ProductBidWebSocketService
  ) {
    // 初始化默认数据
    this.postProductCommentRating = 5; // 默认五星, 通过子组件改变
    this.isHiddenPostProductCommentContainer = true; // 默认隐藏评论容器
    this.productCommentList = [];
    this.isWatchProductBid = false;
    this.latestWatchProductBid = 0;
  }

  ngOnInit() {
    const productId = this.route.snapshot.params.id * 1;
    // 初始化商品, 商品评论
    this.productService.asyncGetProductById(productId).subscribe(
      result => {
        this.product = result['data'];
        // 修改商品的最新报价 为 当前商品的价格
        this.latestWatchProductBid = this.product.price;
      }
    );
    this.productService.asyncGetCommentListByProductId(productId).subscribe(
      result => this.productCommentList = result['data']
    );
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
    // 隐藏评论容器
    this.isHiddenPostProductCommentContainer = true;
  }

  /**
   * 关注商品价格
   *
   */
  watchProductBid() {
    if (this.isWatchProductBid) {
      // 取消订阅
      this.watchProductBidSubscription.unsubscribe();
      this.isWatchProductBid = false;
    } else {
      // 新增订阅
      this.isWatchProductBid = true;
      this.watchProductBidSubscription =
        this.productBidWebSocketService.createWebSocketAndObservable(`${environment.PRODUCT_BID_WEB_SOCKET_API_ROOT}`, this.product.id)
        .pipe(
          map(data => JSON.parse(data))
        )
        .subscribe(
          productBidList => {
            // 更新商品报价
            const productBid = productBidList.find(productBidTmp => productBidTmp.productId === this.product.id);
            this.latestWatchProductBid = productBid.latestWatchProductBid;
          }
        );
    }
  }
}
