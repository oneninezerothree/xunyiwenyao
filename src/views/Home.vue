<template>
    <div class="home">
        <div class="home_top" id="home_top">
            <p class="sreach">
                <i class="el-icon-search"></i>
                <span>搜索你感兴趣的</span>
                <span class="sou">搜索</span>
            </p>
            <router-link to="/reslogin" class="router">
                <i class="el-icon-user home_login"></i>
            </router-link>
        </div>
        <div class="main">
            <Banner/>
            <Classed/>
            <Hotsale/>
            <Hotpalce/>
            <Recomment/>
        </div>
    </div>
</template>
<script>
import Banner from "../components/home/Banner.vue";
import Classed from "../components/home/Classed.vue";
import Hotsale from "../components/home/Hotsale.vue";
import Hotpalce from "../components/home/Hotpalce.vue";
import Recomment from "../components/home/Recomment.vue";
export default {
  components: {
    Banner,
    Classed,
    Hotsale,
    Hotpalce,
    Recomment
  },
  mounted(){
    window.addEventListener("scroll",this.handleFun);
  },
  methods: {
     handleFun(){
      let t = document.documentElement.scrollTop || document.body.scrollTop;
        let homeTop = document.getElementById("home_top");
        if( t >= 88 ) {
          homeTop.style.backgroundColor = 'RGBA(1, 1, 1, 0.2)';
        } else{
          homeTop.style.background = 'transparent';
        }
    },
  },
  beforeDestroy(){
    window.removeEventListener("scroll",this.handleFun);
  },
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  background: #ddd;
}
.home_top {
  position: fixed;
  z-index: 33;
  height: 52px;
  padding: 10px;
  width: 100%;
  border-radius:0 0 15px 15px;
  .sreach {
    float: left;
    width: 80%;
    height: 30px;
    line-height: 30px;
    background-color: #fff;
    padding-left: 20px;
    border-radius: 15px;
    text-align: left;
    margin-left: 5px;
    i {
      float: left;
      width: 16px;
      height: 16px;
      font-size: 16px;
      margin-top: 8px;
      margin-right: 10px;
      font-weight: 700;
      color: #939398;
    }
    span {
      color: #939398;
    }
    .sou {
      float: right;
      width: 60px;
      height: 100%;
      color: #fff;
      text-align: center;
      border-radius: 0px 15px 15px 0;
      background: #939398;
    }
  }
  .router {
    float: right;
    width: 16px;
    height: 20px;
    font-size: 20px;
    margin-top: 4px;
    font-weight: 700;
    margin-right: 10px;
  }
  .home_login {
    float: right;
    width: 16px;
    height: 20px;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>

