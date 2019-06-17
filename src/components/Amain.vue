<template>
  <div class="main">
    <div class="left">
      <ul class="navlist">
        <li
          data-tab-id="0"
          v-for="(s,index) in swiperList"
          :key="index"
          v-text="s.country"
          @click="toggleTabs(index)"
          :class="{active:index!=nowIndex}"
        ></li>
        <!-- <li data-tab-id="2">澳大利亚</li>
        <li data-tab-id="3">新西兰&amp;斐济</li>
        <li data-tab-id="1">欧洲</li>
        <li data-tab-id="4">东南亚</li>
        <li data-tab-id="5">美洲</li>-->
      </ul>
    </div>
    <div class="right">
      <div class="body" data-tab-id="0" v-show="nowIndex===0">
        <div class="hotseason">
          <h3>
            <span>热门目的地</span>
          </h3>
          <ul class="clearfix">
           
                <li
              v-for="(s,index) in iconList"
              :key="index"
              :style=" 
     {backgroundImage:'url('+s.picUrl+')'}"
              @click="getDescribe(s.id)"
            >
              <div
                class="click"
                data-name="墨尔本"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="moerben"
              ></div>
              <span class="banner-name" v-text="s.bannername"></span>
              <span class="english-name" v-text="s.englishname"></span>
            </li>
            
          
            <!-- <li style="background-image: url(https://pic.itrip.com/p/20161107104559-23.png)">
              <div
                class="click"
                data-name="悉尼"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="xini"
              ></div>
              <span class="banner-name">悉尼</span>
              <span class="english-name">SYDNEY</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171712-628.png)">
              <div
                class="click"
                data-name="皇后镇"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="huanghouzhen"
              ></div>
              <span class="banner-name">皇后镇</span>
              <span class="english-name">QUEENS TOWN</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171719-868.png)">
              <div
                class="click"
                data-name="特卡波/库克山"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="kukeshan"
              ></div>
              <span class="banner-name">特卡波/库克山</span>
              <span class="english-name">TEKAPO/MOUNT COOK</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161020180252-554.png)">
              <div
                class="click"
                data-name="英国"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="yingguo"
              ></div>
              <span class="banner-name">英国</span>
              <span class="english-name">BRITAIN</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161020175953-342.png)">
              <div
                class="click"
                data-name="意大利"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="yidali"
              ></div>
              <span class="banner-name">意大利</span>
              <span class="english-name">ITALY</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161020174438-478.png)">
              <div
                class="click"
                data-name="纽约"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="niuyue"
              ></div>
              <span class="banner-name">纽约</span>
              <span class="english-name">NEW YORK</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171955-738.png)">
              <div
                class="click"
                data-name="拉斯维加斯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="lasiweijiasi"
              ></div>
              <span class="banner-name">拉斯维加斯</span>
              <span class="english-name">LAS VEGAS</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013172008-831.png)">
              <div
                class="click"
                data-name="新加坡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="xinjiapo"
              ></div>
              <span class="banner-name">新加坡</span>
              <span class="english-name">SINGAPORE</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013172015-580.png)">
              <div
                class="click"
                data-name="普吉岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="pujidao"
              ></div>
              <span class="banner-name">普吉岛</span>
              <span class="english-name">PHUKET</span>
            </li>-->
          </ul>
        </div>
      </div>
      <div class="body hide" data-tab-id="2" v-show="nowIndex===1">
        <div class="hotseason">
          <h3>
            <span>热门目的地</span>
          </h3>
          <ul class="clearfix">
            <li style="background-image: url(https://pic.itrip.com/p/20161013171736-657.png)">
              <div
                class="click"
                data-name="墨尔本"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="moerben"
              ></div>
              <span class="banner-name">墨尔本</span>
              <span class="english-name">MELBOURNE</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171748-662.png)">
              <div
                class="click"
                data-name="悉尼"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="xini"
              ></div>
              <span class="banner-name">悉尼</span>
              <span class="english-name">SYDNEY</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161020165058-570.png)">
              <div
                class="click"
                data-name="凯恩斯"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="kaiensi"
              ></div>
              <span class="banner-name">凯恩斯</span>
              <span class="english-name">CAIRNS</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20170208185126-522.png)">
              <div
                class="click"
                data-name="惠森迪(圣灵群岛)"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="huisendi"
              ></div>
              <span class="banner-name">惠森迪(圣灵群岛)</span>
              <span class="english-name">WHITSUNDAY</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171808-144.png)">
              <div
                class="click"
                data-name="黄金海岸"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="huangjinhaian"
              ></div>
              <span class="banner-name">黄金海岸</span>
              <span class="english-name">GOLD COAST</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161020172814-734.png)">
              <div
                class="click"
                data-name="塔斯马尼亚"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="tasimaniya"
              ></div>
              <span class="banner-name">塔斯马尼亚</span>
              <span class="english-name">TASMANIA</span>
            </li>
          </ul>
        </div>
        <div class="country" data-name="大堡礁城市">
          <h3>
            <span>大堡礁城市</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="aodaliya"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="凯恩斯"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="kaiensi"
              ></div>凯恩斯
            </li>
            <li>
              <div
                class="click"
                data-name="惠森迪(圣灵群岛)"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="huisendi"
              ></div>惠森迪(圣灵群岛)
            </li>
          </ul>
        </div>
        <div class="country" data-name="大都市">
          <h3>
            <span>大都市</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="aodaliya"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="墨尔本"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="moerben"
              ></div>墨尔本
            </li>
            <li>
              <div
                class="click"
                data-name="悉尼"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="xini"
              ></div>悉尼
            </li>
            <li>
              <div
                class="click"
                data-name="黄金海岸"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="huangjinhaian"
              ></div>黄金海岸
            </li>
            <li>
              <div
                class="click"
                data-name="布里斯班"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="bulisiban"
              ></div>布里斯班
            </li>
            <li>
              <div
                class="click"
                data-name="阿德莱德"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="adelaide"
              ></div>阿德莱德
            </li>
          </ul>
        </div>
        <div class="country" data-name="周边地区">
          <h3>
            <span>周边地区</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="aodaliya"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="达尔文"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="daerwen"
              ></div>达尔文
            </li>
            <li>
              <div
                class="click"
                data-name="珀斯西澳"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="xiao"
              ></div>珀斯西澳
            </li>
            <li>
              <div
                class="click"
                data-name="艾尔斯岩"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="aiersiyan"
              ></div>艾尔斯岩
            </li>
            <li>
              <div
                class="click"
                data-name="塔斯马尼亚"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="tasimaniya"
              ></div>塔斯马尼亚
            </li>
          </ul>
        </div>
      </div>
      <div class="body hide" data-tab-id="3" v-show="nowIndex===2">
        <div class="hotseason">
          <h3>
            <span>热门目的地</span>
          </h3>
          <ul class="clearfix">
            <li style="background-image: url(https://pic.itrip.com/p/20161013171819-334.png)">
              <div
                class="click"
                data-name="皇后镇"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="huanghouzhen"
              ></div>
              <span class="banner-name">皇后镇</span>
              <span class="english-name">QUEENS TOWN</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171825-102.png)">
              <div
                class="click"
                data-name="奥克兰"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="aokelan"
              ></div>
              <span class="banner-name">奥克兰</span>
              <span class="english-name">AUCKLAND</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171831-9.png)">
              <div
                class="click"
                data-name="特卡波/库克山"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="kukeshan"
              ></div>
              <span class="banner-name">特卡波/库克山</span>
              <span class="english-name">TEKAPO/MOUNT COOK</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171839-292.png)">
              <div
                class="click"
                data-name="基督城"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="jiducheng"
              ></div>
              <span class="banner-name">基督城</span>
              <span class="english-name">CHRIST CHURCH</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171844-922.png)">
              <div
                class="click"
                data-name="罗托鲁瓦"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="luotuoluwa"
              ></div>
              <span class="banner-name">罗托鲁瓦</span>
              <span class="english-name">ROTORUA</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013172038-951.png)">
              <div
                class="click"
                data-name="西海岸冰川"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="xihaianbingchuan"
              ></div>
              <span class="banner-name">西海岸冰川</span>
              <span class="english-name">WESTCOAST GLACIERS</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013172048-418.png)">
              <div
                class="click"
                data-name="维缇岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="weitidao"
              ></div>
              <span class="banner-name">维缇岛</span>
              <span class="english-name">VITI ISLAND</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013172054-28.png)">
              <div
                class="click"
                data-name="玛玛努卡群岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="mamanukaqundao"
              ></div>
              <span class="banner-name">玛玛努卡群岛</span>
              <span class="english-name">MAMANUCA ISLANDS</span>
            </li>
          </ul>
        </div>
        <div class="country" data-name="新西兰">
          <h3>
            <span>新西兰</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="xinxilan"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="库克山/特卡波"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="kukeshan"
              ></div>库克山/特卡波
            </li>
            <li>
              <div
                class="click"
                data-name="陶波/惠灵顿"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="taobo"
              ></div>陶波/惠灵顿
            </li>
            <li>
              <div
                class="click"
                data-name="布兰尼姆/ 尼尔森"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="bulannimu"
              ></div>布兰尼姆/ 尼尔森
            </li>
            <li>
              <div
                class="click"
                data-name="岛屿湾/派希亚"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="paixiya"
              ></div>岛屿湾/派希亚
            </li>
            <li>
              <div
                class="click"
                data-name="但尼丁"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="danniding"
              ></div>但尼丁
            </li>
            <li>
              <div
                class="click"
                data-name="凯库拉"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="kaikula"
              ></div>凯库拉
            </li>
            <li>
              <div
                class="click"
                data-name="西海岸冰川"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="xihaianbingchuan"
              ></div>西海岸冰川
            </li>
            <li>
              <div
                class="click"
                data-name="皇后镇"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="huanghouzhen"
              ></div>皇后镇
            </li>
            <li>
              <div
                class="click"
                data-name="南岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="nandao"
              ></div>南岛
            </li>
            <li>
              <div
                class="click"
                data-name="北岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="beidao"
              ></div>北岛
            </li>
            <li>
              <div
                class="click"
                data-name="奥克兰"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="aokelan"
              ></div>奥克兰
            </li>
            <li>
              <div
                class="click"
                data-name="罗托鲁瓦"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="luotuoluwa"
              ></div>罗托鲁瓦
            </li>
            <li>
              <div
                class="click"
                data-name="基督城"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="jiducheng"
              ></div>基督城
            </li>
            <li>
              <div
                class="click"
                data-name="瓦纳卡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="wanaka"
              ></div>瓦纳卡
            </li>
          </ul>
        </div>
        <div class="country" data-name="斐济">
          <h3>
            <span>斐济</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="feiji"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="亚萨瓦群岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="yasawaqundao"
              ></div>亚萨瓦群岛
            </li>
            <li>
              <div
                class="click"
                data-name="玛玛努卡群岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="mamanukaqundao"
              ></div>玛玛努卡群岛
            </li>
            <li>
              <div
                class="click"
                data-name="维提岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="weitidao"
              ></div>维提岛
            </li>
            <li>
              <div
                class="click"
                data-name="瓦努阿岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="wanuadao"
              ></div>瓦努阿岛
            </li>
          </ul>
        </div>
      </div>
      <div class="body hide" data-tab-id="1" v-show="nowIndex===3">
        <div class="hotseason">
          <h3>
            <span>热门目的地</span>
          </h3>
          <ul class="clearfix">
            <li style="background-image: url(https://pic.itrip.com/p/20170519174438-857.png)">
              <div
                class="click"
                data-name="希腊"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="xila"
              ></div>
              <span class="banner-name">希腊</span>
              <span class="english-name">GREEK</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171857-152.png)">
              <div
                class="click"
                data-name="英国"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="yingguo"
              ></div>
              <span class="banner-name">英国</span>
              <span class="english-name">BRITAIN</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171903-241.png)">
              <div
                class="click"
                data-name="法国"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="faguo"
              ></div>
              <span class="banner-name">法国</span>
              <span class="english-name">FRANCE</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171909-863.png)">
              <div
                class="click"
                data-name="德国"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="deguo"
              ></div>
              <span class="banner-name">德国</span>
              <span class="english-name">GERMANY</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171918-255.png)">
              <div
                class="click"
                data-name="意大利"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="yidali"
              ></div>
              <span class="banner-name">意大利</span>
              <span class="english-name">ITALY</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013171925-21.png)">
              <div
                class="click"
                data-name="冰岛"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="bingdao"
              ></div>
              <span class="banner-name">冰岛</span>
              <span class="english-name">ICELAND</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013172105-848.png)">
              <div
                class="click"
                data-name="瑞士"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="ruishi"
              ></div>
              <span class="banner-name">瑞士</span>
              <span class="english-name">SWITZERLAND</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013172120-724.png)">
              <div
                class="click"
                data-name="西班牙"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="xibanya"
              ></div>
              <span class="banner-name">西班牙</span>
              <span class="english-name">SPAIN</span>
            </li>
          </ul>
        </div>
        <div class="country" data-name="瑞士">
          <h3>
            <span>瑞士</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="ruishi"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="苏黎世"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="sulishi"
              ></div>苏黎世
            </li>
            <li>
              <div
                class="click"
                data-name="洛桑"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="luosang"
              ></div>洛桑
            </li>
            <li>
              <div
                class="click"
                data-name="日内瓦"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="rineiwa"
              ></div>日内瓦
            </li>
            <li>
              <div
                class="click"
                data-name="卢塞恩"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="lusaien"
              ></div>卢塞恩
            </li>
            <li>
              <div
                class="click"
                data-name="因特拉肯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="yintelaken"
              ></div>因特拉肯
            </li>
            <li>
              <div
                class="click"
                data-name="圣莫里茨"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="shengmolizi"
              ></div>圣莫里茨
            </li>
            <li>
              <div
                class="click"
                data-name="蒙特勒"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="mengtele"
              ></div>蒙特勒
            </li>
            <li>
              <div
                class="click"
                data-name="伯尔尼"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="boerni"
              ></div>伯尔尼
            </li>
          </ul>
        </div>
        <div class="country" data-name="英国">
          <h3>
            <span>英国</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="yingguo"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="伦敦"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="lundun"
              ></div>伦敦
            </li>
            <li>
              <div
                class="click"
                data-name="多佛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="duofo"
              ></div>多佛
            </li>
            <li>
              <div
                class="click"
                data-name="伯克郡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="bokejun"
              ></div>伯克郡
            </li>
            <li>
              <div
                class="click"
                data-name="苏格兰"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="sugelan"
              ></div>苏格兰
            </li>
            <li>
              <div
                class="click"
                data-name=" 华威"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="huawei"
              ></div>华威
            </li>
            <li>
              <div
                class="click"
                data-name="剑桥"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="jianqiao"
              ></div>剑桥
            </li>
            <li>
              <div
                class="click"
                data-name="约克"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="yueke"
              ></div>约克
            </li>
            <li>
              <div
                class="click"
                data-name="爱丁堡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="aidingbao"
              ></div>爱丁堡
            </li>
            <li>
              <div
                class="click"
                data-name="曼彻斯特"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="manchesite"
              ></div>曼彻斯特
            </li>
            <li>
              <div
                class="click"
                data-name="牛津"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="niujin"
              ></div>牛津
            </li>
            <li>
              <div
                class="click"
                data-name="温莎"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="wensha"
              ></div>温莎
            </li>
            <li>
              <div
                class="click"
                data-name="巴斯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="basi"
              ></div>巴斯
            </li>
          </ul>
        </div>
        <div class="country" data-name="希腊">
          <h3>
            <span>希腊</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="xila"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="雅典"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="yadian"
              ></div>雅典
            </li>
            <li>
              <div
                class="click"
                data-name="米克诺斯岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="mikenuosidao"
              ></div>米克诺斯岛
            </li>
            <li>
              <div
                class="click"
                data-name="圣托里尼"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="shengtuonili"
              ></div>圣托里尼
            </li>
            <li>
              <div
                class="click"
                data-name="迈泰奥拉"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="maitaiaola"
              ></div>迈泰奥拉
            </li>
            <li>
              <div
                class="click"
                data-name="特尔斐"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="teerfei"
              ></div>特尔斐
            </li>
            <li>
              <div
                class="click"
                data-name="扎金索斯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="zhajinsuosi"
              ></div>扎金索斯
            </li>
          </ul>
        </div>
        <div class="country" data-name="意大利">
          <h3>
            <span>意大利</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="yidali"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="佛罗伦萨"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="foluolunsa"
              ></div>佛罗伦萨
            </li>
            <li>
              <div
                class="click"
                data-name="比萨"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="bisa"
              ></div>比萨
            </li>
            <li>
              <div
                class="click"
                data-name="卢卡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="luka"
              ></div>卢卡
            </li>
            <li>
              <div
                class="click"
                data-name="那不勒斯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="nabulesi"
              ></div>那不勒斯
            </li>
            <li>
              <div
                class="click"
                data-name="锡耶纳"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="xiyena"
              ></div>锡耶纳
            </li>
            <li>
              <div
                class="click"
                data-name="托斯卡纳"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="tuosikana"
              ></div>托斯卡纳
            </li>
            <li>
              <div
                class="click"
                data-name="威尼斯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="weinisi"
              ></div>威尼斯
            </li>
            <li>
              <div
                class="click"
                data-name="罗马"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="luoma"
              ></div>罗马
            </li>
            <li>
              <div
                class="click"
                data-name="米兰"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="milan"
              ></div>米兰
            </li>
            <li>
              <div
                class="click"
                data-name="波托菲诺"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="botuofeiluo"
              ></div>波托菲诺
            </li>
            <li>
              <div
                class="click"
                data-name="维罗纳"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="weiluona"
              ></div>维罗纳
            </li>
          </ul>
        </div>
        <div class="country" data-name="西班牙">
          <h3>
            <span>西班牙</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="xibanya"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="瓦伦西亚"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="walunxiya"
              ></div>瓦伦西亚
            </li>
            <li>
              <div
                class="click"
                data-name="巴塞罗那"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="basailuona"
              ></div>巴塞罗那
            </li>
            <li>
              <div
                class="click"
                data-name="托莱多"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="tuolaiduo"
              ></div>托莱多
            </li>
            <li>
              <div
                class="click"
                data-name="塞哥维亚"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="saigeweiya"
              ></div>塞哥维亚
            </li>
            <li>
              <div
                class="click"
                data-name="赫罗纳"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="heluona"
              ></div>赫罗纳
            </li>
            <li>
              <div
                class="click"
                data-name="科尔多瓦"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="keerduowa"
              ></div>科尔多瓦
            </li>
            <li>
              <div
                class="click"
                data-name="阿维拉"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="aweila"
              ></div>阿维拉
            </li>
            <li>
              <div
                class="click"
                data-name="马拉加"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="malajia"
              ></div>马拉加
            </li>
            <li>
              <div
                class="click"
                data-name="马德里"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="madeli"
              ></div>马德里
            </li>
            <li>
              <div
                class="click"
                data-name="直布罗陀"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="zhibuluotuo"
              ></div>直布罗陀
            </li>
            <li>
              <div
                class="click"
                data-name="塞维利亚"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="saiweiliya"
              ></div>塞维利亚
            </li>
            <li>
              <div
                class="click"
                data-name="格拉纳达"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="gelanada"
              ></div>格拉纳达
            </li>
          </ul>
        </div>
        <div class="country" data-name="荷兰">
          <h3>
            <span>荷兰</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="helan"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="阿姆斯特丹"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="amusitedan"
              ></div>阿姆斯特丹
            </li>
            <li>
              <div
                class="click"
                data-name="鹿特丹"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="lutedan"
              ></div>鹿特丹
            </li>
            <li>
              <div
                class="click"
                data-name="海牙"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="haiya"
              ></div>海牙
            </li>
          </ul>
        </div>
        <div class="country" data-name="法国">
          <h3>
            <span>法国</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="faguo"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="里昂"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="liang"
              ></div>里昂
            </li>
            <li>
              <div
                class="click"
                data-name="安纳西"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="annaxi"
              ></div>安纳西
            </li>
            <li>
              <div
                class="click"
                data-name="马赛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="masai"
              ></div>马赛
            </li>
            <li>
              <div
                class="click"
                data-name="斯特拉斯堡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="sitelasibao"
              ></div>斯特拉斯堡
            </li>
            <li>
              <div
                class="click"
                data-name="戛纳"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="gana"
              ></div>戛纳
            </li>
            <li>
              <div
                class="click"
                data-name="芒通"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="mangtong"
              ></div>芒通
            </li>
            <li>
              <div
                class="click"
                data-name="第戎"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="dirong"
              ></div>第戎
            </li>
            <li>
              <div
                class="click"
                data-name="诺曼底"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="nuomandi"
              ></div>诺曼底
            </li>
            <li>
              <div
                class="click"
                data-name="尼斯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="nisi"
              ></div>尼斯
            </li>
            <li>
              <div
                class="click"
                data-name="艾克斯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="aikesi"
              ></div>艾克斯
            </li>
            <li>
              <div
                class="click"
                data-name="巴黎"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="bali"
              ></div>巴黎
            </li>
            <li>
              <div
                class="click"
                data-name="波尔多"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="boerduo"
              ></div>波尔多
            </li>
            <li>
              <div
                class="click"
                data-name="勃艮第"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="bogendi"
              ></div>勃艮第
            </li>
            <li>
              <div
                class="click"
                data-name="阿维尼翁"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="aweiniweng"
              ></div>阿维尼翁
            </li>
            <li>
              <div
                class="click"
                data-name="阿尔勒"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="aerle"
              ></div>阿尔勒
            </li>
            <li>
              <div
                class="click"
                data-name="卡尔卡松"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="kaerkasong"
              ></div>卡尔卡松
            </li>
          </ul>
        </div>
        <div class="country" data-name="捷克">
          <h3>
            <span>捷克</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="jieke"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="布拉格"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="bulage"
              ></div>布拉格
            </li>
          </ul>
        </div>
        <div class="country" data-name="匈牙利">
          <h3>
            <span>匈牙利</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="xiongyali"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="布达佩斯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="budapeisi"
              ></div>布达佩斯
            </li>
          </ul>
        </div>
        <div class="country" data-name="葡萄牙">
          <h3>
            <span>葡萄牙</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="putaoya"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="里斯本"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="lisiben"
              ></div>里斯本
            </li>
          </ul>
        </div>
        <div class="country" data-name="德国">
          <h3>
            <span>德国</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="deguo"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="科隆"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="kelong"
              ></div>科隆
            </li>
            <li>
              <div
                class="click"
                data-name="罗腾堡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="luotengbao"
              ></div>罗腾堡
            </li>
            <li>
              <div
                class="click"
                data-name="法兰克福"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="falankefu"
              ></div>法兰克福
            </li>
            <li>
              <div
                class="click"
                data-name="纽伦堡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="niulunbao"
              ></div>纽伦堡
            </li>
            <li>
              <div
                class="click"
                data-name="达豪"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="dahao"
              ></div>达豪
            </li>
            <li>
              <div
                class="click"
                data-name="贝希特斯加登"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="beixitesijiadeng"
              ></div>贝希特斯加登
            </li>
            <li>
              <div
                class="click"
                data-name="波恩"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="boen"
              ></div>波恩
            </li>
            <li>
              <div
                class="click"
                data-name="特里尔"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="telier"
              ></div>特里尔
            </li>
            <li>
              <div
                class="click"
                data-name="波茨坦"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="bocitan"
              ></div>波茨坦
            </li>
            <li>
              <div
                class="click"
                data-name="柏林"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="bolin"
              ></div>柏林
            </li>
            <li>
              <div
                class="click"
                data-name="海德堡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="haidebao"
              ></div>海德堡
            </li>
            <li>
              <div
                class="click"
                data-name="慕尼黑"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="munihei"
              ></div>慕尼黑
            </li>
          </ul>
        </div>
        <div class="country" data-name="奥地利">
          <h3>
            <span>奥地利</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="aodili"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="因斯布鲁克"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="yinsibuluke"
              ></div>因斯布鲁克
            </li>
            <li>
              <div
                class="click"
                data-name="维也纳"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="weiyena"
              ></div>维也纳
            </li>
            <li>
              <div
                class="click"
                data-name="萨尔兹堡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="saerzibao"
              ></div>萨尔兹堡
            </li>
          </ul>
        </div>
        <div class="country" data-name="比利时">
          <h3>
            <span>比利时</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="bilishi"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="布鲁塞尔"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="bulusaier"
              ></div>布鲁塞尔
            </li>
            <li>
              <div
                class="click"
                data-name="布鲁日"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="buluri"
              ></div>布鲁日
            </li>
          </ul>
        </div>
        <div class="country" data-name="梵蒂冈">
          <h3>
            <span>梵蒂冈</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="fandigang"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="梵蒂冈城"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="fandigangcheng"
              ></div>梵蒂冈城
            </li>
          </ul>
        </div>
        <div class="country" data-name="爱尔兰">
          <h3>
            <span>爱尔兰</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="aierlan"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="都柏林"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="dubolin"
              ></div>都柏林
            </li>
          </ul>
        </div>
        <div class="country" data-name="挪威">
          <h3>
            <span>挪威</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="nuowei"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="奥斯陆"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="aosilu"
              ></div>奥斯陆
            </li>
          </ul>
        </div>
        <div class="country" data-name="冰岛">
          <h3>
            <span>冰岛</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="bingdao"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="雷克雅未克"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="leikeyaweike"
              ></div>雷克雅未克
            </li>
          </ul>
        </div>
        <div class="country" data-name="芬兰">
          <h3>
            <span>芬兰</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="0"
                data-hasdestpage="1"
                data-areacode="fenlan"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="拉普兰德"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="lapulande"
              ></div>拉普兰德
            </li>
            <li>
              <div
                class="click"
                data-name="赫尔辛基"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="heerxinji"
              ></div>赫尔辛基
            </li>
            <li>
              <div
                class="click"
                data-name="凯米"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="kaimi"
              ></div>凯米
            </li>
            <li>
              <div
                class="click"
                data-name="罗瓦涅米"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="luowaniemi"
              ></div>罗瓦涅米
            </li>
            <li>
              <div
                class="click"
                data-name="禹拉斯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="yulasi"
              ></div>禹拉斯
            </li>
          </ul>
        </div>
        <div class="country" data-name="瑞典">
          <h3>
            <span>瑞典</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="ruidian"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="哥德堡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="gedebao"
              ></div>哥德堡
            </li>
            <li>
              <div
                class="click"
                data-name="斯德哥尔摩"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="sidegeermo"
              ></div>斯德哥尔摩
            </li>
          </ul>
        </div>
      </div>
      <div class="body hide" data-tab-id="4" v-show="nowIndex===4">
        <div class="hotseason">
          <h3>
            <span>热门目的地</span>
          </h3>
          <ul class="clearfix">
            <li style="background-image: url(https://pic.itrip.com/p/20161013172220-764.png)">
              <div
                class="click"
                data-name="新加坡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="xinjiapo"
              ></div>
              <span class="banner-name">新加坡</span>
              <span class="english-name">SINGAPORE</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013172307-976.png)">
              <div
                class="click"
                data-name="普吉岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="pujidao"
              ></div>
              <span class="banner-name">普吉岛</span>
              <span class="english-name">PHUKET</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013172420-796.png)">
              <div
                class="click"
                data-name="曼谷"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="mangu"
              ></div>
              <span class="banner-name">曼谷</span>
              <span class="english-name">BANGKOK</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013172602-397.png)">
              <div
                class="click"
                data-name="巴厘岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="balidao"
              ></div>
              <span class="banner-name">巴厘岛</span>
              <span class="english-name">BALI</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161014113150-136.png)">
              <div
                class="click"
                data-name="塞班岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="saiban"
              ></div>
              <span class="banner-name">塞班岛</span>
              <span class="english-name">SAIPAN</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013172515-989.png)">
              <div
                class="click"
                data-name="苏梅岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="sumeidao"
              ></div>
              <span class="banner-name">苏梅岛</span>
              <span class="english-name">KOH SAMUI</span>
            </li>
          </ul>
        </div>
        <div class="country" data-name="泰国">
          <h3>
            <span>泰国</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="taiguo"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="象岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="xiangdao"
              ></div>象岛
            </li>
            <li>
              <div
                class="click"
                data-name="曼谷"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="mangu"
              ></div>曼谷
            </li>
            <li>
              <div
                class="click"
                data-name="清迈"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="qingmai"
              ></div>清迈
            </li>
            <li>
              <div
                class="click"
                data-name="普吉岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="pujidao"
              ></div>普吉岛
            </li>
            <li>
              <div
                class="click"
                data-name="苏梅岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="sumeidao"
              ></div>苏梅岛
            </li>
            <li>
              <div
                class="click"
                data-name="甲米"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="jiami"
              ></div>甲米
            </li>
            <li>
              <div
                class="click"
                data-name="芭提雅"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="batiya"
              ></div>芭提雅
            </li>
          </ul>
        </div>
        <div class="country" data-name="印度尼西亚">
          <h3>
            <span>印度尼西亚</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="yindunixiya"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="巴厘岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="balidao"
              ></div>巴厘岛
            </li>
          </ul>
        </div>
        <div class="country" data-name="马来西亚">
          <h3>
            <span>马来西亚</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="malaixiya"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="吉隆坡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="jilongpo"
              ></div>吉隆坡
            </li>
            <li>
              <div
                class="click"
                data-name="沙巴"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="shaba"
              ></div>沙巴
            </li>
            <li>
              <div
                class="click"
                data-name="新山"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="xinshan"
              ></div>新山
            </li>
            <li>
              <div
                class="click"
                data-name="热浪岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="relangdao"
              ></div>热浪岛
            </li>
            <li>
              <div
                class="click"
                data-name="沙捞越"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="shalaoyue"
              ></div>沙捞越
            </li>
          </ul>
        </div>
        <div class="country" data-name="新加坡">
          <h3>
            <span>新加坡</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="xinjiapo"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="新加坡市"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="xjp"
              ></div>新加坡市
            </li>
          </ul>
        </div>
      </div>
      <div class="body hide" data-tab-id="5" v-show="nowIndex===5">
        <div class="hotseason">
          <h3>
            <span>热门目的地</span>
          </h3>
          <ul class="clearfix">
            <li style="background-image: url(https://pic.itrip.com/p/20161013173018-327.png)">
              <div
                class="click"
                data-name="纽约"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="niuyue"
              ></div>
              <span class="banner-name">纽约</span>
              <span class="english-name">NEW YORK</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013173129-931.png)">
              <div
                class="click"
                data-name="洛杉矶"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="luoshanji"
              ></div>
              <span class="banner-name">洛杉矶</span>
              <span class="english-name">LOS ANGELES</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013173557-875.png)">
              <div
                class="click"
                data-name="拉斯维加斯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="lasiweijiasi"
              ></div>
              <span class="banner-name">拉斯维加斯</span>
              <span class="english-name">LAS VEGAS</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161013173824-783.png)">
              <div
                class="click"
                data-name="旧金山"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="jiujinshan"
              ></div>
              <span class="banner-name">旧金山</span>
              <span class="english-name">SAN FRANCISCO</span>
            </li>
            <li style="background-image: url(https://pic.itrip.com/p/20161025113129-319.png)">
              <div
                class="click"
                data-name="夏威夷"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="xiaweiyi"
              ></div>
              <span class="banner-name">夏威夷</span>
              <span class="english-name">HAWAII</span>
            </li>
          </ul>
        </div>
        <div class="country" data-name="美国">
          <h3>
            <span>美国</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="meiguo"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="圣莫妮卡"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="shengmonika"
              ></div>圣莫妮卡
            </li>
            <li>
              <div
                class="click"
                data-name="休斯敦"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="xiusidun"
              ></div>休斯敦
            </li>
            <li>
              <div
                class="click"
                data-name="棕榈泉"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="zonglvquan"
              ></div>棕榈泉
            </li>
            <li>
              <div
                class="click"
                data-name="西雅图"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="xiyatu"
              ></div>西雅图
            </li>
            <li>
              <div
                class="click"
                data-name="费城"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="feicheng"
              ></div>费城
            </li>
            <li>
              <div
                class="click"
                data-name="芝加哥"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="zhijiage"
              ></div>芝加哥
            </li>
            <li>
              <div
                class="click"
                data-name="华盛顿"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="huashengdun"
              ></div>华盛顿
            </li>
            <li>
              <div
                class="click"
                data-name="波士顿"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="boshidun"
              ></div>波士顿
            </li>
            <li>
              <div
                class="click"
                data-name="圣地亚哥"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="shengdiyage"
              ></div>圣地亚哥
            </li>
            <li>
              <div
                class="click"
                data-name="夏威夷"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="xiaweiyi"
              ></div>夏威夷
            </li>
            <li>
              <div
                class="click"
                data-name="奥兰多"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="aolanduo"
              ></div>奥兰多
            </li>
            <li>
              <div
                class="click"
                data-name="旧金山"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="jiujinshan"
              ></div>旧金山
            </li>
            <li>
              <div
                class="click"
                data-name="拉斯维加斯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="lasiweijiasi"
              ></div>拉斯维加斯
            </li>
            <li>
              <div
                class="click"
                data-name="洛杉矶"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="luoshanji"
              ></div>洛杉矶
            </li>
            <li>
              <div
                class="click"
                data-name="纽约"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="niuyue"
              ></div>纽约
            </li>
            <li>
              <div
                class="click"
                data-name="迈阿密"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="maiami"
              ></div>迈阿密
            </li>
            <li>
              <div
                class="click"
                data-name="达拉斯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="dalasi"
              ></div>达拉斯
            </li>
            <li>
              <div
                class="click"
                data-name="纳什维尔"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="nashiweier"
              ></div>纳什维尔
            </li>
            <li>
              <div
                class="click"
                data-name="查尔斯顿"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="chaersidun"
              ></div>查尔斯顿
            </li>
            <li>
              <div
                class="click"
                data-name="丹佛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="danfo"
              ></div>丹佛
            </li>
            <li>
              <div
                class="click"
                data-name="波特兰"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="botelan"
              ></div>波特兰
            </li>
            <li>
              <div
                class="click"
                data-name="圣安东尼奥"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="shengandongniao"
              ></div>圣安东尼奥
            </li>
            <li>
              <div
                class="click"
                data-name="圣巴巴拉"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="shengbabala"
              ></div>圣巴巴拉
            </li>
            <li>
              <div
                class="click"
                data-name="佩吉"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="peiji"
              ></div>佩吉
            </li>
            <li>
              <div
                class="click"
                data-name="杰克逊小镇"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="jiekexunxiaozhen"
              ></div>杰克逊小镇
            </li>
            <li>
              <div
                class="click"
                data-name="孟菲斯"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="mengfeisi"
              ></div>孟菲斯
            </li>
            <li>
              <div
                class="click"
                data-name="亚特兰大"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="yatelanda"
              ></div>亚特兰大
            </li>
            <li>
              <div
                class="click"
                data-name="布法罗"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="bufaluo"
              ></div>布法罗
            </li>
            <li>
              <div
                class="click"
                data-name="摩押"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="moya"
              ></div>摩押
            </li>
            <li>
              <div
                class="click"
                data-name="新奥尔良"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="xinaoerliang"
              ></div>新奥尔良
            </li>
            <li>
              <div
                class="click"
                data-name="阿纳海姆"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="anahaimu"
              ></div>阿纳海姆
            </li>
            <li>
              <div
                class="click"
                data-name="阿拉斯加"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="alasijia"
              ></div>阿拉斯加
            </li>
          </ul>
        </div>
        <div class="country" data-name="塞班岛">
          <h3>
            <span>塞班岛</span>
          </h3>
          <ul class="place-name clearfix">
            <li>
              <div
                class="click"
                data-name="全部"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="saiban"
              ></div>全部
            </li>
            <li>
              <div
                class="click"
                data-name="塞班岛"
                data-originproductlistpage="1"
                data-hasdestpage="0"
                data-areacode="saiban"
              ></div>塞班岛
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import request from "../libs/request";
export default Vue.extend({
  data() {
    return {
      swiperList: [],
      iconList: [],
      nowIndex:0,
    };
  },
  created(){
    this.getlist();
  },
  methods:{
        toggleTabs:function(index){
          console.log(666);
          console.log(index);
            this.nowIndex=index;
        },
        getDescribe(id) {
//   直接调用$router.push 实现携带参数的跳转
        this.$router.push({
          path: `/about/${id}`,
        })
      },
      async getlist() {
        const { g, p } = request;
        const data = await g({
          url:
            "https://www.easy-mock.com/mock/5cff684bfac62e175f62d307/example/qunar"
        });
        this.swiperList = data.data.data.swiperList;
        this.iconList = data.data.data.iconList;
        console.log(data);
      },
    }
    
  
});
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  padding-top: 20vw;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  background-color: #fff;
}
.main .left {
  background: #f0f0f0;
  width: 24vw;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.main .left ul {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.main .left .active {
  background-color: #fff;
  color: #1ac5fb;
}
.main .left ul li {
  width: 24vw;
  height: 13.33vw;
  border-bottom: 1px solid #fff;
  text-align: center;
  color: #333;
  line-height: 13.33vw;
  font-size: 3.47vw;
}
.main .right {
  flex: 1;
  box-sizing: border-box;
  padding-left: 2.67vw;
  padding-top: 1.6vw;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
/* .hide {
  display: none !important;
} */
.main .right .hotseason h3 {
  height: 11.2vw;
  line-height: 11.2vw;
  font-size: 3.47vw;
  font-weight: 400;
}
.main .right .hotseason h3 span {
  padding-left: 2.67vw;
  border-left: 0.67vw solid #1ac5fb;
}
.clearfix {
  zoom: 1;
  clear: both;
}
.main .right .hotseason ul li {
  position: relative;
  width: 34vw;
  height: 24vw;
  border-radius: 2px;
  overflow: hidden;
  float: left;
  margin-bottom: 2.67vw;
  margin-right: 2.67vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  line-height: 4.13vw;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.click {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main .right .hotseason ul li .banner-name {
  font-size: 3.47vw;
}
.english-name {
  text-align: center;
}
.main .right .country h3 {
    height: 11.2vw;
    line-height: 11.2vw;
    font-size: 3.47vw;
}
.main .right .country h3 span {
    padding-left: 2.67vw;
    border-left: .67vw solid #1ac5fb;
}
.clearfix {
    zoom: 1;
    clear: both;
}
.main .right .country ul li {
    float: left;
    width: 21vw;
    height: 8.53vw;
    border: 1px solid rgba(204,204,204,1);
    border-radius: 2px;
    margin-right: 2.53vw;
    margin-bottom: 2.53vw;
    font-size: 3.47vw;
    line-height: 8.53vw;
    text-align: center;
    box-sizing: border-box;
    padding: 0 2vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
}
.click {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
</style>
