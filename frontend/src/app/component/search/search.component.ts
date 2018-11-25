import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  productCategoryList: string[];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    // 初始化表单模型
    this.searchForm = this.fb.group({
      productName       : [null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      productPrice      : [null, this.positiveNumberValidator],
      productCategory   : [0]
    });
    // 初始化产品分类
    this.productCategoryList = this.productService.getProductCategoryList();
  }

  /**
   * 商品价格表单验证
   *
   * @param control 依赖注入
   */
  positiveNumberValidator(control: FormControl): any {
    if (!control.value) {
      return '';
    }
    const number = parseInt(control.value, 10);
    if (number < 0) {
      return {
        positiveNumber: true
      };
    }
    return null;
  }

  /**
   * 提交搜索表单
   *
   */
  submitSearchForm(): void {
    Object.keys(this.searchForm.controls).forEach(formKey => {
      // 标记为脏值
      this.searchForm.controls[formKey].markAsDirty();
      // 触发表单的验证
      this.searchForm.controls[formKey].updateValueAndValidity();
    });
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
    }
  }
}
