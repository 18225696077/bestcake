<template>
  <div class="show">
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img class="imgs" :src="item">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="cake-info">
       <div class="gengduo" @click="gengduo">更多商品</div>
      <div class="cake-info-datum-list">
        <div class="information-Name">{{GetCake.Name}}</div>
        <div class="promotion-a" v-show="$route.query.c.indexOf('NS')!=-1">新</div>
        <div class="cake-info-right">
          <span class="cake-info-left">甜度</span>
          <!-- es6 拼接-->
          <img :src="`https://res.bestcake.com/m-images/ww/jz/tiandu_${GetCake.Sweet || 3}.png`">
        </div>
        <div class="cake-info-right1">
          <span class="cake-info-left1">口味</span>
          <span class="cake-info-right2">{{GetCake.CategoryName}}</span>
        </div>
        <div class="cake-info-righta">
          <span class="cake-info-left2">原材料</span>
          <span class="cake-info-right3">{{GetCake.Resource||GetCake.Resourse}}</span>
        </div>
        <div class="cake-info-right1">
          <span class="cake-info-left1">适合人群</span>
          <span class="cake-1">所有人群</span>
        </div>
        <div class="cake-info-right1">
          <span class="cake-info-left-hfc">保鲜条件</span>
          <span class="hfc">最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月30日建议3天内食用。</span>
        </div>
        <div class="cake-info-right1">
          <img class="pjimg" src="https://res.bestcake.com/m-images/ww/detail/evaluate-a.png">
          <span class="pj">商品评价</span>
          <span class="tiao">(99条)</span>
        </div>

        <!-- 普通一个镑 -->
        <div class="Size" v-show="GetCake.Brand=='女神系列'">{{GetCake.Size}}</div>
        <div class="doc-icon-custom" v-show="GetCake.Brand=='女神系列'">
          <div class="doc-icon-custom-1">
            <div class="left" style="width:160px;">
              <img
                class="img1"
                src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112"
              >
              <span class="right">直径13.5cm</span>
            </div>
            <div class="left">
              <img class="img1" src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png">
              <span class="right">适合4-5人分享</span>
            </div>
            <div class="left">
              <img class="img1" src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
              <span class="right">含五人份餐具</span>
            </div>
            <div class="left">
              <img class="img1" src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
              <span class="right">至少需提前一天预约</span>
            </div>
          </div>
        </div>
        <!-- 切换四个镑 -->
        <div class="bangbang" v-show="GetCake.Brand=='卡思客'">
          <div class="bang">
            <span
              class="bang1"
              v-for="(item,index) in GetCake.CakeType"
              :key="index"
              @click="setTab(index)"
              :class="{active:tabActive===index}"
            >{{item.Size}}</span>
          </div>
          <div class="doc-icon-custom">
            <div class="doc-icon-custom-1" v-show="tabActive==0">
              <div class="left" style="width:160px;">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112"
                >
                <span class="right">13.5*13.5cm</span>
              </div>
              <div class="left">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png"
                >
                <span class="right">适合4-5人分享</span>
              </div>
              <div class="left">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png"
                >
                <span class="right">含五人份餐具</span>
              </div>
              <div class="left">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png"
                >
                <span class="right">至少需提前一天预约</span>
              </div>
            </div>
            <div class="doc-icon-custom-1" v-show="tabActive==1">
              <div class="left" style="width:160px;">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112"
                >
                <span class="right">17*17cm</span>
              </div>
              <div class="left">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png"
                >
                <span class="right">适合8-10人分享</span>
              </div>
              <div class="left">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png"
                >
                <span class="right">含十人份餐具</span>
              </div>
              <div class="left">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png"
                >
                <span class="right">至少需提前一天预约</span>
              </div>
            </div>
            <div class="doc-icon-custom-1" v-show="tabActive==2">
              <div class="left" style="width:160px;">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112"
                >
                <span class="right">21*21cm</span>
              </div>
              <div class="left">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png"
                >
                <span class="right">适合12-15人分享</span>
              </div>
              <div class="left">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png"
                >
                <span class="right">含十五人份餐具</span>
              </div>
              <div class="left">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png"
                >
                <span class="right">至少需提前一天预约</span>
              </div>
            </div>
            <div class="doc-icon-custom-1" v-show="tabActive==3">
              <div class="left" style="width:160px;">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112"
                >
                <span class="right">27*40.5cm</span>
              </div>
              <div class="left">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png"
                >
                <span class="right">适合35-40人分享</span>
              </div>
              <div class="left">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png"
                >
                <span class="right">含四十人份餐具</span>
              </div>
              <div class="left">
                <img
                  class="img1"
                  src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png"
                >
                <span class="right">至少需提前一天预约</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 乳品系列 几提-->
        <div class="ruping" v-show="GetCake.Brand=='乳品系列'">
          <div class="size">
            <span
              class="size1"
              v-for="(item,index) in Cartinfo"
              :key="index"
              @click="setTab(index)"
              :class="{active2:tabActive===index}"
            >{{item.Size}}</span>
          </div>
        </div>

        <!-- 极致蛋糕 -->
        <div class="jz" v-show="GetCake.Brand=='极致蛋糕'">
          <div class="jz1">
            <span
              class="jz2"
              v-for="(item,index) in jzCake"
              :key="index"
              @click="setTab(index)"
              :class="{active3:tabActive===index}"
            >{{item.KW}}</span>
          </div>
          <div class="doc-icon-custom-1">
            <div class="left">
              <img class="img1" src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
              <span class="right">适合4-5人分享</span>
            </div>
            <div class="left">
              <img class="img1" src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
              <span class="right">至少需提前一天预约</span>
            </div>
          </div>
        </div>
      </div>
      <div class="num">
        <span class="num1">购买数量</span>
        <span class="jian" @click="jian">-</span>
        <span class="num2">{{num}}</span>
        <span class="jia" @click="jia">+</span>
      </div>
    </div>
    <jg-gonggao></jg-gonggao>
    <br>
    <br>
    <br>
    <br>
    <div class="gw">
      <div class="gw1">
        <!-- 三种切换价格 -->
        <div>
          <!-- 切换四个镑 -->
          <span
            v-for="(item,index) in GetCake.CakeType"
            :key="index"
            :class="{Active:tabActive===index}"
            v-show="tabActive==index&&GetCake.Brand=='卡思客'"
          >{{item.CurrentPrice*num}}.00</span>
          <!-- 普通一个镑 -->
          <span class="Price" v-show="GetCake.Brand=='女神系列'">{{GetCake.CurrentPrice*num}}.00</span>
          <!-- 乳品系列 几提-->
          <span
            class="Price"
            v-for="(item,index) in Cartinfo"
            :key="index"
            v-show="tabActive==index"
          >{{item.CurrentPrice*num}}.00</span>
          <!-- 极致蛋糕 -->
          <span
            class="Price"
            v-for="(item,index) in jzCake"
            v-show="tabActive==index"
          >{{item.CurrentPrice*num}}.00</span>
          <p class="p">
            <span class="y">已优惠:</span>
            <span class="h">0.00</span>
          </p>
        </div>
        <div>
          <span class="purchase-1" @click="add">加入购物车</span>
        </div>
        <div>
          <span class="purchase-2">立即购买</span>
        </div>
        <br>
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui"; //引入mintUi弹框
export default {
  name: "HelloWorld",
  data() {
    return {
      GetCakeList: [], //加入购物车分类数据  同一个 详情
      GetCake: {}, //品质甄选其他数据
      bannerList: [], //轮播图数据
      // GetRuPCake:[], //乳品系列数据
      // GetjzCake:[], //伴手礼数据
      num: 1,
      tabActive: 0, //切换
      Cartinfo: [], //乳品系列数据
      jzCake: {} //极致系列
    };
  },
  mounted() {
    //   console.log(this.ProName)
    this.pageInit();
  },
  methods: {
    setTab(index) {
      this.tabActive = index; //切换
    },
    gengduo(){
      this.$router.push({path:'/list/zy/jd'})
    },
    // 数量 价钱++ --
    jia() {
      this.num++;
    },
    jian() {
      if (this.num == 1) {
        return;
      }
      this.num--;
    },
    add(item) {
      console.log(item);
      var data = {
        Pid:
        this.GetCakeList[this.tabActive].Id ||
        this.GetCakeList[this.tabActive].ID,
        Name: this.GetCake.Name,
        eName: "",
        SupplyNo:this.GetCakeList[this.tabActive].SupplyNo||this.GetCakeList.SupplyNo,
        num: this.num,
        price: this.GetCakeList[this.tabActive].CurrentPrice,
        ImgUrl: this.bannerList[0],
        Size: this.GetCakeList[this.tabActive].Size,
        KW: this.GetCakeList[this.tabActive].KW,
        Brand: this.GetCake.Brand
      };
      this.$store.commit("add", data);
      console.log(this.$store.state.shopCart);

      //mintUi弹框
      MessageBox({
        title: "",
        message: "成功加到购物车",
        showCancelButton: true,
        confirmButtonText: "去结算",
        cancelButtonText: "再看看"
      }).then(action => {
          if(action=="confirm"){
            this.$router.push({path:'/cart'}) //跳转
          }
        }).catch(err => {
          if(err=='confirm'){
            this.$router.push({})
           
          }  
        });   
    },
    // add(item){
    //   console.log(item)
    // },

    // c                             key
    // SupplyNo: "NS-0119-11" 宠爱少女 ns-detail  Name: data.Name,
    // SupplyNo: "KSK-0001-1" 魔法猜心 jd-detail  ProName: 浓情花意
    // SupplyNo: "KSK-0001-1" 品质甄选 jd-detail  ProName: 奥利奥雪域牛乳芝士
    // SupplyNo: "RP-0005-59" 乳品     rp-detail  Name: 麦趣尔一号牧场纯牛奶(250ml×12)
    // SupplyNo: "JZ-0020-5"  伴手礼   jz-detail  ProName: 草莓先生

    // "https://res.bestcake.com/m-images/jz-detail/麦趣尔一号牧场纯牛奶(250ml×12)/麦趣尔一号牧场纯牛奶(250ml×12)-1.jpg"
    // https://res.bestcake.com/m-images/rp-detail/麦趣尔一号牧场纯牛奶(250ml×12)/麦趣尔一号牧场纯牛奶(250ml×12)-1.jpg

    pageInit() {
      //   宠爱少女接口
      if (this.$route.query.c.indexOf("NS") != -1) {
        this.GetNSCakeByName(res => {
          //  this.GetNSCake = res.data.Tag； 不能写会循环很多
          // console.log(res.data.Tag);
          res.data.Tag.forEach(el => {
            if (el.City == "上海") {
              this.GetCake = el;
              this.GetCakeList.push(el); //

              console.log(this.GetCakeList);
            }
          });
        });
        this.setBannerList("ns-detail");

        // 品质甄选接口
      } else if (this.$route.query.c.indexOf("KSK") != -1) {
        this.GetCakeByName(res => {
          this.GetCake = res.data.Tag.infos;
          console.log(this.GetCake);

          this.GetCakeList = res.data.Tag.infos.CakeType; //加入购物车
          console.log(this.GetCakeList);
        });

        this.setBannerList("jd-detail");

        // 乳品系列接口
      } else if (this.$route.query.c.indexOf("RP") != -1) {
        this.GetRuPCakeByName(res => {
          // this.GetRuPCake = res;
          console.log(res.data.Tag);
          res.data.Tag.forEach(el => {
            if (el.City == "上海") {
              this.GetCake = el;
              // console.log(this.GetCake)
               this.GetCakeList.push(el); //加入购物车
              this.Cartinfo.push(el);

             
            }
          });
          console.log(this.GetCake);
          console.log(this.Cartinfo);
          console.log(this.GetCakeList);
        });
        this.setBannerList("rp-detail");

        //伴手礼接口
      } else {
        this.GetjzCakeInfo(res => {
          this.GetCake = res.data.Tag[0];

          this.jzCake = res.data.Tag[0].CakeType;
          console.log(this.GetCake);
          console.log(this.jzCake);
          // console.log(res.data);

          this.GetCakeList = res.data.Tag[0].CakeType; //加入购物车
        });
        this.setBannerList("jz-detail");
      }
    },
    setBannerList(path) {
      for (var i = 0; i < 4; i++) {
        // https://res.bestcake.com/m-images/ns-detail/宠爱少女/宠爱少女-1.jpg?v=20170525?v=1
        // https://res.bestcake.com/m-images/jd-detail/奥利奥雪域牛乳芝士/%E5%A5%A5%E5%88%A9%E5%A5%A5%E9%9B%AA%E5%9F%9F%E7%89%9B%E4%B9%B3%E8%8A%9D%E5%A3%AB-1.jpg?v=20170607

        var str = `https://res.bestcake.com/m-images/${path}/${
          this.$route.query.key
        }/${this.$route.query.key}-${i + 1}.jpg`;
        this.bannerList.push(str);
      }
      // console.log(this.bannerList);
    },
    //   宠爱少女接口
    GetNSCakeByName(callback) {
      var data = {
        Name: this.$route.query.key //拿到key的值****
      };
      this.$apis.GetNSCakeByName(data).then(res => {
        callback(res);
      });
    },

    // 品质甄选接口
    GetCakeByName(callback) {
      var data = {
        ProName: this.$route.query.key
      };
      this.$apis.GetCakeByName(data).then(res => {
        callback(res);
      });
    },
    // 乳品系列接口
    GetRuPCakeByName(callback) {
      var data = {
        Name: this.$route.query.key //拿到key的值****
      };
      this.$apis.GetRuPCakeByName(data).then(res => {
        callback(res);
      });
    },
    //伴手礼接口
    GetjzCakeInfo(callback) {
      var data = {
        ProName: this.$route.query.key
      };
      this.$apis.GetjzCakeInfo(data).then(res => {
        callback(res);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.show {
  .swipe {
    width: 100%;
    height: r(190 * 2);
    .imgs {
      width: 100%;
      height: 100%;
    }
  }
  .cake-info {
    flex: 1;
    .cake-info-datum-list {
      padding-left: r(12);
      .information-Name {
        color: #333;
        font-size: r(14);
        margin: r(6) 0 r(12);
        font-weight: bold;
        height: r(14);
        text-align: center;
      }
      .promotion-a {
        height: r(26);
        border-radius: r(2);
        background: #f2495e;
        width: r(26);
        text-align: center;
        color: #fff;
        line-height: r(26);
        margin: r(8) r(140);
      }
      .cake-info-right {
        margin: r(120) 0 r(10);

        .cake-info-left {
          font-size: r(12);
          color: #9a9a9a;
          // padding-left: r(12);
        }
      }
      .cake-info-right > img {
        width: r(71);
        height: r(13);
        margin: 0 r(50);
      }
      .cake-info-right1 {
        margin-bottom: r(12);
        .cake-info-left1 {
          font-size: r(12);
          color: #9a9a9a;
        }
        .cake-info-right2 {
          font-size: r(12);
          color: #252525;
          margin: 0 r(50);
        }
      }
      .cake-info-righta {
        height: r(57);
        .cake-info-left2 {
          font-size: r(12);
          color: #9a9a9a;
          float: left;
        }
        .cake-info-right3 {
          width: r(230);
          height: r(38);
          float: left;
          padding-left: r(40);
        }
      }
      .cake-1 {
        padding-left: r(25);
        font-size: r(12);
      }
      .cake-info-left-hfc {
        font-size: r(12);
        color: #9a9a9a;
        float: left;
      }
      .hfc {
        width: r(230);
        height: r(58);
        float: left;
        padding-left: r(28);
      }
      .pjimg {
        width: r(17);
        height: r(14);
        padding-top: r(8);
      }
      .pj {
      }
      .tiao {
        font-size: r(12);
        color: #9a9a9a;
        padding-left: r(200);
      }
      .Size {
        border-radius: r(2);
        background: #02d3d6;
        color: #fff;
        text-align: center;
        border: r(1) solid #02d3d6;
        width: r(52);
        height: r(20);
        line-height: r(20);
      }
      .doc-icon-custom {
        margin-top: r(36);
        display: flex;
        .doc-icon-custom-1 {
          font-size: r(12);
          color: #333;
          display: flex;
          flex-wrap: wrap;
          .left {
            margin: r(8) 0;
            width: r(150) !important;
            .img1 {
              width: r(18);
              height: r(18);
            }
            .right {
              display: inline-block;
              font-size: r(12);
              padding-left: r(20);
            }
          }
        }
      }
    }
    .num {
      margin-top: r(60);
      .num1 {
        padding-left: r(12);
      }
      .jian {
        margin-left: r(150);
        display: inline-block;
        font-size: r(22);
        width: r(20);
        height: r(20);
        color: #333;
      }
      .num2 {
        color: #333;
        height: r(16);
        width: r(0);
        padding: 0 r(0);
        border: 0;
        display: inline-block;
        font-size: r(14);
      }
      .jia {
        padding-left: r(28);
        display: inline-block;
        width: r(30);
        height: r(20);
        color: #333;
        font-size: r(20);
      }
    }

    .bang {
      display: flex;
      justify-content: space-between;
      padding-left: r(12);
      padding-right: r(80);
      margin-top: r(25);
      .bang1 {
        border-radius: r(2);
        text-align: center;
        border: r(1) solid #ccc;
        line-height: r(20);
        width: r(45);
        height: r(25);
        height: r(20);
      }
      .active {
        background: #02d3d6;
        color: #fff;
      }
    }
  }
  .Active {
    width: r(135);
    height: r(27);
    color: #f2495e;
    font-size: r(16);
  }
  .Price {
    width: r(135);
    height: r(27);
    color: #f2495e;
    font-size: r(16);
    font-weight: 800;
    padding-top: r(12);
  }
  .gw {
    width: 100%;
    height: r(90);
    position: fixed;
    bottom: 0;
    .gw1 {
      display: flex;
      justify-content: space-between;
      height: r(90);
      background: #fff;
      .purchase-1 {
        // padding-left: r(90);
        display: inline-block;
        margin: r(12) r(12);
        font-size: r(16);
      }
      .purchase-2 {
        display: inline-block;
        width: r(85);
        height: r(45);
        background: #02d4d7;
        color: #fff;
        text-align: center;
        font-size: r(14);
        font-weight: bold;
        line-height: r(45);
        padding-right: r(0);
      }
      .p {
        padding-top: r(8);
        .y {
          font-size: r(10);
          display: inline-block;
        }
      }
    }
  }
  .ruping {
    height: r(25);
    margin: r(12) 0;
    .size {
      .size1 {
        display: inline-block;
        width: r(50);
        height: r(25);
        margin-left: r(12);
        padding: 0 r(12);
        line-height: r(25);
        text-align: center;
        font-size: r(12);
        border: 1px solid #ccc;
      }
    }
    .active2 {
      background: #02d3d6;
      color: #fff;
    }
  }
  .jz {
    height: r(30);
    margin: r(30) 0;
    .jz2 {
      display: inline-block;
      font-size: r(12);
      width: r(55);
      height: r(20);
      line-height: r(20);
      text-align: center;
      margin: 0 r(8);
      border: 1px solid #02d3d6;
      border-radius: r(2);
    }
    .active3 {
      background: #02d3d6;
      color: #fff;
    }
    .doc-icon-custom-1 {
      height: r(54);
      font-size: r(12);
      color: #333;
      display: flex;
      .left {
        margin: r(30) 0;
        width: r(150) !important;
        .img1 {
          width: r(16);
          height: r(16);
        }
        .right {
          display: inline-block;
          font-size: r(12);
          padding-left: r(3);
        }
      }
    }
  }
  .gengduo{
    position: fixed;
    top:r(15);
    right:r(-1);
    background-color: rgba(255,255,255,0.5);
    border-radius: r(4.5) 0vw 0vw r(4.5);
    border: r(1) solid #333;
    font-size: r(14);
    width: r(78);
    height: r(33);
    line-height: r(33);
    text-align: center;
  }
}
</style>
