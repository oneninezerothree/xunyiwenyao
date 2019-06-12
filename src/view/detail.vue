<template>
  <div id="aq-detail">
    <div class="aq-daohang">
        快速导航
    </div>
    <div class="ad-top">
      <i class="el-icon-arrow-left" @click="goback"></i>
      <span>产品详情</span>
    </div>
    <div class="neirongbox">
      <div class="lunbobox">
        <el-carousel height="6.5rem">
          <el-carousel-item v-for="(item,index) in lunbo" :key="index">
            <img :src="item.img">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="zongbox">
        <div class="jigebox">
          <p>【中文讲解+国际自助午餐】米尔福德峡湾一日游(皇后镇或蒂阿瑙出发+透明玻璃巴士+豪华游船)</p>
          <div>
            <div class="jiage">
              <span class="red">￥</span>
              <span class="red">606.43</span>
              <span class="red">起</span>
              <span class="blue">起价说明</span>
            </div>
            <span>已售18347</span>
          </div>
          <p class="youhui">
            <span>优惠</span>
            <span class="red">分享返现</span>
            <span class="red">点评返现</span>
            <span class="red">7天价保</span>
            <span>></span>
          </p>
          <p>
            <span>红包</span>
            <span class="red">您有机会获得50元红包，戳这里</span>
          </p>
        </div>
        <div class="xinchengbox">
          <div class="topbox">行程概要</div>
          <p>顶级观光巴士+豪华游轮带您360度欣赏世界第八大奇迹米尔福德峡湾全景</p>
        </div>
        <div class="dianpingbox">
          <div class="topbox">
            <span>行程点评(20)</span>
            <span>></span>
          </div>
          <div class="neirongbox">
            <div class="more">
              查看全部点评
              <span>></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="aq-footer">
      <div class="kefu">
        <i class="el-icon-service"></i>
        <span>客服</span>
      </div>
      <div class="gouwuche">加入购物车</div>
      <div class="yuding">立即预定</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunbo: [
        { img: require("../assets/img/lunbo1.jpg") },
        { img: require("../assets/img/lunbo2.jpg") },
        { img: require("../assets/img/lunbo3.jpg") }
      ]
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  created() {
    this.$store.state.isshowtime = false;
  }
};
</script>
<style scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
#aq-detail .aq-daohang{
    width: 120px;
    height: 120px;
    background: #fff;
    border-radius: 50%;
    font-size: 30px;
    line-height: 120px;
    position: fixed;
    bottom:400px;
    right:20px;
    border:2px solid #ccc;
}
#aq-detail .ad-top {
  height: 84px;
  font-size: 30px;
  line-height: 84px;
  font-weight: 700;
  position: fixed;
  z-index: 100;
  width: 750px;
  color: #fff;
  background-color: rgba(200, 200, 200, 0.1);
}
#aq-detail .ad-top i {
  position: absolute;
  top: 0;
  left: 40px;
  display: block;
  width: 60px;
  height: 84px;
  line-height: 84px;
}
#aq-detail .el-carousel__container {
  height: 1000px;
}
#aq-detail .el-carousel__item img {
  width: 750px;
}
#aq-detail .zongbox {
  padding: 20px;
}
#aq-detail .jigebox {
  font-size: 25px;
  line-height: 45px;
  text-align: left;
  color: #000;
}
#aq-detail .jigebox .jiage {
  vertical-align: bottom;
  font-size: 30px;
  font-weight: 500;
}
#aq-detail .jigebox .jiage span:nth-of-type(2) {
  font-weight: 700;
  font-size: 60px;
}
#aq-detail .jigebox > div:nth-of-type(1) {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
#aq-detail .jigebox .youhui{
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
}
#aq-detail .jigebox .youhui span{
    border:1px solid red;
    font-size: 25px;
    display: block;
    padding:5px;
    margin:0 10px;
    border-radius: 10px;
}
#aq-detail .jigebox .youhui span:nth-of-type(1),#aq-detail .jigebox .youhui span:nth-of-type(5){
    border:none;
}
#aq-detail .jigebox .youhui span:nth-of-type(5){
    margin-left: auto;
}
#aq-detail .aq-footer{
    position: fixed;
    width:750px;
    height: 100px;
    background: pink;
    bottom:0;
    left:0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    font-size: 40px;
    line-height: 100px;
}
#aq-detail .aq-footer .kefu{
    flex:1;
    display: flex;
    flex-direction: column;
    font-size: 35px;
    line-height: 0;
    justify-content: space-around;
    background: #fff;
    color:skyblue;
}
#aq-detail .aq-footer .gouwuche{
    flex:3;
    background: skyblue;
    color:#fff;
}
#aq-detail .aq-footer .yuding{
    flex:3;
    background: red;
    color:#fff;
}
</style>
