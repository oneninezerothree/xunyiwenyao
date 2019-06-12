<template>
    <div id="aq-footer">
        <div class="iconbox" v-for="(item,index) in iconbox" :key="index" @click="gotopage(item.aqpath)">
            <i :class="item.iconclass"></i>
            <span>{{item.font}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            iconbox:[
                {iconclass:"el-icon-s-home",font:"首页",aqpath:"/"},
                {iconclass:"el-icon-s-grid",font:"列表页",aqpath:"/aqlist"},
                {iconclass:"el-icon-s-order",font:"订单",aqpath:"/aqorder"},
                {iconclass:"el-icon-s-custom",font:"我的",aqpath:"/aqme"}
            ]
        }
    },
    methods:{
        gotopage(aqpath){
            this.$router.push(aqpath)
        }
    }
}
</script>
<style scoped>
    #aq-footer{
        width:750px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 100px;
        justify-content: space-around;
        font-size: 30px;
        line-height: 40px;
        background: pink;
        position:fixed;
        left:0;
        bottom:0;
    }
    #aq-footer .iconbox{
        display: flex;
        flex-direction: column;
    }
    #aq-footer .iconbox i{
        font-size: 45px;
        line-height: 60px;
    }
</style>
