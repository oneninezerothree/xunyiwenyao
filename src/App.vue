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
html,body{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
