<template>
  <div class="hello">
    <!-- 遍历store里面存的数据 -->
    <div class="empty" v-show="$store.state.shopCart.list.length==0">购物车是空的哦~</div>
    <div v-for="(item,index) in $store.state.shopCart.list" :key="index">
      <div class="Cart">
        <div class="left">
          <input type="checkbox" class="allcheck" @click="danxuan(index)" v-model="item.pool">
        </div>
        <div class="center">
          <img :src="item.ImgUrl" @click="toShow(item)">
        </div>
        <div class="right">
          <div class="name">{{item.Name}}</div>
          <!-- 分两种数据情况 -->
          <span class="size">{{item.Size}}</span>
          <span class="size" v-show="item.Brand=='极致蛋糕'">{{item.KW}}</span>

          <span class="jian" @click="del(index)">-</span>
          <span class="num">{{item.num}}</span>
          <span class="jia" @click="add1(index)">+</span>
          <div class="allPrice">{{item.num*item.price}}.00</div>
        </div>
      </div>
      <div class="youhui">
        <span class="youhui1">优惠方式</span>
        <span class="youhui2">不参与活动</span>
      </div>
    </div>
    <!-- gwc-hr部分 -->
    <div class="gwc">
      <div class="gwc-hr">
        <div class="clplr">Hot&nbsp; Recommend</div>
        <div class="gwc-hr-1"></div>
        <div class="gwc-hr-2">热销新品推荐</div>
      </div>
      <div>
        <ul class="ul">
          <li class="li1" v-for="(item,index) in cartList" :key="index">
            <img
              class="imgs"
              :src="item.img"
              @click="toShow(item)"
            >
            <p class="p">{{item.Name}}</p>
            <div class="jiah">
              <span class="jiah1">{{item.price}}</span>
              <span class="jiah2">/{{item.Size}}</span>
              <img class="bao" src="https://res.bestcake.com/m-images/order/mw_firm_gwc.jpg" @click="add(item)">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <br>
    <br>
    <div class="gwc-js">
      <div class="gwc-js-1">
        <input
          type="checkbox"
          @click="quanxun"
          v-model="pool"
          style="width:18px;height:18px;margin-top:18px;"
        >
      </div>
      <div class="gwc-js-2">全选</div>
      <div class="gwc-js-3" @click="empty">清空</div>
      <div class="gwc-js-4">
        <p class="heji">
          <span class="heji1">合计：</span>
          <span class="heji2">{{count}}.00</span>
        </p>
        <p class="yh">
          <span class="yh1">已优惠：</span>
          <span class="yh2">0.00</span>
        </p>
      </div>
      <div class="gwc-js-5" @click="jiesuan">结算</div>
    </div>
    <p>加载中...</p>
    <br>
    <br>
  </div>
</template>

<script>

