<template>
  <div id="app">
    <!-- https://res.bestcake.com/m-images/CakeListConfig/749319704926346000.jpg -->
    <!-- <div > -->
    <div id="main">
      <div class="nav">
        <mt-swipe :auto="5000">
          <mt-swipe-item v-for="(item,index) in msg" :key="index" class="banner">
            <img v-lazy="'https://res.bestcake.com'+item.ImgUrl" alt>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div id="icon-main">
        <div v-for="(item,index) in CakeList" :key="index" class="icon-banner">
          <a href>
            <div>
              <img v-lazy="item.ImgUrl" alt class="icon-img">
            </div>
          </a>
          <div>
            <div>{{item.ActName}}</div>
          </div>
        </div>
      </div>

      <!-- 宠爱少女 -->
      <div class="guanggao">
        <div v-for="(item,index) in icoImgList" :key="index">
          <!-- 跳转 -->
          <img v-lazy="item. ImgUrl" @click="toShow(item)">
        </div>
      </div>

      <!-- 魔法猜心部分 -->
      <img src="https://res.bestcake.com/m-images-2/mofa.png" class="special">
      <div class="special-title">任选一款，走进你的心</div>

      <!-- 遍历送恋人... -->
      <div class="imgClass">
        <span
          v-for="(item,index) in tabClass"
          :key="index"
          @click="setTab(index)"
          :class="{active:tabActive===index}"
        >{{item}}</span>
      </div>
      <!-- 遍历魔法猜心数据 -->
      <ul class="mfcx">
        <!-- 跳转 -->
        <li v-for="(item,index) in activeList" :key="index" @click="toShow(item)">
          <img :src="item.ImgUrl" class="Img">
          <p class="Name">{{item.Name|textLengthSet(9)}}</p>
          <div class="Price">
            <span class="pricea">￥</span>
            <span class="CurrentPrice">{{item.CurrentPrice}}</span>
            <span class="Size">/{{item.Size}}</span>
          </div>
        </li>
      </ul>

      <!-- 品质甄选部分 -->
      <img src="https://res.bestcake.com/m-images-2/pinzhi.png" class="special">
      <div class="special-title">没尝过这些美味的人生，是不完美的</div>

      <div class="pinzhi-list" v-for="(item,index) in Cakeinfo" :key="index">
        <!-- 跳转 -->

        <!-- 左边 -->
        <div class="pinzhi-img">
          <img v-lazy="item.ImgUrl" @click="toShow(item)">
        </div>
        <!-- 右边 -->
        <div class="pinzhi-detail">
          <div class="pinzhi-name">{{item.ActiveName}}</div>
          <div class="pinzhi-info">{{item.MoreUrl|textLengthSet(11)}}</div>
          <div class="pinzhi-tip">
            <img
              src="https://res.bestcake.com/m-images-2/icon_zy.png"
              v-show="!(item.Brand=='乳品系列')"
            >
            <img src="https://res.bestcake.com/m-images-2/icon_yx.png" v-show="item.Brand=='乳品系列'">
          </div>
          <div class="pinzhi-price">
            <div>
              <label>
                <span class="price-a">￥</span>
                <span class="price-b">{{item.CurrentPrice}}</span>
                <span class="price-c">.00</span>
                <span class="price-d">/{{item.Size}}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="pinzhi-cart">
          <img
            @click="add($event,item)"
            src="https://res.bestcake.com/m-images-2/pinzhi-cart.png"
          >
        </div>
      </div>
      
                    
    </div>
    <jg-gonggao></jg-gonggao>
    
  <p>加载中...</p>
  <br>
  </div>
</template>

