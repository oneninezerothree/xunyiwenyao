<template>
    <div id="aq-list">
        <span>这是一个列表</span>
    </div>
</template>
<script>
export default {
    created(){
        this.$store.state.isshowtime = true
        this.$store.state.pages = this.$route.path;
        console.log("是啥",this.$store.state.pages)
    }
}
</script>
<style>

</style>
