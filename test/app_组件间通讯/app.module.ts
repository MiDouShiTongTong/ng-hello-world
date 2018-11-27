import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './component/order/order.component';
import { StockComponent } from './component/stock/stock.component';
import { StockOrderComponent } from './component/stock-order/stock-order.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    StockComponent,
    StockOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
