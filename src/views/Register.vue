<template>
    <div class="resbox">
        <div class="top">
          <router-link to="/reslogin" class="router">
              <i class="el-icon-arrow-left"></i>
          </router-link>
            <span style="padding-left: 3.5rem;">用户名注册</span>
        </div>
        <div class="form">
            <form action="">
                <div class="one">
                   <span class="name">手机号</span>     
                   <input type="text" class="munber" v-model="username" placeholder="输入手机号" @blur="isphone(username)">
                </div>
                <p v-text="isright" class="numerror"></p>
                <div>
                   <input type="text" v-model="code" class="mesnum" placeholder="请输入验证码">
                   <span style="padding-left: 0.9rem;" class="mesbtn" @click="createCode()" v-text="checkCode">
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
                <div class="formbtn" @click="reg()">
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
      username: "",
      isright: "",
      pass :"",
      password: "",
      isrightsbumit : "",
      checkCode: "获取验证码",
      code: ""
    };
  },
  created() {
      this.isrightsbumit = '';
      this.isright = '';
  },
  methods: {
     isphone(num) {
      var reg = /^1[3456789]\d{9}$/;
      if (!reg.test(num)) {
        const h = this.$createElement;
        this.$notify({
          title: "提醒",
          message: h("i", { style: "color: teal" }, "这不是一个手机号")
        });
      }
    },
    createCode() {
      var code = "";
      var codeLength = 4;
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m"
      );
      for (var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random() * 62);
        code += random[index];
      }
      this.checkCode = code;
    },
    //判断手机号是否已经注册
    reg() {
      if (this.code.toUpperCase() == this.checkCode.toUpperCase()) {
        var a = {};
        a["name"] = this.username;
        a["password"] = this.password;
        this.$store.commit("checkUser", a);
        if (this.$store.state.bool == false) {
          const h = this.$createElement;
          this.$notify({
            title: "提醒",
            message: h("i", { style: "color: teal" }, "该手机号已注册了")
          });
        } else {
          const h = this.$createElement;
          this.$notify({
            title: "提醒",
            message: h(
              "i",
              { style: "color: teal" },
              "已注册成功，请记住账号和密码"
            )
          });
        }
      } else {
        const h = this.$createElement;
        this.$notify({
          title: "提醒",
          message: h("i", { style: "color: teal" }, "验证码错误")
        });
      }
    },
    // submit(){
    //     if(this.pass == 1 && this.password != ''){
    //         localStorage.setItem("name",JSON.stringify(this.photonum));
    //         localStorage.setItem("password",JSON.stringify(this.password));
    //         this.isrightsbumit = '注册成功';
    //     }else{
    //         this.isrightsbumit = '请完善信息';
    //     }
    // },
  }
  
};
</script>

<style lang="scss" scoped>

.top {
  height: 80px;
  line-height: 80px;
  font-size:32px;
  color: #fff;
  background: #1ac5fb;
  .router{
  float: left;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-top: 20px;
}
  i {
    float: left;
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
}
.form {
  margin-top: 100px;
  form {
    div {
      height: 70px;
      margin: 20px 40px;
    }
    .one {
      border-radius: 16px;
      background: hsla(212, 70%, 52%, 0.1);
      .name {
        float: left;
        width: 30%;
        height: 70px;
        line-height: 70px;
        text-align: left;
        padding-left: 30px;
      }
      .munber {
        float: left;
        width: 70%;
        text-align: left;
        height: 100%;
        color: #bbb;
        font-size: 26px;
        background: hsla(212, 70%, 52%, 0.1);
        padding-left: 20px;
      }
    }
    .mesnum {
      float: left;
      width: 61%;
      height: 100%;
      background: hsla(212, 70%, 52%, 0.1);
      padding-left:30px;
      border-radius: 16px;
    }
    .mesbtn {
      float: right;
      width: 38%;
      height: 100%;
      background: #1ac5fb;
      line-height: 70px;
      border-radius: 16px;
    }
  }
  .photo {
    display: block;
    background: hsla(212, 70%, 52%, 0.1);
    line-height: 70px;
    width: 100%;
    border-radius: 16px;
    padding-left: 30px;
  }
}
.xieyi {
  height: 120px;
  line-height: 120px;
  font-size: 20px;
  text-align: right;
  color: #aaa;
}
.formbtn {
  height: 70px;
  width: 90%;
  line-height: 70px;
  background: hsla(212, 70%, 52%, 0.1);
  margin: 0 40px;
  text-align: center;
  border-radius: 16px;
}
.numerror{
    text-align:left;
    font-size:24px;
    color:red;
    padding-left:60px;
}
.isrightsbumit{
    text-align:center;
    font-size:28px;
    color:#aaa;
}

</style>

