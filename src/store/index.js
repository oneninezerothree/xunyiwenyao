import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
    //初始化数据
    state:{
        isshowtime:true,
        pages:"/",
        detaillist:{}
    }
});
// 暴露接口
export default store;