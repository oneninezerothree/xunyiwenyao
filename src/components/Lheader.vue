<template>
  <header class="list-header clearfix">
		    <div class="layout-header-container">
		    	<i class="iconfont icon_back" id="backBtn_back"></i>
		        <h1 class="title"><span>自助游</span></h1>
                <span class="sub-pos-search" id="it-search-box">
                    <i class="iconfont icon_search"></i>
                </span>
	          <a href="javascript:void(0)" class="toggle-category"><i class="iconfont"></i></a>
		    </div>
	   </header>
     
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<<<<<<< HEAD
<style>
.list-header {
    height: 41px;
    font-size: 62.5%;
=======
<style scoped>
.list-header {
    height: 82px;
    font-size:40px;
>>>>>>> dev
}
.list-header .layout-header-container {
    position: fixed;
    left: 0;
    width: 100%;
    right: 0;
<<<<<<< HEAD
    height: 42px;
=======
    height: 84px;
>>>>>>> dev
    background-color: #1ac5fb;
    z-index: 1005;
}
.list-header .icon_back {
    left: 0;
    position: absolute;
    top: 7px;
    font-size: 1.6rem;
    z-index: 1002;
    width: 40px;
    height: 30px;
<<<<<<< HEAD
    line-height: 30px;
=======
    line-height: 60px;
>>>>>>> dev
    color: #fff;
    text-align: center;
}
.list-header .title {
    text-align: center;
<<<<<<< HEAD
    line-height: 42px;
    font-size: 2rem;
=======
    line-height: 84px;
    font-size:30px;
>>>>>>> dev
    color: #fff;
    font-weight: 400;
}
.sub-pos-search {
    position: absolute;
    right: 48px;
    top: 12px;
    color: #fff;
}
.sub-pos-search .icon_search {
    vertical-align: top;
}
.iconfont {
    font-family: iconfont!important;
<<<<<<< HEAD
    font-size: 1.8rem;
=======
    font-size: 30px;
>>>>>>> dev
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: inherit;
    margin-right: 5px;
}
.list-header .layout-header-container .toggle-category {
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 32px;
    margin-top: 5px;
    text-align: center;
    line-height: 32px;
    z-index: 1000;
}
.iconfont {
    font-family: iconfont!important;
<<<<<<< HEAD
    font-size: 1.8rem;
=======
    font-size: 30px;
>>>>>>> dev
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: inherit;
    margin-right: 5px;
}
.clearfix:after {
    content: '';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
}
</style>
