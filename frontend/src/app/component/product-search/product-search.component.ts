import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  productSearchForm: FormGroup;
  productCategoryList: string[];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    // 初始化表单模型
    this.productSearchForm = this.fb.group({
      productName:      [null, [Validators.maxLength(20)]],
      productPrice:     [null, this.positiveNumberValidator],
      productCategory:  [0]
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
    Object.keys(this.productSearchForm.controls).forEach(formKey => {
      // 标记为脏值
      this.productSearchForm.controls[formKey].markAsDirty();
      // 触发表单的验证
      this.productSearchForm.controls[formKey].updateValueAndValidity();
    });
    if (this.productSearchForm.valid) {
      // 构建商品搜索条件
      const productSearchFormValue = this.productSearchForm.value;
      Object.keys(productSearchFormValue).forEach(key => {
        if (productSearchFormValue[key] === null) {
          // 删除空字段
          delete productSearchFormValue[key];
        }
      });
      console.log(productSearchFormValue);
      // 发布商品搜索流
      this.productService.productSearchEventEmitter.emit(productSearchFormValue);
    }
  }
}
