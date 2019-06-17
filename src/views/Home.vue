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
        <div class="aqqfooter"></div>
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
  created(){
        this.$store.state.isshowtime = true;
        this.$store.state.pages = this.$route.path;
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
.aqqfooter{
  width: 100%;
  height:100px;
}
.home_top {
  position: fixed;
  z-index: 33;
  height: 104px;
  padding: 20px;
  width: 100%;
  border-radius:0 0 30px 30px;
  .sreach {
    float: left;
    width: 80%;
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    padding-left: 40px;
    border-radius: 30px;
    text-align: left;
    margin-left: 10px;
    i {
      float: left;
      width: 32px;
      height: 32px;
      font-size: 32px;
      margin-top: 16px;
      margin-right: 20px;
      font-weight: 700;
      color: #939398;
    }
    span {
      color: #939398;
    }
    .sou {
      float: right;
      width: 120px;
      height: 100%;
      color: #fff;
      text-align: center;
      border-radius: 0px 30px 30px 0;
      background: #939398;
    }
  }
  .router {
    float: right;
    width: 32px;
    height: 40px;
    font-size: 40px;
    margin-top: 8px;
    font-weight: 700;
    margin-right: 20px;
  }
  .home_login {
    float: right;
    width: 32px;
    height: 40px;
    font-size: 40px;
    font-weight: 700;
  }
}
</style>

