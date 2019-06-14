<template>
    <div>
        <div class="header">
            <div class="top">
                <i class="shezhi el-icon-setting"></i>
                <i class="kefu el-icon-service"></i>
                <i class="mes el-icon-tickets"></i>
                <span>个人中心</span>
            </div>
            <div class="rl" style="height:100px;">
                <p>
                    <router-link class="login" to="/login">
                       登陆
                    </router-link>
                    <router-link class="res" to="/register">
                        注册
                    </router-link>
                </p>
            </div>
            <p class="bott"></p>
        </div>
        <p class="center"></p>
        <div class="more">
            <p>
                <i class="el-icon-tickets ileft"></i>
                <span>我的订单</span>
                <i class="el-icon-arrow-right iright"></i>
            </p>
            <p>
                <i class="el-icon-shopping-cart-2 ileft"></i>
                <span>购物车</span>
                <i class="el-icon-arrow-right iright"></i>
            </p>
            <p>
                 <i class="el-icon-chat-dot-square ileft"></i>
                <span>点评</span>
                <i class="el-icon-arrow-right iright"></i>
            </p>
            <p>
                 <i class="el-icon-postcard ileft"></i>
                <span>电子发票</span>
                <i class="el-icon-arrow-right iright"></i>
            </p>
            <p>
                 <i class="el-icon-female ileft"></i>
                <span>我的足迹</span>
                <i class="el-icon-arrow-right iright"></i>
            </p>
            <p>
                 <i class="el-icon-money ileft"></i>
                <span>切换货币</span>
                <i class="el-icon-arrow-right iright"></i>
                <i class="rmb">人民币RBM</i>
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.header {
  height: 150px;
  .top {
    height: 40px;
    line-height: 40px;
    background: #1ac5fb;
    color: #fff;
    .shezhi {
      float: left;
      font-size: 18px;
      color: #ccc;
      width: 18px;
      height: 18px;
      margin: 10px 0 0 5px;
    }
    .mes {
      float: right;
      font-size: 18px;
      color: #ccc;
      width: 18px;
      height: 18px;
      margin: 10px 0px 0 5px;
    }
    .kefu {
      float: right;
      font-size: 18px;
      color: #ccc;
      width: 18px;
      height: 18px;
      margin: 10px 5px 0 5px;
    }
  }
  .bott {
    height: 20px;
    border-radius: 0 0 200px 200px;
  }
  .rl {
    overflow: hidden;
    height: 100px;
    text-align: center;
    p {
      height: 40px;
      margin-top: 30px;
      width: 100%;
      .login {
        display: inline-block;
        width: 34.9%;
        padding: 8px 0;
        margin: 0 3%;
        height: auto;
        overflow: hidden;
        -moz-border-radius: 3px;    
        -webkit-border-radius: 3px;
        border-radius: 3px;
        color: #fff;
        font-size: 18px;
        background: #1ece6d;
      }
      .res {
        display: inline-block;
        width: 34.9%;
        padding: 8px 0;
        margin: 0 3%;
        height: auto;
        overflow: hidden;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        color: #fff;
        font-size: 18px;
        background: #1ac5fb;
      }
    }
  }
}
.center{
    height: 10px;
    background: #eee;
}
.more{
    p{
        height: 41px;
        line-height: 41px;
        border-bottom: 1px solid #eee;
        margin:0 5px; 
        .ileft{
            float: left;
            width: 20px;
            height: 20px;
            font-size: 20px;
            margin: 10px 10px 0px; 
        }
        span{
            float: left;
            color:#666;
            font-size: 16px;
            margin-left: 20px;
        }
        .iright{
            float: right;
            width: 20px;
            height: 20px;
            font-size: 20px;
            margin: 10px 10px 0px; 

        }
        .rmb{
            float: right;
            color: #666;
        }
    }

}
</style>

