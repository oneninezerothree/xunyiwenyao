<template>
    <div class="hotsale">
        <div class="title">
            <div class="left">
                <img src="../../assets/img/home_te.png" alt="">
            </div>
            <div class="right">
                <span class="over">距离本场结束</span>&nbsp;&nbsp;
                <span class="time" v-text="hour"></span> 
                <span class="hao">:</span>
                <span class="time"  v-text="min"></span>
                <span class="hao">:</span>
                <span class="time"  v-text="sec"></span>
                <span class="hao"></span>
            </div>
        </div>
        <div class="body">
            <ul>
                <li v-for="(a,index) in hotData" :key="index" @click="gotdetail(index)">
                    <div>
                        <img :src="a.imgurl" alt="">
                    </div>
                    <p class="cont" v-text="a.content"></p>
                    <p class="how">
                        <i>￥</i>
                        <span v-text="a.price"></span>
                        起
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
      hotData: [],
      end : '',
      hour : '',
      min : '',
      sec : '',
    };
  },
  created() {
    this.getShopList();
  },
  mounted: function () {
    this.countdown()
  },
  methods: {
    async getShopList() {
      const { g, p } = request;
      const data = await g({
        url:"https://www.easy-mock.com/mock/5cff3ac53d58fe0e71bdb76f/example/hotsale"
      })
      this.hotData = [...this.hotData, ...data.data.hot];
    },
    gotdetail(num){
        this.$router.push({path: '/detail/', query:{id:num}})
    },
    countdown: function () {
      const end = Date.parse(new Date('2019-12-01'))
      const now = Date.parse(new Date())
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hour = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      this.hour = hour > 9 ? hour : '0' + hour
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      setTimeout(function () {
        that.countdown()
      }, 1000)
    }
  }
};
</script>

<style lang="scss" scoped>
.hotsale {
  margin-top: 10px;
  height: 236px;
  width: 100%;
  background: #fff;
  .title {
    height: 55px;
    font-size: 10px;
    color: #666;
    padding-top: 21px;
    .left {
      float: left;
      img {
        width: 85px;
        height: 22px;
      }
    }
    .right {
      float: right;
      .hao {
        float: left;
        width: 10px;
        height: 20px;
        line-height: 20px;
      }
      .over {
        float: left;
        color: #333;
        font-size: 13px;
      }
      .time {
        float: left;
        width: 24px;
        height: 20px;
        background: rgba(255, 92, 96, 1);
        border-radius: 5px;
        line-height: 20px;
        font-weight: 600;
        color:#fff;
        font-size: 14px;
      }
    }
  }
  .body {
    height: 181px;
    width: 100%;
    overflow: auto;
    ul {
      width: 1380px;
      margin-left: 10px;

      li {
        float: left;
        width: 127px;
        height: 181px;
        margin-right: 10px;
        white-space: nowrap;
        div {
          width: 127px;
          height: 91px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .cont {
          width: 127px;
          height: 41px;
          margin: 9px 0 15px;
          font-size: 13px;
          color: #313131;
          white-space: normal;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          color: #313131;
          line-height: 20px;
        }
        .how {
          width: 127px;
          height: 20px;
          color: #d2d2d2;
          font-size: 10px;
          font-weight: 700;
          text-align: left;
          i {
            font-size: 12px;
            color: rgba(255, 92, 96, 1);
          }
          span {
            font-size: 19px;
            color: rgba(255, 92, 96, 1);
          }
        }
      }
    }
  }
}
</style>
