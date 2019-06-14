<template>
    <div id="aq-home">
        <span @click="gotdetail">11,点击进入详情页</span>
    </div>
</template>
<script>
export default {
    methods:{
        gotdetail(){
            this.$router.push({path: 'detail/', query:{id:11}})
        }
    },
    created(){
        this.$store.state.isshowtime = true;
        this.$store.state.pages = this.$route.path;
    }
}
</script>
<style>

</style>
