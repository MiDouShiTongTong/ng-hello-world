import { Injectable } from '@angular/core';
import { Product } from '../../model/Product';
import { Comment } from '../../model/Comment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [
    new Product(1, '第1个商品', 1.99, 3.5, '商品1描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['食品', '养生']),
    new Product(2, '第2个商品', 2.99, 2.5, '商品2描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['男鞋', '养生']),
    new Product(3, '第3个商品', 3.99, 1.5, '商品3描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['女鞋', '养生']),
    new Product(4, '第4个商品', 5.99, 3.5, '商品4描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['水果', '养生']),
    new Product(5, '第5个商品', 5.99, 5, '商品5描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['图书', '养生'])
  ];

  commentList: Comment[] = [
    new Comment(1, 1, '小陈', '好', 2, '2001-01-01 03:03:03'),
    new Comment(2, 1, '小杨', '很好', 3, '2001-01-01 03:03:03'),
    new Comment(3, 1, '小陈', '非常好', 5, '2001-01-01 03:03:03'),
    new Comment(4, 2, '小杨', '好', 3, '2001-01-01 03:03:03'),
    new Comment(5, 2, '小陈', '很好', 2, '2001-01-01 03:03:03'),
  ];

  constructor() {
  }

  getProductList(): Product[] {
    return this.productList;
  }

  getProductById(id: number): Product {
    return this.productList.find((product: Product) => product.id === id);
  }

  getCommentListByProductId(productId: number): Comment[] {
    return this.commentList.filter((comment: Comment) => comment.productId === productId);
  }
}
