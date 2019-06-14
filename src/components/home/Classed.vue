<template>
    <div class="home_classed">
        <ul>
            <li>
                <a href="">
                    <img src="../../assets/img/home_class1.png" alt="">
                    <p>景点门票</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../assets/img/home_class2.png" alt="">
                    <p>当地玩乐</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../assets/img/home_class3.png" alt="">
                    <p>一日游</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../assets/img/home_class4.png" alt="">
                    <p>多日游</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../assets/img/home_class5.gif" alt="">
                    <p>租车接送机</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../assets/img/home_class6.png" alt="">
                    <p>超值套餐</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../assets/img/home_class7.png" alt="">
                    <p>定制旅行</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../../assets/img/home_class8.png" alt="">
                    <p>领券中心</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.home_classed {
  width: 100%;
  background: #fff;
  margin-top:10px; 
  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    li {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      flex: 0 1 25%;
      padding: 28px 2%;
      a {
        width: 100%;
        text-align: center;
        color: #666;
        img {
          width: 60%;
          height: 60%;
        }
        p {
          font-size: 24px;
          color: #a5adba !important;
        }
      }
    }
  }
}
</style>
