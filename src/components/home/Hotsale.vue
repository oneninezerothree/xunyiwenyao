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
  height: 500px;
  width: 100%;
  background: #fff;
  margin-top: 20px;
  .title {
    height: 110px;
    font-size: 20px;
    color: #666;
    padding-top: 42px;
    .left {
      float: left;
      img {
        width: 170px;
        height: 44px;
      }
    }
    .right {
      float: right;
      .hao {
        float: left;
        width: 20px;
        height: 40px;
        line-height:40px;
      }
      .over {
        float: left;
        color: #333;
        font-size: 26px;
      }
      .time {
        float: left;
        width: 48px;
        height: 40px;
        background: rgba(255, 92, 96, 1);
        border-radius: 10px;
        line-height: 40px;
        font-weight: 600;
        color:#fff;
        font-size: 28px;
      }
    }
  }
  .body {
    height: 362px;
    width: 100%;
    overflow: auto;
    ul {
      width: 2760px;
      margin:0 40px;
      overflow: hidden;
      li {
        float: left;
        width: 254px;
        height: 362px;
        margin-right: 20px;
        white-space: nowrap;
        div {
          width: 254px;
          height: 182px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .cont {
          width: 254px;
          height: 82px;
          margin: 18px 0 30px;
          font-size: 26px;
          color: #313131;
          white-space: normal;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          color: #313131;
          line-height: 40px;
        }
        .how {
          width: 254px;
          height: 40px;
          color: #d2d2d2;
          font-size: 20px;
          font-weight: 700;
          text-align: left;
          i {
            font-size: 24px;
            color: rgba(255, 92, 96, 1);
          }
          span {
            font-size: 38px;
            color: rgba(255, 92, 96, 1);
          }
        }
      }
    }
  }
}
</style>
