<template>
  <div id="aq-detail">
    <div class="aq-daohang">
        <div class="itembox" v-for="(item,i) in daohang" :key="i" @click="gotopage(item.aqpath)" v-show="theround==true">
          <i :class="item.iconclass"></i>
          <span>{{item.font}}</span>
        </div>
        <div class="itembox" @click="togolesmall">
          <i class="el-icon-arrow-down"></i>
        </div>
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
          <p>{{wenzi.title}}</p>
          <div>
            <div class="jiage">
              <span class="red">￥</span>
              <span class="red">{{wenzi.money}}</span>
              <span class="blue">起价说明</span>
            </div>
            <span>{{wenzi.sale}}</span>
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
          <div class="topbox">
            <i class="el-icon-s-opportunity"></i>
            行程概要
            </div>
          <p>{{wenzi.summary}}</p>
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
      <div class="gouwuche" @click="addtocart">加入购物车</div>
      <div class="yuding">立即预定</div>
    </div>
  </div>
</template>
<script>
import request from '../libs/request';
import { constants } from 'fs';
export default {
  data() {
    return {
      lunbo: [],
      wenzi:{},
      xuhao:"",
      daohang:[
        {iconclass:"el-icon-s-home",font:"首页",aqpath:"/"},
        {iconclass:"el-icon-shopping-cart-1",font:"购物车",aqpath:"/aqcart"},
        {iconclass:"el-icon-search",font:"搜索",aqpath:"/"},
        {iconclass:"el-icon-s-custom",font:"个人中心",aqpath:"/aqme"}
      ],
      theround:true
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    gotopage(aqpath){
        this.$router.push(aqpath)
    },
    addtocart(){
      this.$router.push('/addtocart')
    },
    togolesmall(){
      this.theround = !this.theround;
    },
    async getlunbo() {
      const { g, p } = request;
      const data = await g({
        url: 'https://www.easy-mock.com/mock/5d00e9c806c5a82ca8aabe7c/aiqu/detail/lunbo/'+this.xuhao,
      });
      this.lunbo = data.data.map((item)=>{
        return {img:item.lunbo};
      });
    },
    async getwenzi() {
      const { g, p } = request;
      const data = await g({
        url: 'https://www.easy-mock.com/mock/5d00e9c806c5a82ca8aabe7c/aiqu/detail/'+this.xuhao,
      });
      this.wenzi = data.data[0]
    },
  },
  created() {
    this.$store.state.isshowtime = false;
    this.xuhao = this.$route.query.id;
    this.getlunbo();
    this.getwenzi();
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
.disappear{

}
#aq-detai .neirongbox{
  background: red;
}
#aq-detail .aq-daohang{
    position: fixed;
    bottom:400px;
    right:20px;
    border:3px solid #ccc;
    background: #fff;
    border-radius: 50px;
    z-index: 10000;
}
#aq-detail .aq-daohang .itembox{
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
}
#aq-detail .aq-daohang .itembox i{
  font-size: 40px;
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
#aq-detail .xinchengbox{
  background: #fff;
  margin:20px 0;
}
#aq-detail .xinchengbox .topbox{
  font-size: 40px;
  line-height: 60px;
  box-sizing: border-box;
  padding:0 10px;
  display: flex;
  flex-direction: row;
}
#aq-detail .xinchengbox .topbox i{
  color:skyblue;
  font-size: 35px;
  line-height: 60px;
}
#aq-detail .xinchengbox p{
  text-align: left;
  font-size: 30px;
  line-height: 45px;
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
