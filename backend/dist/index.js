"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
// 跨域
const cors = require("koa2-cors");
// 路由
const product_1 = require("./controller/product");
const product_bid_web_socket_server_1 = require("./controller/product-bid-web-socket-server");
// koa 实例
const app = new Koa();
// 设置跨域
app.use(cors());
// 注册路由
app.use(product_1.default);
// 商品 WebSocket 服务
product_bid_web_socket_server_1.createProductWebSocketServer();
// 启动服务器
app.listen(3002);
console.log('Server running on port 3002');
//# sourceMappingURL=index.js.map