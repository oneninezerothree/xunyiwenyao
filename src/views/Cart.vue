<template>
    <div id="aq-cart">
        <div class="carttop">
            <i class="el-icon-arrow-left" @click="gotoback"></i>
            <span>购物车</span>
            <span>（{{shuliang}}）</span>
            <span @click="todelete">
                <span v-if="totalshow">编辑</span>
                <span v-if="!totalshow">完成</span>
            </span>
        </div>
        <div class="neirongbox">
            <el-checkbox-group v-model="checkedItem" @change="handleCheckedItemChange" id="linxiaqi">
                <el-checkbox v-for="(item,i) in cartlist" :label="item" :key="i" class="itembox" border > 
                    <div class="itemitem">
                        <img :src="item.img" alt="">
                        <div class="weizi">
                            <div>
                                <p>{{item.title}}
                                </p>
                                <i class="el-icon-edit" @click="toEdit(item.shopid)"></i>
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
                </el-checkbox>
            </el-checkbox-group>
        </div>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="cartfooter">
            <div class="footerson">
                <span>全选</span>
                <span v-if="totalshow">￥{{totalprice}}</span>
                <span v-if="totalshow">结算</span>
                <span v-if="!totalshow"></span>
                <span v-if="!totalshow">删除</span>
            </div>
        </el-checkbox>
    </div>
</template>
<script>
import request from "../libs/request";
import { constants } from 'fs';
import { connect } from 'net';
export default {
    data(){
        return{
            cartlist:[],
            shuliang:"",
            totalprice:0,
            checkedItem:[],
            isIndeterminate:false,
            checkAll: false,
            checked:false,
            totalshow:true
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
        handleCheckAllChange(val) {
            this.checkedItem = val ? this.cartlist : [];
            this.isIndeterminate = false;
            let zongjia = 0;
            this.checkedItem.forEach(item=>{
                zongjia += Number(item.price)
            });
            this.totalprice = Number(zongjia).toFixed(2);
        },
        handleCheckedItemChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cartlist.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cartlist.length;
            let zongjia = 0;
            value.forEach(item => {
                zongjia += Number(item.price);
            });
            this.totalprice = Number(zongjia).toFixed(2);
        },
        toEdit(aa){
            this.$router.push("/addtocart?id="+aa)
        },
        todelete(){
            this.totalshow = !this.totalshow;
            console.log(this.totalshow);
        },
        async deleteShop(){
            const { g, p, modify,d} = request;
            const data = await d({
                url:"http://localhost:1901/cart"
            })
            // this.remdata = [...this.remdata , ...data.data.remdata];
            this.cartlist = data.data.data;
            this.shuliang = data.data.data.length;
        }
    },
    created(){
        this.$store.state.isshowtime = false;
        this.getCartList();
    },
    computed:{
        
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
        text-align:center;
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
    #aq-cart .footerson{
        height:100px;
        background: #fff;
        display: flex;
        flex-direction: row;
        font-size: 30px;
        line-height: 100px;
    }
    
    #aq-cart .footerson span:nth-of-type(1){
        flex:2;
    }
    #aq-cart .footerson span:nth-of-type(2){
        flex:5;
        text-align: left;
        color:red;
        font-weight: 700;
    }
    #aq-cart .footerson span:nth-of-type(3){
        flex:3;
        background: red;
        color:#fff;
    }
    #aq-cart .itembox{
        height:200px;
        padding:0;
        /* display:flex;
        flex-direction: row; */
        box-sizing: border-box;
        margin:20px 0;
        border:none;
    }
    #aq-cart .itembox .el-checkbox__input{
        border:3px solid #ccc;
    }
    #aq-cart .itembox .itemitem{
        display:flex;
        flex-direction: row;
        height:200px;
    }
    #aq-cart .itemitem img{
        width:180px;
        border-radius: 16px;
    }
    #aq-cart .itemitem .weizi{
        display: flex;
        flex-direction: column;
        height: 100%;
        flex:1;
        text-align: left;
        box-sizing: border-box;
        padding:0 30px;
        font-size: 20px;
        line-height: 35px;
    }
    #aq-cart .itemitem .weizi p{
        margin:0;
    }
    #aq-cart .itemitem .weizi>div{
        display: flex;
        flex-direction: row;
    }
    #aq-cart .itemitem .weizi>div p{
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
<style>
    #aq-cart .el-checkbox__input{
        font-size:30px;
    }
    #aq-cart .el-checkbox__inner{
        width: 30px;
        height: 30px;
        border:2px solid #ccc;
        /* font-size: 30px; */
    }
    #aq-cart .el-checkbox__inner::after{
        width: 15px;
        height: 15px;
        border:2px solid #fff;
    }
    #aq-cart .el-checkbox__original{
        font-size: 30px;
    }
    #aq-cart .cartfooter{
        height:100px;
        background: #fff;
        display: flex;
        flex-direction: row;
        font-size: 40px;
        line-height: 100px;
/*        position:fixed;
        left:0;
        bottom:0;
        width: 100%;*/
    }
   #aq-cart .cartfooter .el-checkbox__input{
        flex:1;
    }
    #aq-cart .cartfooter .el-checkbox__label{
        flex:15;
    }
</style>