import { MessageBox } from "mint-ui";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
      cartList: [],
      allPrice: "",
      pool: false,
      allcheck: [],
      arr: [
        {
          //  https://res.bestcake.com\m-images\cart\mw_firm_sq.jpg
          img: "https://res.bestcake.com/m-images/cart/mw_firm_sq.jpg",
          //  https://res.bestcake.com\m-images\cart\mw_firm_sq.jpg
          uname: "伴手礼系列-吉致生巧",
          Price: "168.00",
          size: "/1盒",
          bao: "https://res.bestcake.com/m-images/order/mw_firm_gwc.jpg",
          Brand: "极致蛋糕",
          ID: 987,
          SupplyNo: "JZ-0029-1"
        },
        {
          img: "https://res.bestcake.com/m-images/cart/mw_firm_nzt_v1.jpg",
          uname: "伴手礼系列-吉致牛轧糖",
          Price: "68.00",
          size: "/16粒装",
          bao: "https://res.bestcake.com/m-images/order/mw_firm_gwc.jpg",
          Brand: "极致蛋糕",
          ID: 925,
          SupplyNo: "JZ-0019-17"
        },
        {
          img: "https://res.bestcake.com/m-images/cart/mw_firm_pf_v1.jpg",
          uname: "伴手礼系列-吉致泡芙",
          Price: "88.00",
          size: "/0.8磅",
          bao: "https://res.bestcake.com/m-images/order/mw_firm_gwc.jpg",
          Brand: "极致蛋糕",
          ID: 686,
          SupplyNo: "JZ-0011-8"
        }
      ]
    };
  },
  mounted() {
    this.GetJdListNew(res => {
      this.cartList = res;
      console.log(res);
      var cartList = [];
      res.forEach(ele => {
        if (
          (ele.Brand == "极致蛋糕" &&
            ele.Name.indexOf("吉致") != -1 &&
            ele.CategoryId == 4) ||
          ele.CategoryId == 5
        ) {
          cartList.push(ele);
          this.cartList = cartList.slice(2, 5);       
        }
      });this.cartList.forEach((el,index)=>{
        // *******************************
        //拼接数据
        el.img=`https://res.bestcake.com/m-images/jz-detail/${el.Name}/${el.Name}-4.jpg` //拼接字符串
        el.price=el.CurrentPrice;
        el.Name=el.Name;
        el.Size=el.Size
      })
      console.log(this.cartList);

    });
    console.log(this.$store.state.shopCart.list);
  },
  methods: {
    //全选
    danxuan(index) {
      var arr = [];
      if (this.$store.state.shopCart.list[index].pool) {
        this.$store.state.shopCart.list[index].pool = false;
      } else if (!this.$store.state.shopCart.list[index].pool) {
        this.$store.state.shopCart.list[index].pool = true;
      }
      this.$store.state.shopCart.list.forEach(el => {
        if (el.pool) {
          arr.push(el);
        }
      });
      this.allcheck = arr;
      if (this.$store.state.shopCart.list.length == this.allcheck.length) {
        this.pool = true;
      } else {
        this.pool = false;
      }
    },
    quanxun() {
      this.$store.state.shopCart.list.forEach(el => {
        if (el.pool) {
          el.pool = false;
        } else {
          el.pool = true;
        }
      });
      var arr = [];
      this.$store.state.shopCart.list.forEach(el => {
        if (el.pool) {
          arr.push(el);
        }
      });
      this.allcheck = arr;
    },

    //结算跳转
    jiesuan() {
      this.$router.push({ path: "/userinfo" });
    },
    add(item){
      console.log(item);
      var data={
        Pid: item.ID,
        Name:item.Name,
        eName:'',
        SupplyNo:item.SupplyNo,
        num:1,
        price:item.CurrentPrice,
        ImgUrl:`https://res.bestcake.com/m-images/jz-detail/${item.Name}/${item.Name}-4.jpg`,
        Size:item.Size,
        to:"/details"+item.Imglink,
        Brand:item.Brand,
        bool:false
      }
     this.$store.commit('add',data);  
     MessageBox.alert(item.Name+'已加入购物车').then(action => {
        });
    },
    
    GetJdListNew(callback) {
      this.$apis.GetJdListNew().then(res => {
        callback(res.data.Tag.cakelist);
        // console.log(res);
      });
    },
    //++
    add1(index) {
      var data = this.$store.state.shopCart.list[index];
      this.$store.commit("add1", data);
    },
    // --
    del(index) {
      if (this.$store.state.shopCart.list[index].num == 1) {
        return;
      }
      var data = this.$store.state.shopCart.list[index];
      this.$store.commit("del", data);
    },

    //清空购物车
    empty() {
      if (this.$store.state.shopCart.list.length > 0) {
        MessageBox.confirm("", {
          title: "",
          message: "确定要清空购物车吗？",
          // showCancelButton: true,
          confirmButtonText: "确认",
          cancelButtonText: "取消"
        })
          .then(action => {
            if (action == "confirm") {
              this.$store.commit("empty");
            }
          })
          .catch(err => {
            if (err == "confirm") {
            }
          });
      }
    },
    //购物车跳转详情页 函数跳转
    toShow(item) {
      console.log(item);
      var data = {
        key: item.Name || item.key, //拿到名字
        c: item.SupplyNo || "NS"
      };
      this.$router.push({
        path: "/show",
        query: { key: data.key, c: data.c }
      });
    }
  },
  computed: {
    count() {
      var allPrice = 0;
      this.allcheck.forEach(ele => {
        allPrice += ele.num * ele.price;
      });
      return allPrice;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Cart {
  padding-left: r(12);
  padding-top: r(16);
  display: flex;
  .left > .allcheck {
    margin-top: r(55);
    width: r(18);
    height: r(18);
  }
  .center > img {
    width: r(98);
    height: r(90);
  }
  .right {
    width: r(166);
    height: r(85);
    .name {
      font-size: r(14);
      color: #000;
    }
    .size {
      display: inline-block;
      color: #ccc;
      font-size: r(12);
      margin-top: r(6);
      width: r(83);
    }
    .jian {
      display: inline-block;
      font-size: r(22);
      width: r(20);
      height: r(20);
      color: #333;
    }
    .num {
      width: r(27);
      height: r(25);
      color: #333;
      font-size: r(16);
    }
    .jia {
      padding-left: r(3);
      display: inline-block;
      width: r(30);
      height: r(20);
      color: #333;
      font-size: r(20);
    }
    .allPrice {
      font-size: r(12);
      color: #030303;
      margin-top: r(8);
      font-weight: bold;
    }
  }
}
.youhui {
  margin: r(30) 0;
  margin-left: r(40);
  .youhui1 {
    color: #f2495e;
    font-weight: bold;
    margin: r(12) r(4) r(12) 0;
  }
  .youhui2 {
    color: #333;
    font-size: r(12);
  }
}
.gwc {
  margin-top: r(55);
  .gwc-hr {
    width: r(308);
    height: r(50);
    text-align: center;
  }
  .clplr {
    font-weight: bold;
    color: #333;
    font-size: r(20);
    line-height: r(23);
  }
  .gwc-hr-1 {
    border-bottom: r(2) solid #333;
    width: r(110);
    padding: r(6) 0 r(6) r(70);
    text-align: center;
    line-height: r(2);
    margin-left: r(66);
  }
  .gwc-hr-2 {
    color: #333;
    font-size: r(12);
    font-weight: 900;
    margin-top: r(6);
  }
}
.gwc-js {
  position: fixed;
  bottom: r(41);
  margin-top: r(14);
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: r(48);
  background: #fff;
  .gwc-js-1 {
    .imgs {
      margin-top: r(16);
      display: inline-block;
      width: r(18);
      height: r(18);
    }
  }
  .gwc-js-2 {
    margin: r(16) r(12) r(14) 0;
    color: #333;
    font-size: r(12);
  }
  .gwc-js-3 {
    margin-top: r(16);
  }
  .gwc-js-4 {
    margin-top: r(8);
    .heji {
      padding-left: r(30);
      .heji1 {
        color: #333;
        font-size: r(12);
      }
      .heji2 {
        color: #f2495e;
        font-size: r(14);
        font-weight: 800;
      }
    }
    .yh {
      padding-left: r(48);
      .yh1 {
        color: #333;
        font-size: r(12);
      }
      .yh2 {
        color: #f2495e;
        font-size: r(12);
        font-weight: 800;
      }
    }
  }

  .gwc-js-5 {
    width: r(98);
    height: r(48);
    color: #fff;
    background: #02d4d7;
    font-weight: 800;
    line-height: r(48);
    text-align: center;
    font-size: r(16);
  }
}
.ul {
  margin-top: r(50);
  display: flex;
  flex-wrap: wrap;
  .li1 {
    width: r(135) !important;
    height: r(240);
    padding: 0 r(12);
    .imgs {
     
      width: r(145);
      height: r(145);
    }
    .p {
      font-weight: 800;
      font-size: r(12);
      color: #333;
      margin: r(5) 0 r(9);
    }
    .jiah {
      font-weight: 800;
      font-size: r(12);
      color: #333;
      .jiah1 {
        font-size: r(12);
        color: #333;
      }
      .jiah2 {
        font-size: r(12);
        color: #333;
      }
      .bao {
        width: r(18);
        height: r(18);
        margin: r(-8) r(0) 0;
        padding-left: r(50);
      }
    }
    .bao1 {
      width: r(20);
      height: r(20);
      margin: r(-8) r(0) 0;
      padding-left: r(20);
    }
  }
}
.empty {
  height: r(60);
  line-height: r(60);
  text-align: center;
}
</style>


