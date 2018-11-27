import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/Product';
import { HttpService } from '../../service/http/http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  dataSource: Observable<any>;

  productList: Product[];

  constructor(
    private httpService: HttpService
  ) {

  }

  ngOnInit() {
    this.httpService.get('/product')
      .subscribe(data => {
        this.productList = data['data'];
      });
  }
}
