import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  ws: WebSocket;

  constructor() {

  }

  createObservableSocket(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    // 创建流对象
    return new Observable(observe => {
      this.ws.onmessage = event => observe.next(event.data);
      this.ws.onerror = event => observe.error(event);
      this.ws.onclose = event => observe.complete();
    });
  }

  sendMessage(message: string): void {
    this.ws.send(message);
  }
}
