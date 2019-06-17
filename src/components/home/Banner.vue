<template>
    <div>
        <div class="block bannerBox">
            <el-carousel height="6.5rem" indicator-position="none" arrow="never">
                <el-carousel-item v-for="(item,index) in imgs" :key="index">
                    <!-- <h3 class="small">{{ item }}</h3> -->
                    <img :src="item.imgurl" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return {
          imgs : [
                {
                    imgurl : require("../../assets/img/home_banner1.jpg"),
                },
                {
                    imgurl : require("../../assets/img/home_banner2.jpg"),
                },
                {
                    imgurl : require("../../assets/img/home_banner3.jpg"),
                },
                {
                    imgurl : require("../../assets/img/home_banner4.jpg"),
                },
                {
                    imgurl : require("../../assets/img/home_banner5.jpg"),
                },
            ],
          };
    },
    methods: {
        ajax(url) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = () => {
                    if (xhr.status == 200 && xhr.readyState == 4) {
                        // this.news = JSON.parse(xhr.responseText).data.arr
                        let data = JSON.parse(xhr.responseText).data;
                        // resolve(data)
                    }
                }
                xhr.open('GET', url)
                xhr.send()
            })
        }
    },
    // 生命周期钩子，当app创建的时候触发一次
    async created() {
        // axios
        let { arr } = await this.ajax('https://www.easy-mock.com/mock/5cff3ac53d58fe0e71bdb76f/example/h_banner')
        this.news = arr
    }
}
</script>

<style lang="scss" scoped>
    .bannerBox{
        background: #ccc;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
