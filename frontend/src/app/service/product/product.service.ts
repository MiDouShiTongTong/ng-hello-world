import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/Product';
import { Comment } from '../../model/Comment';
import { HttpService } from '../http/http.service';
import { ProductSearchParams } from '../../model/product-search-params';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // 商品搜索流
  productSearchEventEmitter: EventEmitter<ProductSearchParams> = new EventEmitter<ProductSearchParams>();

  constructor(
    private httpService: HttpService
  ) {
  }

  getProductCategoryList(): string[] {
    return ['食品', '水果', '图书'];
  }

  asyncGetProductList(params?: object): Observable<Product[]> {
    return this.httpService.get('/product', params);
  }

  asyncGetProductById(id: number): Observable<Product> {
    return this.httpService.get(`/product/${id}`);
  }

  asyncGetCommentListByProductId(productId: number): Observable<Comment[]> {
    return this.httpService.get(`/product/${productId}/comment`);
  }
}
