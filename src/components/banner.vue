<template>
    <section class="condition-list clearfix">
            <ul class="all-condition" id="J-select">
                <li>
                    <a href="javascript:void(0)" class="tab-title">自助游<span class="icon_arrow_down"></span></a><span class="line"></span>
                </li>
                <li>
                    <a href="javascript:void(0)" class="tab-title"><span class="des-name">曼谷</span><span class="icon_arrow_down"></span></a><span class="line"></span>
                </li>
                <li>
                    <a href="javascript:void(0)" class="tab-title">筛选<span class="icon_arrow_down"></span></a><span class="line"></span>
                </li>
                <li class="sort-click">
                    <a href="javascript:void(0)" class="tab-title"><span class="sort-name">排序</span><span class="icon_arrow_down"></span></a>
                </li>
            </ul>
        </section>       
</template>
<<<<<<< HEAD
<style>
=======
<style scoped>
>>>>>>> dev
.condition-list {
    height: 40px;
}
.all-condition {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    border-top: 1px solid #e3e3e5;
    border-bottom: 1px solid #e3e3e5;
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1002;
<<<<<<< HEAD
    height: 38px;
=======
    height: 76px;
>>>>>>> dev
}
.all-condition li {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    margin: 10px 0 9px;
    text-align: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    position: relative;
    border-right: 1px #eee solid;
}
.all-condition .tab-title {
    color: #4e4e4e;
    font-size: 1.4rem;
    position: relative;
    line-height: 20px;
}
.all-condition .icon_arrow_down {
    position: absolute;
    top: 2px;
    margin-left: 4px;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
}
.icon_arrow_down:after {
    content: "";
    display: block;
    border-bottom: 1px solid #aaa;
    border-left: 1px solid #aaa;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    width: 8px;
    height: 8px;
}
<<<<<<< HEAD
=======
 .all-condition .tab-title{
    color: #4e4e4e;
    font-size:15px;
    position: relative;
    line-height: 0.26667rem;
}

>>>>>>> dev
</style>
