"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
const product_1 = require("../model/product");
const productList = [
    new product_1.Product(1, '第1个商品', 1.99, 3.5, '商品1描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['食品', '养生']),
    new product_1.Product(2, '第2个商品', 2.99, 2.5, '商品2描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['食品', '养生']),
    new product_1.Product(3, '第3个商品', 3.99, 1.5, '商品3描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['食品', '养生']),
    new product_1.Product(4, '第4个商品', 5.99, 3.5, '商品4描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['水果', '养生']),
    new product_1.Product(5, '第5个商品', 5.99, 5, '商品5描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['图书', '养生'])
];
exports.createProductWebSocketServer = () => {
    const wss = new WebSocket.Server({
        port: 3003
    });
    // 客户端订阅的商品 id
    const clientProductIdListMap = new Map();
    wss.on('connection', ws => {
        console.log('新的客户端连接');
        // 订阅客户端发送的消息
        ws.on('message', (message) => {
            let messageObj = JSON.parse(message);
            // 获取客户端已经订阅的商品 id
            let productIdList = clientProductIdListMap.get(ws) || [];
            // 存储客户端订阅的商品 id(已订阅的商品 id + 客户端推送的商品 id)
            clientProductIdListMap.set(ws, [...productIdList, messageObj.productId]);
        });
        ws.on('close', () => {
            // 移除客户端的订阅
            clientProductIdListMap.delete(ws);
            console.log('客户端断开');
        });
    });
    // 商品最新的报价
    const productBidMap = new Map();
    setInterval(() => {
        // 定时刷新商品最新的报价
        productList.forEach(product => {
            // 获取当前商品的报价
            let productBid = productBidMap.get(product.id) || product.price;
            let newProductBid = productBid + Math.random() * 5;
            // 存储新的商品的报价
            productBidMap.set(product.id, newProductBid);
        });
        // 定时向客户端发送最新的商品报价
        clientProductIdListMap.forEach((productIdList, ws) => {
            let data = productIdList.map(productId => ({
                productId,
                latestWatchProductBid: productBidMap.get(productId)
            }));
            // 向客户端发送最新的商品报价
            ws.send(JSON.stringify(data));
        });
    }, 2000);
};
//# sourceMappingURL=product-bid-web-socket-server.js.map