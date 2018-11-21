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
  NzCarouselModule
} from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StartsComponent } from './starts/starts.component';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

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
    StartsComponent
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
    NzCarouselModule
  ],
  providers: [
    // 配置 ng-zorro-antd 国际化
    {
      provide: NZ_I18N, useValue: zh_CN
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
