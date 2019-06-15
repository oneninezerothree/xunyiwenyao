<template>
  <div>
    <Lheader/>
    <banner/>
    <Lnav/>
    <Lmain/>
  </div>
</template>
<script>
import Lheader from '@/components/Lheader.vue'
import banner from '@/components/banner.vue'
import Lnav from '@/components/Lnav.vue'
import Lmain from '@/components/Lmain.vue'
export default {
  created(){
    this.$store.state.isshowtime = false;
  },
  components: {
    Lheader,
    banner,
    Lnav,
    Lmain
  }
}
</script>
<style scoped>
*{
  font-size:40px;
}
</style>

