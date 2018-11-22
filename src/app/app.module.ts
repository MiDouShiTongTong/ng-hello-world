import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {
  NZ_I18N,
  zh_CN,
  NzGridModule,
  NzMenuModule,
  NzFormModule,
  NzInputModule,
  NzSelectModule,
  NzButtonModule,
  NzCarouselModule,
  NzCardModule,
  NzListModule
} from 'ng-zorro-antd';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SearchComponent } from './component/search/search.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { ProductComponent } from './component/product/product.component';
import { StartsComponent } from './component/starts/starts.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { HomeComponent } from './component/home/home.component';

registerLocaleData(zh);

@NgModule({
  // 只能声明组件, 指令
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StartsComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    // 浏览器模块
    BrowserModule,
    // 路由模块
    AppRoutingModule,
    // 动画模块,
    BrowserAnimationsModule,
    // ng-zorro-antd 模块
    NzGridModule,
    NzMenuModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCarouselModule,
    NzCardModule,
    NzListModule
  ],
  providers: [
    // 配置 ng-zorro-antd 国际化
    {
      provide: NZ_I18N, useValue: zh_CN
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
