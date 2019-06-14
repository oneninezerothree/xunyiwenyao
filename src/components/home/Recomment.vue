<template>
    <div class="recomment">
        <div class="title">
            <i class="el-icon-place" style="color:red"></i>
            <span class="palce">热门目的地</span>
            <span class="more">更多</span>  
            <i class="el-icon-arrow-right"></i>
        </div>  
        <div class="content">
            <ul>
                <li v-for="(a,index) in remdata" :key="index" @click="gotdetail(11)" >
                        <img :src="a.imgs" alt="">
                        <p class="contcenter" v-text="a.texts"></p>
                        <p class="confoot">
                            <span class="price" style="color:red" v-text="a.price">
                                <i style="color:#ccc">起</i>
                            </span>
                            <span class="right">
                                <i style="color:#ccc" v-text="a.much">111</i>
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
      const { g, p } = request;
      const data = await g({
        url:"https://www.easy-mock.com/mock/5cff3ac53d58fe0e71bdb76f/example/remdata"
      })
      this.remdata = [...this.remdata , ...data.data.remdata];
    },
    gotdetail(num){
        this.$router.push({path: '/detail/', query:{id:num}})
    },
  }
};
</script>
<style lang="scss" scoped>
.recomment {
  padding: 10px 0;
  background: #fff;
  .title {
    border-bottom: 1px solid #eee;
    height: 41px;
    line-height: 41px;
    .palce {
      float: left;
      font-size: 16px;
      color: #333;
      padding-left: 10px;
      font-weight: 700;
    }
    .el-icon-place {
      float: left;
      width: 20px;
      height: 18px;
      font-size: 18px;
      margin: 10px 0 0 6px;
      font-weight: 700;
    }
    .more {
      margin-left: 195px;
      color: #999;
      font-size: 16px;
      height: 100%;
    }
    .el-icon-arrow-right {
      float: right;
      width: 18px;
      height: 20px;
      margin-top: 13px;
    }
  }
  .content {
    ul {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: space-around;
      li {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        flex: 0 1 45%;
        padding: 14px 2%;
        float: left;
        background: #fff;
        border-radius: 6px;
        margin: 0 4px 8px 4px;
        padding: 8px 12px 8px 12px;
        height: 190px;
        box-shadow: 0px 6px 20px 0px rgba(121, 152, 215, 0.4);
        img {
          display: block;
          width: 100%;
          height: 60%;
          background: #999;
          margin-bottom: 10px;
        }
        .contcenter {
          height: 36px;
          font-size: 13px;
          color: #000;
          line-height: 17px;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          margin: 5px 0;
          text-align: left;
        }
        .confoot {
          height: 24px;
          font-size: 12px;
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
