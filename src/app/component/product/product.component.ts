import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime} from 'rxjs/operators';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  searchNameFormControl: FormControl = new FormControl();
  searchName: string;
  productList: Product[];

  constructor(
    public productService: ProductService
  ) {
    // 订阅 searchNameFormControl
    this.searchNameFormControl.valueChanges
      .pipe(
        debounceTime(100)
      )
      .subscribe(value => this.searchName = value);
  }

  ngOnInit() {
    this.productList = this.productService.getProductList();
  }
}
