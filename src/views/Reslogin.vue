<template>
    <div>
        <div class="header">
            <div class="top">
                <i class="shezhi el-icon-setting"></i>
                <i class="kefu el-icon-service"></i>
                <i class="mes el-icon-tickets"></i>
                <span v-text="$store.state.loginUserName" style="padding-left: 2.5rem;"></span>
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
                <router-link to="/aqorder">
                    <i class="el-icon-tickets ileft"></i>
                    <span>我的订单</span>
                    <i class="el-icon-arrow-right iright"></i>

                </router-link>
            </p>
            <p>
                <router-link to="/aqcart">
                    <i class="el-icon-shopping-cart-2 ileft"></i>
                    <span>购物车</span>
                    <i class="el-icon-arrow-right iright"></i>
                </router-link>
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
            <p style=" text-align: right;padding-right:10px;color:red" @click="goOut()" v-if="$store.state.isShowOut">
              退出
            </p>
        </div>
    </div>
</template>
<script>
export default {
  created() {
    this.$store.state.isshowtime = true;
    this.$store.state.pages = this.$route.path;
  },
  methods: {
    goOut() {
      this.$store.state.users = "";
      localStorage.removeItem("useringname");
      this.$store.state.isShowOut = false;
      this.$store.state.loginUserName = '个人中心';
    },
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 300px;
  font-size: 36px;
  .top {
    height: 80px;
    line-height: 80px;
    background: #1ac5fb;
    color: #fff;
    .shezhi {
      float: left;
      font-size: 36px;
      color: #ccc;
      width: 36px;
      height: 36px;
      margin: 20px 0 0 10px;
    }
    .mes {
      float: right;
      font-size: 36px;
      color: #ccc;
      width: 36px;
      height: 36px;
      margin: 20px 0px 0 10px;
    }
    .kefu {
      float: right;
      font-size: 36px;
      color: #ccc;
      width: 36px;
      height: 36px;
      margin: 20px 10px 0 10px;
    }
  }
  .bott {
    height: 40px;
    border-radius: 0 0 400px 400px;
  }
  .rl {
    overflow: hidden;
    height: 200px;
    text-align: center;
    p {
      height: 80px;
      margin-top: 60px;
      width: 100%;
      .login {
        display: inline-block;
        width: 34.9%;
        padding: 16px 0;
        margin: 0 3%;
        height: auto;
        overflow: hidden;
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        border-radius: 6px;
        color: #fff;
        font-size: 36px;
        background: #1ece6d;
      }
      .res {
        display: inline-block;
        width: 34.9%;
        padding: 16px 0;
        margin: 0 3%;
        height: auto;
        overflow: hidden;
        -moz-border-radius: 6px;
        -webkit-border-radius:6px;
        border-radius: 6px;
        color: #fff;
        font-size: 36px;
        background: #1ac5fb;
      }
    }
  }
}
.center {
  height: 20px;
  background: #eee;
}
.more {
  p {
    height: 82px;
    line-height: 82px;
    border-bottom: 2px solid #eee;
    margin: 0 10px;
    .ileft {
      float: left;
      width: 4px;
      height: 40px;
      font-size: 40px;
      margin: 20px 20px 0px;
    }
    span {
      float: left;
      color: #666;
      font-size: 32px;
      margin-left: 40px;
    }
    .iright {
      float: right;
      width:40px;
      height: 40px;
      font-size: 40px;
      margin: 20px 20px 0px;
    }
    .rmb {
      float: right;
      color: #666;
    }
  }
}
</style>

