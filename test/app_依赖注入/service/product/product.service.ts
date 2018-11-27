import { Injectable } from '@angular/core';
import { Product } from '../../model/product';

// 声明 Injectable 装饰器, 无需定义在模块的 providers 中, 如果 providers 中定义了会覆盖
// 只有声明了 Injectable 装饰器 service 才能注入到其他服务或注入其他服务
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProduct(): Product {
    return new Product(1, '商品1', '这是商品1', 5);
  }
}

