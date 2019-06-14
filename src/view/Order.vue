<template>
    <div id="aq-order">
        <div class="order-top">
            <i class="el-icon-arrow-left" @click="gotoback"></i>
            <span>我的订单</span>
            <i class="el-icon-s-custom" @click="gotome"></i>
        </div>
        <div class="xuanzebox">
            <div class="itembox" v-for="(item,i) in xuanze" :key="i" @click="hightlight(i)" :class="isclick==i ? 'blue' : '' ">
                
                <i :class="item.iconclass"></i>
                <span>{{item.font}}</span>
            </div>
        </div>
        <div class="neirong">
            <div class="itembox" v-for="(item,i) in neirong" :key="i" v-show="isclick==i">
                {{item.wenben}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            xuanze:[
                {iconclass:"el-icon-files",font:"全部订单"},
                {iconclass:"el-icon-s-finance",font:"待支付"},
                {iconclass:"el-icon-bicycle",font:"待出行"}
            ],
            neirong:[
                {wenben:"这是全部的内容"},
                {wenben:"这是待支付的内容"},
                {wenben:"这是带出行的内容"}
            ],
            isclick:0
        }
    },
    methods:{
        gotome(){
            this.$router.push('/aqme');
        },
        gotoback(){
            this.$router.go(-1);
        },
        hightlight(i){
            this.isclick = i;
        }
    },
    created(){
        this.$store.state.isshowtime = true;
        this.$store.state.pages = this.$route.path;
    }
}
</script>
<style scoped>
    .blue{
        color:skyblue;
    }
    #aq-order{
        display: flex;
        flex-direction: column;
    }
    #aq-order .order-top{
        height: 80px;
        background: skyblue;
        text-align: center;
        color:#fff;
        display: flex;
        flex-direction: row;
        font-size: 40px;
        line-height: 80px;
        box-sizing: border-box;
        padding:0 20px;
    }
    #aq-order .order-top i{
        font-size: 40px;
        line-height: 80px;
    }
    #aq-order .order-top i:nth-of-type(1){
        margin-right:auto;
    }
    #aq-order .order-top i:nth-of-type(2){
        margin-left:auto;
    }
    #aq-order .xuanzebox{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 120px;
        font-size: 30px;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
        padding:30px;
    }
    #aq-order .xuanzebox .itembox{
        display: flex;
        flex-direction: column;
        flex:1;
    }
    #aq-order .xuanzebox .itembox i{
        font-size: 60px;
    }
</style>
