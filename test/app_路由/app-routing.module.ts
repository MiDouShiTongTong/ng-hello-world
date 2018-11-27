import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCommentComponent } from './product/product-comment/product-comment.component';
import { ChatComponent } from './chat/chat.component';
import { SignInCanActivate } from './router/sign-in.can-activate';
import { UnSaveCanDeactivate } from './router/un-save.can-deactivate';
import { ProductResolve } from './router/product.resolve';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    // // 进入路由的守卫
    // canActivate: [
    //   SignInGuard
    // ],
    // // 离开路由的守卫
    // canDeactivate: [
    //   UnSaveGuard
    // ],
    // resolve 守卫, 用于预加载需要的数据
    resolve: {
      // key 为任意
      product: ProductResolve
    },
    children: [
      {
        path: '',
        component: ProductDetailComponent
      },
      {
        path: 'comment/:id',
        component: ProductCommentComponent
      }
    ]
  },
  {
    path: 'chat',
    component: ChatComponent,
    outlet: 'auxiliary'
  },
  {
    path: '**',
    component: ErrorNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SignInCanActivate,
    UnSaveCanDeactivate,
    ProductResolve
  ]
})
export class AppRoutingModule {
}
