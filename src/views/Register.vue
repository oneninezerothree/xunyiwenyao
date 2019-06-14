<template>
    <div class="resbox">
        <div class="top">
          <router-link to="/reslogin" class="router">
              <i class="el-icon-arrow-left"></i>
          </router-link>
            用户名注册
        </div>
        <div class="form">
            <form action="">
                <div class="one">
                   <span class="name">手机号</span>     
                   <input type="text" class="munber" v-model="photonum" placeholder="输入手机号" @blur="isphone(photonum)">
                </div>
                <p v-text="isright" class="numerror"></p>
                <div>
                   <input type="text" v-model="mesnum" class="mesnum" placeholder="请输入验证码">
                   <span class="mesbtn">
                       <i></i>
                       发送验证码
                   </span>
                </div>
                <div>   
                   <input type="text" class="photo" v-model="password" placeholder="请设置密码">
                </div>
                <div class="xieyi">
                    <i class="el-icon-circle-check"></i>
                    <span>我同意爱去网《用户注册协议》</span>
                </div>
                <div class="formbtn" @click="submit">
                    确认注册
                </div>
                <p class="isrightsbumit" v-text="isrightsbumit"></p>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      photonum: "",
      isright: "",
      pass :"",
      mesnum: "",
      password: "",
      isrightsbumit : ""
    };
  },
  created() {
      this.isrightsbumit = '';
      this.isright = '';
  },
  methods: {
     isphone(num){
        var reg=/^1[3456789]\d{9}$/;
        if(!reg.test(num)){
            this.isright = '请输入有效的手机号码';
        }else{
            this.pass = 1;
        }
     },
    submit(){
        if(this.pass == 1 && this.password != ''){
            localStorage.setItem("name",JSON.stringify(this.photonum));
            localStorage.setItem("password",JSON.stringify(this.password));
            this.isrightsbumit = '注册成功';
        }else{
            this.isrightsbumit = '请完善信息';
        }
    }
  }
  
};
</script>

<style lang="scss" scoped>

.top {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #fff;
  background: #1ac5fb;
  .router{
  float: left;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-top: 10px;
}
  i {
    float: left;
    width: 20px;
    height: 20px;
    line-height: 20px;
  }
}
.form {
  margin-top: 50px;
  form {
    div {
      height: 35px;
      margin: 10px 20px;
    }
    .one {
      border-radius: 8px;
      background: hsla(212, 70%, 52%, 0.1);
      .name {
        float: left;
        width: 30%;
        height: 35px;
        line-height: 35px;
        text-align: left;
        padding-left: 15px;
      }
      .munber {
        float: left;
        width: 70%;
        text-align: left;
        height: 100%;
        color: #bbb;
        font-size: 13px;
        background: hsla(212, 70%, 52%, 0.1);
        padding-left: 10px;
      }
    }
    .mesnum {
      float: left;
      width: 61%;
      height: 100%;
      background: hsla(212, 70%, 52%, 0.1);
      padding-left: 15px;
      border-radius: 8px;
    }
    .mesbtn {
      float: right;
      width: 38%;
      height: 100%;
      background: #1ac5fb;
      line-height: 35px;
      border-radius: 8px;
    }
  }
  .photo {
    display: block;
    background: hsla(212, 70%, 52%, 0.1);
    line-height: 35px;
    width: 100%;
    border-radius: 8px;
    padding-left: 15px;
  }
}
.xieyi {
  height: 60px;
  line-height: 60px;
  font-size: 10px;
  text-align: right;
  color: #aaa;
}
.formbtn {
  height: 35px;
  width: 90%;
  line-height: 35px;
  background: hsla(212, 70%, 52%, 0.1);
  margin: 0 20px;
  text-align: center;
  border-radius: 8px;
}
.numerror{
    text-align:left;
    font-size:12px;
    color:red;
    padding-left:30px;
}
.isrightsbumit{
    text-align:center;
    font-size:14px;
    color:#aaa;
}

</style>

