import * as Koa from 'koa';
// 跨域
import * as cors from 'koa2-cors';
// 路由
import productRouter from './controller/product';
import { createProductWebSocketServer } from './controller/product-bid-web-socket-server';

// koa 实例
const app = new Koa();

// 设置跨域
app.use(cors());

// 注册路由
app.use(productRouter);

// 商品 WebSocket 服务
createProductWebSocketServer();


// 启动服务器
app.listen(3002);
console.log('Server running on port 3002');
