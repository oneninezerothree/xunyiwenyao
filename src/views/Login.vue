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
  height: 80px;
  line-height: 80px;
  font-size: 32px;
  color: #fff;
  background: #1ac5fb;
  .router{
    float: left;
    width: 4px;
    height: 40px;
    line-height: 40px;
    margin-top: 24px;
    margin-left:10px ;
  }
  i {
    float: left;
    width: 40px;
    height: 40px;
  }
  a {
    float: right;
    padding-right: 20px;
  }
}
.form {
  margin-top: 100px;
  div {
    height: 80px;
    line-height: 80px;
    background: hsla(212, 70%, 52%, 0.1);
    margin: 20px;
    border-radius: 16px;
    padding-left: 26px;
    i {
      float: left;
      width: 40px;
      height: 80px;
      line-height:80px;
      text-align: center;
    }
    input {
      width: 70%;
      margin-left: 40px;
      float: left;
      height: 100%;
      background: rgba(273, 242, 245, 0.1);
    }
  }
}
.foot {
  margin-top: 40px;
  height: 60px;
  line-height: 60px;
  text-align: right;
  padding-right: 30px;
  a {
    font-size: 32px;
    color: #aaa;
  }
}
</style>
