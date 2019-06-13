<template>
    <div id="addtocart">
        <div class="carttop">
            <i class="el-icon-arrow-left" @click="gotodetail"></i>
            请选择选择日期规格数量
        </div>
        <div class="neirong">
            <div class="riqi">
                <p>选择日期</p>
                <el-date-picker v-model="value1"  type="date" placeholder="选择日期" :picker-options="pickerOptions" border size="large">
                </el-date-picker>
            </div>
            <div class="shuliang">
                <p>选择数量</p>
                <el-input-number v-model="num"  :min="1"  label="描述文字" border size="medium"></el-input-number>
            </div>
        </div>
        <div class="cartfooter">
            <div class="jiage">￥302</div>
            <div class="add" @click="gotodetail">加入购物车</div>
        </div>

    </div>

</template>
<script>
export default {
    data(){
        return{
            value1: '',
            num:1,
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now();
                },
            }
        }
    },
    methods:{
        gotodetail(){
            this.$router.go(-1)
        }
    },
    created(){
        this.$store.state.isshowtime = false;
    }
}
</script>
<style scoped>
    #addtocart{
        height: 100%;
        display:flex;
        flex-direction: column;
    }
    #addtocart .carttop{
        height: 100px;
        background: skyblue;
        color:#fff;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        line-height: 100px;
        text-align: center;
        font-size: 35px;
    }
    #addtocart .carttop i{
        display: block;
        width: 80px;
        line-height: 100px;
    }
    #addtocart .riqi,#addtocart .shuliang{
        font-size: 50px;
    }
    #addtocart .neirong{
        flex:1;
    }
    #addtocart .cartfooter{
        height:100px;
        display:flex;
        flex-direction:row;
    }
    #addtocart .cartfooter .jiage{
        flex:3;
        font-size: 45px;
        line-height:100px;
        font-weight: 700;
        text-align:left;
        color:red;
    }
    #addtocart .cartfooter .add{
        flex:2;
        color:#fff;
        background: skyblue;
        font-size: 30px;
        line-height: 100px;
    }
</style>
