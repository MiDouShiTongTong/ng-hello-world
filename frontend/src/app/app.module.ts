import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SearchOutline, StarFill, StarOutline } from '@ant-design/icons-angular/icons';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {
  NZ_I18N,
  zh_CN,
  NZ_ICONS
} from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { IconDefinition } from '@ant-design/icons-angular';

registerLocaleData(zh);
const icons: IconDefinition[] = [ SearchOutline, StarFill, StarOutline ];

@NgModule({
  // 只能声明组件, 指令
  declarations: [
    AppComponent
  ],
  imports: [
    // 浏览器模块
    BrowserModule,
    // 路由模块
    AppRoutingModule,
    // 动画模块,
    BrowserAnimationsModule,
    // http 模块
    HttpClientModule
  ],
  providers: [
    // 配置 ng-zorro-antd 国际化
    {provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICONS, useValue: icons },
    // hash 路由
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
