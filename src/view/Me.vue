<template>
    <div id="aq-me">
        <span>这是我的页面</span>
    </div>
</template>
<script>
export default {
    created(){
        this.$store.state.isshowtime = true;
        this.$store.state.pages = this.$route.path;
    }
}
</script>
<style>

</style>
