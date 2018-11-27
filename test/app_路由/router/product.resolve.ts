import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolve implements Resolve<ProductComponent> {
  constructor(
    private router: Router
  ) {

  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    if (parseInt(route.params.id, 10) === 1) {
      return new Product(1, '商品1');
    } else {
      this.router.navigate(['/home']);
      return null;
    }
  }
}

export class Product {
  constructor(
    public id: number,
    public name: string
  ) {

  }
}
