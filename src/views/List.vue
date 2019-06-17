<template>
  <div>
    <Bheader/>
    <Asearch/>
    <Amain/>
  </div>
</template>

<script>
// @ is an alias to /src
import Bheader from '@/components/Bheader.vue'
import Asearch from '@/components/Asearch.vue'
import Amain from '@/components/Amain.vue'
export default {
  created(){
    this.$store.state.pages = this.$route.path;
    this.$store.state.isshowtime = true;
  },
  components: {
    Bheader,
    Asearch,
    Amain,
  }
}
</script>
