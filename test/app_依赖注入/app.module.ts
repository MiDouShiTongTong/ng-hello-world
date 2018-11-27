import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product1Component } from './component/product1/product1.component';
import { ProductService } from './service/product/product.service';
import { Product2Component } from './component/product2/product2.component';
import { LoggerService } from './service/logger/logger.service';
import { AnotherProductService } from './service/another-product/another-product.service';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // 在模块中声明 provide
    // 该模块的所有组件都可见
    {
      provide: ProductService,
      // 从 deps 寻找对应的 provide 注入
      // 工厂提供器
      useFactory: (loggerService: LoggerService, appConfig) => {
        if (appConfig.isDev) {
          return new ProductService();
        } else {
          return new AnotherProductService(loggerService);
        }
      },
      // 注入到工厂方法的参数中
      deps: [
        LoggerService,
        // 注入 APP_CONFIG provide
        'APP_CONFIG'
      ]
    },
    LoggerService,
    {
      // 值声明提供器
      provide: 'APP_CONFIG',
      useValue: {
        isDev: false
      }
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
