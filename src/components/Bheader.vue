<template>
  <header
    class="header"
    style="animation: 0.15s ease 0s 1 normal none running changeHeaderHeightLong; height: 20vw;"
  >
    <span class="close-search" v-if="show">取消</span>
    <div class="destitle" v-if="!show">
      <span class="changedes">切换目的地</span>
      <span class="close-btn">关闭</span>
    </div>
    <div
      class="search-boxx"
      id="it-search-boxx"
      style="animation: 0.15s ease 0s 1 normal none running changeSearchLong; top: 10.3vw; width: 91.87vw;"
    >
      <i class="iconfont icon_search"></i>
      <input
        type="text"
        placeholder="搜索国家/城市/景点"
        class="search-input"
        style="animation: 0.15s ease 0s 1 normal none running changeInputLong; width: 85vw;"
        @click="toggle"
      >
    </div>
     <div class="search-list" style="display: none;">
    <p class="search-toast">输入关键字搜索</p>
  </div>
  </header>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
       name:"header",
        data:{
            show:false
        },
        methods:{
            toggle:function(){
                this.show=true;
                console.log(this.show)
            }
        }
})
</script>

<style scoped>
.header {
    height: 20vw;
    width: 100%;
    background-color: #1ac5fb;
    overflow: hidden;
    position: fixed;
}
.close-search {
    padding-top: 2vw;
    position: absolute;
    right: 4.1vw;
    line-height: 6.7vw;
    color: #fff;
    font-size: 3.73vw;
    /* display: none; */
}
.destitle {
    height: 6.7vw;
    color: #fff;
    font-size: 3.73vw;
    position: relative;
    line-height: 6.7vw;
    padding-top: 2vw;
}
.changedes {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.close-btn {
    position: absolute;
    right: 4.1vw;
}
.search-boxx {
    position: absolute;
    width: 91.87vw;
    height: 6.7vw;
    border-radius: 3.33vw;
    background-color: #fff;
    top: 10.3vw;
    left: 4.065vw;
    font-size: 3.73vw;
    line-height: 6.7vw;
    padding-left: 2.67vw;
}
.search-boxx .icon_search {
    color: #1ac5fb;
    float: left;
    font-size: 3.73vw;
    width: 3vw;
}
.iconfont {
    font-family: iconfont!important;
    font-size: 1.8rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: inherit;
    margin-right: 5px;
}
.search-boxx .search-input {
    color: #333;
    float: left;
    border: 0;
    padding: 0;
    margin: 0;
    line-height: 6.7vw;
    font-size: 3.73vw;
    width: 85vw;
}
.search-list {
    width: 100%;
    height: 100%;
    padding-top: 10vw;
    display: none;
    box-sizing: border-box;
}
.search-toast {
    font-size: 3.5vw;
    color: #333;
    line-height: 20vw;
    text-align: center;
}
</style>
