<template>
  <div class="product-list" data-total="43" loading="0" finished="0" current_page="2">
    <ul>
      <li class="activeable" data-productid="4177" v-for="(s,index) in detailList"
              :key="index">
        <a href="javascript:void(0)" class="g-content">
          <span class="fl img">
            <img
              :src="s.dimg"
              alt="icon"
              class="g-left"
            >
          </span>
          <div class="g-right">
            <p class="p-txt-over" v-text="s.title"></p>

            <p class="g-recom-bottom">
              <span class="yellow fz-14">¥</span>
              <span class="true-money yellow" v-text="s.price">
                60
                <em class="fz-14">起</em>
              </span>
              <span class="market-money"></span>
              <span class="good-num fr" v-text="s.num"></span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<<<<<<< HEAD
<script lang="ts">
=======
<script>
>>>>>>> dev
import Vue from 'vue'
import request from "../libs/request";
export default Vue.extend({
  data() {
    return {
      detailList:[],
      item:[],
    };
  },
  async created() {
    const { g, p } = request;
    const data = await g({
      url:
        "https://www.easy-mock.com/mock/5cff684bfac62e175f62d307/example/qunar"
    });
    
    console.log(data);
    const newid = this.$route.params.id;
    console.log(newid); 
    this.detailList = data.data.data.iconList[newid-1].detail;
  
  },
  
})
</script>

<<<<<<< HEAD
<style>
=======
<style scoped>
>>>>>>> dev
.product-list li {
    border-bottom: 1px solid #e7e7e7;
    padding: 8px;
}
.product-list a.g-content {
    display: block;
    padding: 8px 0;
}
.g-content .img {
    position: relative;
}
.fl {
    float: left;
}
.product-list .g-left {
    float: left;
<<<<<<< HEAD
    height: 70px;
    width: 105px;
    margin-right: 8px;
=======
    height: 140px;
    width: 210px;
    margin-right: 16px;
>>>>>>> dev
}
a img {
    border: none;
}
img {
    max-width: 100%;
}
.product-list .g-right {
    margin-left: 113px;
}
.product-list .g-right .p-txt-over {
    color: #161616;
}
.p-txt-over {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
<<<<<<< HEAD
    height: 36px;
    line-height: 18px;
    margin: 4px 0 3px;
    font-size: 1.4rem;
=======
    height: 144px;
    line-height: 36px;
    margin: 4px 0 3px;
    font-size: 30px;
>>>>>>> dev
}
.product-list .g-right p {
    color: #959595;
}

.product-list .yellow {
    color: #ff5c60;
}
.fz-14 {
<<<<<<< HEAD
    font-size: 1.4rem;
}
.product-list .true-money {
    font-size: 2rem;
=======
    font-size: 30px;
}
.product-list .true-money {
    font-size: 30px;
>>>>>>> dev
}
.product-list .yellow {
    color: #ff5c60;
}
em, i {
    font-style: normal;
}
.product-list .market-money {
<<<<<<< HEAD
    font-size: 1.2rem;
    text-decoration: line-through;
}
.product-list .good-num {
    font-size: 1.2rem;
=======
    font-size: 30px;
    text-decoration: line-through;
}
.product-list .good-num {
    font-size: 30px;
>>>>>>> dev
    margin-top: 5px;
}
.fr {
    float: right;
}
<<<<<<< HEAD
=======

>>>>>>> dev
</style>
