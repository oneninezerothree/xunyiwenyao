<template>
    <div id="addtocart">
        <div class="carttop">
            <i class="el-icon-arrow-left" @click="gotodetail"></i>
            请选择选择日期规格数量
        </div>
        <div class="neirong">
            <div class="riqi">
                <p>选择日期</p>
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
            cartlistbig:[]
        }
    },
    methods:{
        gotodetail(){
            if(this.timetime != ""){
                var storage = window.localStorage;
                if(storage.cartlist){
                    this.cartlistbig = JSON.parse(storage.cartlist);
                    // if(this.cartlistbig.shopid == this.shopid){
                    //     this.cartlistbig.num += this.num
                    // }else{
                    //     console.log("c存在的",this.cartlistbig )
                    //     this.getcartlist()
                    // }
                    for(var i=0;i<this.cartlistbig.length;i++){
                        if(this.cartlistbig[i].shopid == this.shopid){
                            this.cartlistbig[i].num += this.num;
                            break;
                        }
                        if(i==this.cartlistbig.length){
                            this.getcartlist()
                        }
                    }
                }else{
                    this.getcartlist()
                }
                console.log(this.cartlist)
                // this.$router.go(-1)
                
            }else{
              this.$message.error({
                    message: '请选择出行日期'
                });  
            }
            
        },
        getcartlist(){  
            this.cartlist.shopid = this.shopid;
            this.cartlist.jiage = this.jiage;
            this.cartlist.danjia = this.danjia;
            this.cartlist.num = this.num;
            this.cartlist.timetime = this.timetime;
            this.cartlistbig.push(this.cartlist)
            window.localStorage.cartlist = JSON.stringify(this.cartlistbig)
        },
        riqi(value){
            this.timetime = value;
        },
        async getxinxi() {
            const { g, p } = request;
            const data = await g({
                url: 'https://www.easy-mock.com/mock/5d00e9c806c5a82ca8aabe7c/aiqu/detail/11'
            });
            this.danjia = Number(data.data[0].money).toFixed(2);  
            this.jiage = this.danjia
        },
        jiajian(value){
            this.jiage = (this.danjia * value).toFixed(2);
        }
        
    },
    created(){
        this.$store.state.isshowtime = false;
        this.getxinxi();
        this.shopid = this.$route.query.id;
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
