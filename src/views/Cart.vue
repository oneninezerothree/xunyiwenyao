<template>
    <div id="aq-cart">
        <div class="carttop">
            <i class="el-icon-arrow-left" @click="gotoback"></i>
            <span>购物车</span>
            <span>（{{shuliang}}）</span>
            <span>编辑</span>
        </div>
        <div class="neirongbox">
            <div class="itembox" v-for="(item,i) in cartlist" :key="i">
                <div class="check">
                    <input type="checkbox">
                </div>
                <img :src="item.img" alt="">
                <div class="weizi">
                    <div>
                        <p>{{item.title}}
                        </p>
                        <i class="el-icon-edit"></i>
                    </div>
                    <p>
                        <span>出行日期:</span>
                        <span>{{item.date}}</span>
                    </p>
                    <p>
                        <span>产品规格:</span>
                        <span>可伦宾野生动物园门票</span>
                    </p>
                    <p>
                        <span>出行人数：</span>
                        <span>{{item.num}}</span>

                    </p>
                    <p>
                        <span class="red">￥</span>
                        <span class="red">{{item.price}}</span>
                        <span class="gotoright">产品ID:{{item.shopid}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="cartfooter">
            <input type="checkbox">
            <span>全选</span>
            <span>￥0.00</span>
            <span>结算</span>
        </div>
    </div>
</template>
<script>
import request from "../libs/request";
import { constants } from 'fs';
export default {
    data(){
        return{
            cartlist:[],
            shuliang:""
        }
    },
    methods:{
        gotoback(){
            this.$router.go(-1);
        },
        async getCartList() {
            const { g, p, modify} = request;
            const data = await g({
                url:"http://localhost:1901/cart"
            })
            // this.remdata = [...this.remdata , ...data.data.remdata];
            this.cartlist = data.data.data;
            this.shuliang = data.data.data.length;
        },
    },
    created(){
        this.$store.state.isshowtime = false;
        this.getCartList();
    }
}
</script>
<style scoped>
    .red{
        color:red;
    }
    .gotoright{
        margin-left:auto;
    }
    #aq-cart{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        height:100%;
    }
    #aq-cart .carttop{
        height: 80px;
        background: skyblue;
        display: flex;
        flex-direction: row;
        font-size: 30px;
        line-height: 80px;
        box-sizing: border-box;
        padding:0 20px;
        color:#fff;
    }
    #aq-cart .carttop i{
        margin-right: auto;
         font-size: 30px;
        line-height: 80px;
    }
    #aq-cart .carttop span:nth-of-type(3){
        margin-left: auto;
    }
    #aq-cart .neirongbox{
        flex:1;
        overflow:auto;
    }
    #aq-cart .cartfooter{
        height:100px;
        background: #fff;
        display: flex;
        flex-direction: row;
        font-size: 35px;
        line-height: 100px;
/*        position:fixed;
        left:0;
        bottom:0;
        width: 100%;*/
    }
    #aq-cart .cartfooter input{
        flex:1;
    }
    #aq-cart .cartfooter span:nth-of-type(1){
        flex:2;
    }
    #aq-cart .cartfooter span:nth-of-type(2){
        flex:6;
    }
    #aq-cart .cartfooter span:nth-of-type(3){
        flex:3;
        background: red;
        color:#fff;
    }
    #aq-cart .itembox{
        height:200px;
        display:flex;
        flex-direction: row;
        box-sizing: border-box;
        padding:10px;
        margin:20px 0;
    }
    #aq-cart .itembox .check{
        width: 80px;
    }
    #aq-cart .itembox img{
        width:180px;
        border-radius: 16px;
    }
    #aq-cart .itembox .weizi{
        display: flex;
        flex-direction: column;
        height: 100%;
        flex:1;
        text-align: left;
        box-sizing: border-box;
        padding:0 30px;
    }
    #aq-cart .itembox .weizi p{
        margin:0;
    }
    #aq-cart .itembox .weizi>div{
        display: flex;
        flex-direction: row;
    }
    #aq-cart .itembox .weizi>div p{
        width:400px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-size: 30px;
        font-weight: 800;
    }
    #aq-cart .weizi>p:nth-of-type(4){
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }   
</style>
