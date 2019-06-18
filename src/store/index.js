import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//把本地存储用户名取出来
var arr = JSON.parse(localStorage.getItem('arr') || '[]')
var useringname = JSON.parse(localStorage.getItem('useringname') || '[]')
var isShowOut = JSON.parse(localStorage.getItem('isShowOut') || 'false')
// var loginUserName = JSON.parse(localStorage.getItem('loginUserName') || '个人中心')

const store = new Vuex.Store({
  //初始化数据
  state: {
    isshowtime: true,
    arr : arr, //用户名和密码
    bool: '', //判断是否能注册
    isLogin: '',
    logining: false,
    users: useringname,
    isok : '', //view层注册是否成功
    isShowOut : isShowOut, //默认不显示退出按钮
    // loginUserName : loginUserName,
    isshowtime:true,
    pages:"/",
    detaillist:{}
  },

  mutations: {
    //判断仓库是否有该用户(注册)
    checkUser(state, a) {
      var flag = false
      state.arr.some(item => {
        if (item.name == a.name) {
          state.bool = false;
          flag = true;
          return true;

        }
      })
      //不存在
      if (flag === false) {
        state.arr.push(a);
        state.bool = true;
        localStorage.setItem('arr', JSON.stringify(state.arr))
      }
    },

    //判断是否存在用户名（登陆）
    checkLoginuser(state, logininf) {
      state.arr.some(item => {
        if (item.name == logininf.name && item.password == logininf.password) {
          state.logining = true;
          state.isLogin = true;
          state.users = logininf.name;
          state.pw = logininf.password;
          state.isShowOut = true; 
          localStorage.setItem('isShowOut', JSON.stringify(state.isShowOut))
          localStorage.setItem('useringname', JSON.stringify(state.users))
          // localStorage.setItem('loginUserName', JSON.stringify(state.loginUserName))
          return true
        } else {
          state.isLogin = false;
        }
      })
    },

  },




});
// 暴露接口
export default store;
