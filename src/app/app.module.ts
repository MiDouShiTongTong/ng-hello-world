import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SearchOutline } from '@ant-design/icons-angular/icons';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
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
  NzListModule,
  NzIconModule,
  NZ_ICONS
} from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SearchComponent } from './component/search/search.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { ProductComponent } from './component/product/product.component';
import { StartsComponent } from './component/starts/starts.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { HomeComponent } from './component/home/home.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { FilterPipe } from './pipe/filter/filter.pipe';

registerLocaleData(zh);
const icons: IconDefinition[] = [ SearchOutline ];

@NgModule({
  // 只能声明组件, 指令
  declarations: [
    FilterPipe,
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
    // 表单模块
    FormsModule,
    // 响应式模块
    ReactiveFormsModule,
    // ng-zorro-antd 模块
    NzGridModule,
    NzMenuModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCarouselModule,
    NzCardModule,
    NzListModule,
    NzIconModule
  ],
  providers: [
    // 配置 ng-zorro-antd 国际化
    {provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
