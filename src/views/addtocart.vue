<template>
    <div id="addtocart">
        <div class="carttop">
            <i class="el-icon-arrow-left" @click="goback"></i>
            请选择选择日期规格数量
        </div>
        <div class="neirong">
            <div class="riqi">
                <p @click="addtocart">选择日期</p>
                <el-date-picker v-model="value1"  type="date" placeholder="选择日期" value-format="yyyy-MM-dd" :picker-options="pickerOptions" @change="riqi">
                </el-date-picker>
            </div>
            <div class="shuliang">
                <p>选择数量</p>
                <el-input-number v-model="num"  :min="1"  label="描述文字" border size="medium" @change="jiajian"></el-input-number>
            </div>
        </div>
        <div class="cartfooter">
            <div class="jiage">￥{{jiage}}</div>
            <div class="add" @click="gotodetail">加入购物车</div>
        </div>

    </div>

</template>
<script>
import request from '../libs/request'
export default {
    data(){
        return{
            value1: '',
            num:1,
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now();
                },
            },
            jiage:0,
            danjia:0,
            timetime:"",
            shopid:"",
            cartlist:{},
            cartlistbig:[],
            img:"",
            title:"",
            lastpath:"",
            cartuser:""
        }
    },
    methods:{
        gotodetail(){
            console.log("有吗",this.cartuser);
            if(this.cartuser != ""){
                if(this.timetime != ""){
                    console.log("现在的值",this.lastpath)
                    if(this.lastpath == "Detail"){
                        this.getcartlist();
                        this.addtocart(this.cartlist);
                    }
                    if(this.lastpath == "Cart"){
                        this.getxiugai();
                        this.xiugai(this.cartlist);
                    }
                }else{
                  this.$message.error({
                        message: '请选择出行日期'
                    });  
                }
            }else{
                this.$message.error({
                        message: '请先去登录或者注册'
                    });  
            }
            
            
        },
        getcartlist(){  
            this.cartlist.shopid = this.shopid;
            this.cartlist.price = this.jiage;
            this.cartlist.num = this.num;
            this.cartlist.date = this.timetime;
            this.cartlist.img = this.img;
            this.cartlist.title = this.title;
            this.cartlist.userid = this.cartuser;
            console.log("购物车列表",this.cartlist);
        },
        getxiugai(){
            this.cartlist.date = this.timetime;
            this.cartlist.price = this.jiage;
            this.cartlist.num = this.num;
        },
        riqi(value){
            this.timetime = value;
        },
        // async chaxun() {
        //     const { g, p,modify } = request;
        //     const data = await g({
        //         url: 'http://localhost:1901/cart/'+this.shopid
        //     });
        //     if(data.status == 200){
        //         // this.$message.success({
        //         //     message: '加入购物车成功'
        //         // });  
        //         // console.log("是啥",data.data.data.length);
        //         if(data.data.data.length == 0){
        //             await this.getcartlist();
        //             this.addtocart(this.cartlist);
        //         }else{
        //             await this.xiugai({num:this.num});
        //             this.$router.go(-1);

        //         }
        //     }else{
        //         this.$message.error({
        //             message: '加入购物车失败，请稍后重试'
        //         });  
        //     }
        // },
        //将商品信息存入购物车数据库
        async addtocart(shuju) {
            const { g, p,modify } = request;
            const data = await p({
                url: 'http://localhost:1901/cart',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                 shuju: shuju
            });
            // console.log(data.data.data.insertedId);
            if(data.data.data.insertedId != ""){
                this.$router.go(-1);
            }else{
                this.$message.error({
                    message: '加入购物车失败，请稍后重试'
                });  
            }
        },
        //渲染页面,得到价格等信息
        async getxinxi() {
            const { g, p,modify } = request;
            const data = await g({
                url: 'http://localhost:1901/goods/'+this.shopid
            });
            this.danjia = Number(data.data.data[0].price).toFixed(2);  
            this.jiage = this.danjia;
            this.img = data.data.data[0].imgs[0].lunbo;
            this.title = data.data.data[0].title;
        },
        //修改商品
        async xiugai(shuju) {
            const { g, p,modify } = request;
            const data = await modify({
                url: 'http://localhost:1901/cart/'+this.shopid,
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                 shuju: shuju
            });
            this.$message.success({
                    message: '修改成功'
                }); 
            this.$router.go(-1);
        },

        jiajian(value){
            this.jiage = (this.danjia * value).toFixed(2);
        },
        goback(){
            this.$router.go(-1);
        }
        
    },
    created(){
        this.$store.state.isshowtime = false;
        this.shopid = this.$route.query.id;
        this.getxinxi();
        this.cartuser = this.$store.state.arr[0].name;
        // console.log("用户的用户名",this.cartuser);
    },
    beforeRouteEnter:(to,from,next)=>{
        next(vm=>{
            vm.lastpath = from.name;
        })
    }
}
</script>
<style scoped>
    #addtocart{
        height: 100%;
        display:flex;
        flex-direction: column;
        text-align: center;
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
