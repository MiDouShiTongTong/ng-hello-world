import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../service/web-socket/web-socket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.scss']
})
export class WebSocketComponent implements OnInit {

  constructor(
    private webSocketService: WebSocketService
  ) {
  }

  ngOnInit() {
    this.webSocketService.createObservableSocket('ws://127.0.0.1:8005')
      .subscribe(
        data => console.log(data),
        error => console.log(error),
        () => console.log('流结束')
      );
  }

  sendMessage(): void {
    this.webSocketService.sendMessage('hello server');
  }

}
