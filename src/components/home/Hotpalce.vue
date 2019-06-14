<template>
    <div class="hotpalce">
        <div class="title">
            <i class="el-icon-place" style="color:red"></i>
            <span class="palce">热门目的地</span>
            <span class="more">更多</span>
            <i class="el-icon-arrow-right"></i>
        </div>
        <div class="imgbox">
            <ul>
                <li v-for="(a,index) in hotsale" :key="index"  @click="gotdetail(index)">
                    <span v-text="a.texts">圣灵群岛</span>
                        <img :src="a.imgs" alt="">
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
     hotsale: [],
    };
  },
  created() {
    this.getShopList();
  },
  methods: {
    async getShopList() {
      const { g, p } = request;
      const data = await g({
        url:"https://www.easy-mock.com/mock/5cff3ac53d58fe0e71bdb76f/example/aiquhotsale"
      })
      this.hotsale = [...this.hotsale , ...data.data.hotsale];
    },
    gotdetail(num){
        this.$router.push({path: '/detail/', query:{id:num}})
    }
  }
};
</script>
<style lang="scss" scoped>
.hotpalce {
  height: 444px;
  width: 100%;
  background: #fff;
  margin-top: 20px;
  .title {
    border-bottom: 2px solid #eee;
    height: 82px;
    line-height: 82px;
    padding:0 20px;
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
      margin-left: 195px;
      color: #999;
      font-size: 32px;
      height: 100%;
    }
    .el-icon-arrow-right {
      float: right;
      width: 72px;
      height: 40px;
      margin-top: 26px;
    }
  }
  .imgbox {
    height: 380px;
    ul {
      overflow:hidden;
      li {
        position: relative;
        float: left;
        display: inline-block;
        padding:0 20px;
        margin-top: 20px;
        width: 33%;
        height: 150px;
        box-sizing: border-box;
        overflow: hidden;
        
            img{
                width: 100%;
                height: 100%;
            }
      
        span{
            position: absolute;
            left: 30px;
            bottom: 10px;
            color:#fff;
            font-size: 14px;
        }
      }
    }
  }
}
</style>
