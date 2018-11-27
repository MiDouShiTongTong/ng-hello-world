"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const product_1 = require("../model/product");
const comment_1 = require("../model/comment");
const router = new Router();
const productList = [
    new product_1.Product(1, '第1个商品', 1.99, 3.5, '商品1描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['食品', '养生']),
    new product_1.Product(2, '第2个商品', 2.99, 2.5, '商品2描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['食品', '养生']),
    new product_1.Product(3, '第3个商品', 3.99, 1.5, '商品3描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['食品', '养生']),
    new product_1.Product(4, '第4个商品', 5.99, 3.5, '商品4描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['水果', '养生']),
    new product_1.Product(5, '第5个商品', 5.99, 5, '商品5描述', 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', ['图书', '养生'])
];
const commentList = [
    new comment_1.Comment(1, 1, '小陈', '好', 2, '2001-01-01 03:03:03'),
    new comment_1.Comment(2, 1, '小杨', '很好', 3, '2001-01-01 03:03:03'),
    new comment_1.Comment(3, 1, '小陈', '非常好', 5, '2001-01-01 03:03:03'),
    new comment_1.Comment(4, 2, '小杨', '好', 3, '2001-01-01 03:03:03'),
    new comment_1.Comment(5, 2, '小陈', '很好', 2, '2001-01-01 03:03:03'),
];
router.get('/product', async (ctx) => {
    let productListTemp = productList;
    // 查询参数
    const productSearchParams = ctx.query;
    Object.keys(productSearchParams).forEach(key => {
        switch (key) {
            case 'productName':
                productListTemp = productListTemp.filter(product => product.name.indexOf(productSearchParams[key]) > -1);
                break;
            case 'productPrice':
                productListTemp = productListTemp.filter(product => product.price <= productSearchParams[key]);
                break;
            case 'productCategory':
                if (parseInt(productSearchParams[key], 10) !== 0) {
                    productListTemp = productListTemp.filter(product => product.categoryList.indexOf(productSearchParams[key]) > -1);
                }
                break;
        }
    });
    ctx.body = {
        code: 0,
        data: productListTemp
    };
});
router.get('/product/:id', async (ctx) => {
    ctx.body = {
        code: 0,
        data: productList.find(product => product.id === parseInt(ctx.params.id))
    };
});
router.get('/product/:id/comment', async (ctx) => {
    ctx.body = {
        code: 0,
        data: commentList.filter((comment) => comment.productId === parseInt(ctx.params.id))
    };
});
exports.default = router.routes();
//# sourceMappingURL=product.js.map