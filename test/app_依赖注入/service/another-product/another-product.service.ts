import { Injectable } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from 'src/app/model/Product';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherProductService implements ProductService {
  constructor(
    private loggerService: LoggerService
  ) {
  }

  getProduct(): Product {
    this.loggerService.log('test222');
    return new Product(2, '商品2', '这是商品2', 50);
  }
}
