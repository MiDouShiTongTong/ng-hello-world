import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductBidWebSocketService {
  ws: WebSocket;

  constructor() {

  }

  createWebSocketAndObservable(url: string, productId: number): Observable<any> {
    this.ws = new WebSocket(url);
    // 创建流对象
    return Observable.create(observe => {
      // 订阅 WebSocket  事件 触发 Observable 事件
      this.ws.onmessage = event => observe.next(event.data);
      this.ws.onerror = event => observe.error(event);
      this.ws.onclose = () => observe.complete();
      // 连接成功订阅商品最新报价
      this.ws.onopen = event => this.sendMessage({ productId });
      // Observable 取消时触发
      return () => this.ws.close();
    });
  }

  sendMessage(message: object): void {
    this.ws.send(JSON.stringify(message));
  }

}