<script>
// http://m.bestcake.com/json1811.ashx?v=1560068537199&c=Index&m=GetBannerList&Type=2&City=%E4%B8%8A%E6%B5%B7
// http://m.bestcake.com/json1811.ashx?v=1560078721417&c=Index&m=GetIndexCakeListRequest Method: GET
export default {
  name: "App",
  data() {
    return {
      msg: [],
      CakeList: [], //八个图标
      selected: "首页",
      Cakeinfo: [], //品质甄选
      goodList: [], //
      activeList: [],
      tabList: [], //魔法猜心
      tabActive: 0,
      //tab魔法猜心数据
      tabClass: ["送恋人", "送挚友", "送长者", "送亲子"],

      icoImgList: [
        {
          name: "宠爱少女",
          key: "宠爱少女",
          ImgUrl: "https://res.bestcake.com/m-images-2/guanggao1.png?v=0419"
        },
        {
          name: "小猪蛋糕-贝丽",
          key: "贝丽",
          ImgUrl: "https://res.bestcake.com/m-images-2/guangao22.png?v=0419"
        },
        {
          name: "星光游乐园",
          key: "星光游乐园",
          ImgUrl: "https://res.bestcake.com/m-images-2/guanggao3.png"
        }
      ]
    };
  },
  mounted() {
    this.joke(res => {
      this.msg = res; //轮播
    });
    this.GetIndexCakeList(res => {
      this.CakeList = res; //八个图标
    });
  },

  methods: {
    // 首页加入购物车
    add(e,item){
      flay(e,item.ImgUrl);
      console.log(item)
      var data={
        Pid: item.Pid,
        Name:item.Name,
        eName:'',
        SupplyNo:item.SupplyNo,
        num:1,
        price:item.CurrentPrice,
        ImgUrl:item.ImgUrl,
        Size:item.Size,
        to:"/details"+item.Imglink,
        Brand:item.Brand,
        bool:false
        
      }
      this.$store.commit('add',data);  
      // console.log(this.$store.state.shopCart['N'])  //数量
    },
    sub(data) {
      this.goodsList.forEach(item => {
        // 判断当前
        if (item.name == data.name) {
          item.num--;
          item.num = item.num <= 0 ? 0 : item.num;
        }
      });
    },

    // SupplyNo: "NS-0119-11" 宠爱少女
    // SupplyNo: "KSK-0001-1" 魔法猜心
    // SupplyNo: "KSK-0001-1" 品质甄选
    // SupplyNo: "RP-0005-59" 乳品
    // SupplyNo: "JZ-0020-5"  伴手礼

    //图片焦点图跳转详情页
    toShow(item) {
      var data = {
        key: item.Name || item.key, //拿到名字
        c: item.SupplyNo || "NS"
      };
      // router ****
      this.$router.push({
        path: "/show",
        query: { key: data.key, c: data.c }
      });
    },

    setTab(index) {
      // console.log(key);
      var activeList = []; //自己定义的
      // console.log(this.tabClass[index]) //送恋人 送挚友 送长者 送亲子
      this.tabList.forEach(item => {
        // console.log(this.tabList)
        // console.log(item.ActiveName)
        if (this.tabClass[index] == item.ActiveName) {
          activeList.push(item);
        }
      });
      console.log(activeList);
      this.activeList = activeList;
      this.activeList = activeList.slice(0, 3);
      this.tabActive = index;
    },

    // ----------接口部分
    joke(callback) {
      var data = {
        v: "1560068537199",
        c: "Index",
        m: "GetBannerList",
        Type: "2",
        City: "上海"
      };
      this.$apis.joke(data).then(res => {
        // console.log(res.data.Tag.List);
        // this.msg = res.data.Tag.List;
        callback(res.data.Tag.List); //轮播数据
      });
    },
    GetIndexCakeList(callback) {
      var data1 = {
        v: "1560078721417",
        c: "Index",
        m: "GetIndexCakeList"
      };
      this.$apis.GetIndexCakeList(data1).then(res => {
        // this.CakeList = res.data.Tag.iconList;  //icon图标
        callback(res.data.Tag.iconList);
        // console.log(res.data.Tag.list)

        // 魔法猜心 所有 和品质甄选 所有

        res.data.Tag.list.forEach(el => {
          if (el.TabType == 5) {
            this.Cakeinfo.push(el); //品质甄选 所有
          } else {
            this.tabList.push(el); //魔法猜心 所有
          }
          // console.log(this.Cakeinfo)
        });
        this.setTab(0); //在魔法猜心数据出来里面写 *****
      });
    }
  }
};
function flay(e,img) {
  // console.log(e,$);
  var flyer = $(
   `<img class="flyer-img" style='width:80px;height:80px;' src='${img}'>`
  );
  var top = $(window).scrollTop();
  var dh = event.pageY;
  var newh = dh - top;
  //  购物车节点位置,决定图片飘的位置
  var oBtn = $(".cart").offset();
  var newdh = oBtn.top - top;
  //  console.dir(flyer);

  flyer.fly({
    start: {
      left: event.pageX, //抛物体起点横坐标
      top: newh //抛物体起点纵坐标
    },
    end: {
      left: oBtn.left, //抛物体终点横坐标
      top: newdh //抛物体终点纵坐标
    },
    onEnd: function() {
      this.destory(); //销毁抛物体
    }
  });
}
</script>
<style scoped lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  #main {
    flex: 1;
    overflow: auto;
    .nav {
      width: 100%;
      height: r(162);
      img {
        width: 100%;
        height: 100%;
      }
    }
    #icon-main {
      display: flex;
      justify-content: center;
      text-align: center;
      flex-wrap: wrap;
      width: 100%;
      height: r(165);
      overflow: hidden;
      .icon-banner {
        width: r(75);
        height: r(67);
        margin-top: r(10);
        .icon-img {
          width: r(56);
          height: r(56);
        }
      }
    }
    .guanggao {
      height: r(164);
      display: flex;
      position: relative;
      padding: r(12);
      & :nth-child(1) {
        img {
          width: r(144);
          height: r(128);
        }
      }
      & :nth-child(2) {
        img {
          width: r(144);
          height: r(62);
          padding-left: r(10);
        }
      }
      & :nth-child(3) {
        img {
          width: r(144);
          height: r(62);
          position: absolute;
          right: r(10);
          top: r(80);
        }
      }
    }
    .special {
      width: 100%;
      height: r(16);
      margin: r(0) 0 r(9);
    }
    .special-title {
      width: 100%;
      text-align: center;
      color: #999;
      font-size: r(12);
      line-height: r(15);
      margin-bottom: r(26);
    }
    .pinzhi-list {
      height: r(94);
      padding: 0 r(13);
      margin-bottom: r(11);
      display: flex;
      justify-content: space-around;
      .pinzhi-cart > img {
        width: r(36);
        height: r(36);
        margin-top: r(55);
        margin-left: r(-40);
      }
      .pinzhi-img > img {
        width: r(94);
        height: r(94);
      }
      .pinzhi-detail {
        width: r(160);
        height: r(88);

        .pinzhi-tip > img {
          height: r(16);
          margin-left: 0;
        }
        .pinzhi-name {
          font-size: r(14);
          color: #333;
          margin: r(5) 0 0;
        }
        .pinzhi-info {
          font-size: r(12);
          color: #999;
          margin: 0 0 r(5);
        }
        .pinzhi-price {
          width: r(160);
          .price-a {
            font-size: r(12);
            color: rgb(255, 51, 0);
          }
          .price-b {
            font-size: r(14);
            color: rgb(255, 51, 0);
          }
          .price-c {
            font-size: r(12);
            color: rgb(255, 51, 0);
          }
          .price-d {
            font-size: r(12);
            color: rgb(212, 212, 212);
            margin: 0 0 0 r(5);
          }
        }
      }
    }

    .imgClass {
      display: flex;
      justify-content: space-between;
      padding: r(12);
      span {
        display: inline-block;
        width: r(52);
        height: r(20);
        border: r(1) solid #ccc;
        text-align: center;
      }
    }
    .mfcx {
      display: flex;
      justify-content: space-between;
      padding: 0 r(17) r(17) r(12);
      text-align: center;
      .Img {
        width: r(90);
        height: r(76);
      }
      .Name {
        color: #333;
        font-size: r(12);
      }
      .Price {
        .pricea {
          font-size: r(12);
          color: rgb(255, 51, 0);
        }
        .CurrentPrice {
          font-size: r(14);
          color: rgb(255, 51, 0);
        }
        .Size {
          color: rgb(212, 212, 212);
          font-size: r(12);
          padding-left: r(4);
        }
      }
    }
    .active {
      background: #7fcfd3;
      color: #fff;
    }
  }
  
}
</style>



