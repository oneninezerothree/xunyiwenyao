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
                <li v-for="(a,index) in hotsale" :key="index">
                    <span v-text="a.texts">圣灵群岛</span>
                    <a href="http://">
                        <img :src="a.imgs" alt="">
                    </a>
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
    }
  }
};
</script>
<style lang="scss" scoped>
.hotpalce {
  height: 222px;
  width: 100%;
  background: #fff;
  margin-top: 10px;
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
  .imgbox {
    height: 190px;
    ul {
      padding: 0 10px 0;
      li {
        position: relative;
        float: left;
        display: inline-block;
        padding-left: 10px;
        margin-top: 10px;
        width: 33.33%;
        height: 75px;
        box-sizing: border-box;
        overflow: hidden;
        a{
            display: block;
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        span{
            position: absolute;
            left: 15px;
            bottom: 5px;
            color:#fff;
            font-size: 14px;
        }
      }
    }
  }
}
</style>
