<template>
  <div id="app">
    <router-view/>
    <aqfooter></aqfooter>
  </div>
</template>

<script>
import aqfooter from './public/footer.vue'
export default {
  name: 'App',
  components:{
    aqfooter
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
ul li{
  list-style: none;
}
input{
   outline: none;
   border: 0px;
   }
html,body{
  height:100%;
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
</style>
