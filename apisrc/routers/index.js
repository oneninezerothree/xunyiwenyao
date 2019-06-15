const express = require('express');
const Router = express.Router();


const goodsRouter = require('./goods');
const cartRouter = require('./cart');
const listRouter = require('./list');
const regRouter = require('./reg');
const loginRouter = require('./login');
const uploadRouter = require('./upload');

// 跨域支持
Router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials",true);
    res.header("Access-Control-Max-Age: 1728000");
    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
});

// 格式化传入的参数
Router.use(express.json(),express.urlencoded({ extended: false }));

// 配置路由信息
Router.use('/goods',goodsRouter);
Router.use('/cart',cartRouter);
Router.use('/list',listRouter);
Router.use('/reg',regRouter);
Router.use('/upload',uploadRouter);
Router.use('/login',loginRouter);

module.exports = Router;
