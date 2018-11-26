import * as Koa from 'koa';
// 跨域
import * as cors from 'koa2-cors';
// 路由
import productRouter from './controller/product';

// koa 实例
const app = new Koa();
// 设置跨域
app.use(cors());
// 注册路由
app.use(productRouter);
// 启动服务器
app.listen(8003);
console.log('Server running on port 8003');
