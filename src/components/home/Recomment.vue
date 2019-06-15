<template>
    <div class="recomment">
        <div class="title">
            <i class="el-icon-place" style="color:red"></i>
            <span class="palce">精品推荐</span>
            <span class="more">更多</span>  
            <i class="el-icon-arrow-right"></i>
        </div>  
        <div class="content">
            <ul>
                <li v-for="(a,index) in remdata" :key="index" @click="gotdetail(a.shopid)" >
                        <img :src="a.imgs[0].lunbo" alt="">
                        <p class="contcenter" v-text="a.title"></p>
                        <p class="confoot">
                            ￥
                            <span class="price" style="color:red" v-text="a.price">
                                <!-- <i style="color:#ccc">起</i> -->
                            </span>
                            <i style="color:red">起</i>
                            <span class="right">
                                <i style="color:#ccc" v-text="a.salenum">111</i>
                                人去过
                            </span>
                        </p>
                 
                </li>
            </ul>
        </div>
    </div>    
</template>
<script>
import request from "../../libs/request";
export default {
  data() {
    return {
     remdata: [],
    };
  },
  created() {
    this.getShopList();
  },
  methods: {
    async getShopList() {
      const { g, p, modify} = request;
      const data = await g({
        url:"http://localhost:1901/goods"
      })
      // this.remdata = [...this.remdata , ...data.data.remdata];
      this.remdata = data.data.data;
      console.log(this.remdata[0].price);
      
    },
    gotdetail(num){
        this.$router.push({path: '/detail/', query:{id:num}})
    },
  }
};
</script>
<style lang="scss" scoped>
.recomment {
  background: #fff;
  margin-top:20px;
  .title {
    border-bottom: 2px solid #eee;
    height: 82px;
    line-height: 82px;
    .palce {
      float: left;
      font-size: 32px;
      color: #333;
      padding-left: 20px;
      font-weight: 700;
    }
    .el-icon-place {
      float: left;
      width: 40px;
      height: 36px;
      font-size: 36px;
      margin: 20px 0 0 12px;
      font-weight: 700;
    }
    .more {
      margin-left: 390px;
      color: #999;
      font-size: 32px;
      height: 100%;
    }
    .el-icon-arrow-right {
      float: right;
      width: 36px;
      height: 40px;
      margin-top: 26px;
    }
  }
  .content {
    padding:20px 10px;
    ul {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: space-around;
      padding:20px 0;
      li {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        flex: 0 1 45%;
        padding: 28px 2%;
        float: left;
        background: #fff;
        border-radius:12px;
        height: 450px;
        box-shadow: 0px 12px 40px 0px rgba(121, 152, 215, 0.4);
        margin:20px 0;
        img {
          display: block;
          width: 100%;
          height: 60%;
          background: #999;
          margin-bottom: 20px;
        }
        .contcenter {
          height: 65px;
          font-size: 26px;
          color: #000;
          line-height: 34px;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          margin: 10px 0;
          text-align: left;
        }
        .confoot {
          height: 48px;
          font-size: 24px;
          color: #666;
          text-align: left;
          .right{
              float: right;
          }
        }
      }
    }
  }
}
</style>
