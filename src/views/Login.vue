<template>
    <div>
        <div class="top">
            <router-link to="/reslogin" class="router">
                <i class="el-icon-arrow-left"></i>
            </router-link>
            密码登陆
            <router-link class="res" to="/register">
                        注册
            </router-link>
        </div>
        <div class="form">
            <div>
                <i class="el-icon-user-solid"></i>
                <input type="text" v-model="phonenum" placeholder="请输入手机号">
            </div>
            <div>
                <i class="el-icon-unlock"></i>
                <input type="text" placeholder="请输入密码" v-model="password">
            </div>
            <div style="text-align: center;" @click="isright()">
                登陆
            </div>
            <span v-text="name"></span>
        </div>
        <div class="foot">
            <a href="">忘记密码？</a>
        </div>
    </div>

</template>
<script>
export default {
  data() {
    return {
      phonenum: "",
      password: "",
      name: "",
      backurl: ""
    };
  },
  methods: {
    isright() {
      this.name = localStorage.name;
      if (this.name == this.phonenum) {
        console.log("相等");
      }
    }
  },
  watch: {
      $route(to, from) {
      console.log(1111);
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
    margin-top: 12px;
    margin-left:5px ;
  }
  i {
    float: left;
    width: 20px;
    height: 20px;
  }
  a {
    float: right;
    padding-right: 10px;
  }
}
.form {
  margin-top: 50px;
  div {
    height: 40px;
    line-height: 40px;
    background: hsla(212, 70%, 52%, 0.1);
    margin: 10px;
    border-radius: 8px;
    padding-left: 13px;
    i {
      float: left;
      width: 20px;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
    input {
      width: 70%;
      margin-left: 20px;
      float: left;
      height: 100%;
      background: rgba(273, 242, 245, 0.1);
    }
  }
}
.foot {
  margin-top: 20px;
  height: 30px;
  line-height: 30px;
  text-align: right;
  padding-right: 15px;
  a {
    font-size: 16px;
    color: #aaa;
  }
}
</style>
