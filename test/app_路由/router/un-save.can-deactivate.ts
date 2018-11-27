import { CanDeactivate } from '@angular/router';
import { ProductComponent } from '../product/product.component';
export class UnSaveCanDeactivate implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent): boolean {
    return window.confirm('确定离开？');
  }
}
