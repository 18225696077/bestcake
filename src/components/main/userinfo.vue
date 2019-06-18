<template>
  <div class="hello">
    <div v-if="loginNum==0">
      <div class="btn">
        <label class="back" @click="back"></label>
      </div>
      <div class="login-top">密码登录</div>
      <section>
        <div class="login-fast">
          <div class="right-stage">手机号</div>
          <div class="shouji">
            <div class="qu">+86</div>
            <input class="uname" type="text" v-model="uname">
          </div>
          <div class="qq">
            <span class="mima">密码</span>
            <span class="yinc">隐藏</span>
          </div>
          <input type="text" class="upwd" v-model="upwd">
         <div class="ss">
            <span class="zhuce" @click="zhuce">没有账号?立即注册</span>
            <span class="login-fast-next" @click="login"></span>
         </div>
        </div>
      </section>
    </div>

    <!-- 进去信息部分 -->
    <div v-if="loginNum==1" class="sheet">
      <div class="clplr">
        <img class="touxiang" :src="userInfo.avatar" @click="info">
      </div>
      <div class="uname1">{{userInfo.username}}</div>
      <div class="am-u-sm-12">
        <div class="am-u-sm-3">
          <div class="person-vip-1">会员等级</div>
          <div class="person-vip-2">V0</div>
        </div>
        <div class="am-u-sm-3">
          <div class="person-vip-1">吉致币</div>
          <div class="person-vip-2">0</div>
        </div>
        <div class="am-u-sm-3">
          <div class="person-vip-1">优惠券</div>
          <div class="person-vip-2">0</div>
        </div>
        <div class="am-u-sm-3">
          <div class="person-vip-1">兑换券</div>
          <div class="person-vip-2">0</div>
        </div>
      </div>
      <div class="person-dd">
        <div class="person-dd-1">
          <div class="person-dd-2">
            <img src="https://res.bestcake.com\m-images\order\mw-person-dd.png" alt="">
          </div>
          <div class="person-dd-3">我的订单</div>
        </div>
        <div class="person-dd-1">
          <div class="person-dd-2">
            <img src="https://res.bestcake.com\m-images\order\mw_firm_ad.jpg" alt="">
          </div>
          <div class="person-dd-3">我的订单</div>
        </div>
      </div>
      <div class="person-rx-1">
        <a href="">客服热线：400-627-5757</a>
        </div>
        <div class="person-rx-2">
        <a href="">服务协议与证照信息</a>
        </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import Store from "storejs";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
      uname: "",
      upwd: "",
      loginNum: 0,
      userInfo: {}
    };
  },
  methods: {
    //跳转信息页
    info(){
      this.$router.push({path:'/user-info'})
    },


    pageInit() {
      if (!Store.get("userInfo")) {
        this.loginNum = 0;
      } else {
        this.userInfo == Store.get("userInfo");
        this.loginNum = 1;
      }
    },
    //点击返回
    back() {
      this.$router.push({ path: "/appCom" });

    },

    //登录接口
    login() {
      // this.$eventHub.$emit("sub",{bool:false})
      var data = {
        uname: this.uname,
        upwd: this.upwd
      };
      this.$apis.login(data).then(res => {
        console.log(res);
        if (res.data.code == 0) {
          this.$router.push({
            path: "/edit"
          });
        } else if (res.data.code == 1) {
          this.loginNum = 1;
          MessageBox('提示', '登录成功');
          this.userInfo = res.data.data;
          Store.set('userInfo', this.userInfo)
        } else {
          console.log(res.data.msg);
        }
      });
    },
    zhuce(){
      this.$router.push({path:'/edit'})
    }
  },
  mounted() {
    this.pageInit();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  height: r(570);
  background: rgba(54, 209, 220, 1);
  .btn {
    padding-left: r(20);
    position: relative;
    width: r(38);
    height: r(42);
    .back {
      position: absolute;
      top: r(-1);
      left: r(15);
      display: inline-block;
      width: r(14);
      height: r(14);
      top: 50%;
      margin: r(-6) 0 r(5);
      border-left: r(2) solid;
      border-bottom: r(2) solid;
      transform: rotate(45deg);
      color: #fff; 
    }
  }
  .p1 {
    margin: r(20) 0;
  }
  .login-top {
    padding-left: r(20);
    color: #fff;
    font-size: r(28);
    line-height: r(40);
    
    height: r(40);
  }
  .login-fast {
    padding-left: r(20);
    .right-stage {
      color: rgb(255, 255, 255);
      font-size: r(12);
      line-height: r(20);
    }
    .shouji {
      // border-bottom: r(1) solid #fff;
      .qu {
        width: r(40);
        font-size: r(12);
        height: r(25);
        background: #fff;
        color: rgb(21, 127, 131);
        border-radius: r(2);
        line-height: r(25);
        text-align: center;
        display: inline-block;
        position: absolute;
      }
      .yzm {
        display: inline-block;
        color: #89dfe3;
        font-size: r(12);
        padding: r(1) r(0) r(5) r(180);
      }
    }

    .tisi {
      font-size: r(12);
      margin: r(8) 0;
      color: #fff;
      .xieyi {
        color: rgb(14, 144, 210);
      }
    }
    .change-login {
      width: r(124);
      height: r(36);
      font-size: r(16);
      border-radius: r(16);
      line-height: r(36);
      border: 1px solid #fff;
      color: #fff;
      text-align: center;
      margin-left: r(80);
    }
  }
  .uname {
    width: r(230);
    height: r(28);
    padding: r(1) 0 r(1) r(60);
    background: none;
    color: #fff;
    border-bottom-color: #fff;
    border-radius: 0;
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
    font-size: r(16);
  }
  .qq {
    margin-top: r(20);
    font-size: r(14);
    color: #fff;
    line-height: r(20);

    .mima {
    }
    .yinc {
      margin-left: r(220);
    }
  }
  .upwd {
    width: r(230);
    height: r(28);
    padding: r(1) 0 r(1) r(60);
    background: none;
    color: #fff;
    border-bottom-color: #fff;
    border-radius: 0;
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
    font-size: r(16);
  }
  .ss{
    padding-top: r(40);
    .zhuce{
      color: #fff;
      font-size: r(14);
    }
  .login-fast-next {
    position: absolute;
    width: r(40);
    height: r(40);
    line-height: r(40);
    text-align: center;
    right: r(20);
    top: r(230);
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    &:after {
      display: block;
      content: "";
      border-top: r(2) solid #22aeb3;
      border-right: r(2) solid #22aeb3;
      transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      width: 3.77vw;
      height: 3.77vw;
      left: 3.44835vw;
      position: absolute;
      top: 4.24835vw;
    }
  }
  }
  .sheet {
    width: 100%;
    height: 100%;
    background: #fff;
    .clplr {
      width: 100%;
      height: r(85);
      line-height: r(85);
      text-align: center;
      padding-top: r(24);
      .touxiang {
        width: r(78);
        height: r(80);
        border-radius: 50%;
      }
    }
  }
  
    .uname1{
      height: r(24);
      line-height: r(24);
      color: #333;
      font-size: r(14);
      text-align: center;
    }
    .am-u-sm-12{
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      padding: r(32) r(18) r(15);
      .am-u-sm-3{
        .person-vip-1{
          color: #ccc;
          font-size: r(12);
        }
        .person-vip-2{
          color: #333;
          font-size: r(14);
          padding-top: r(7);
        }
      }
    }
    .person-dd{
      .person-dd-1{
        float: left;
        width: 100%;
        .person-dd-2{
          float: left;
          padding: r(12) 0 r(15) r(15);
          img{
            width: r(15);
            height: r(21);
          }
        }
        .person-dd-3{
          float: left;
          color: #333;
          font-size: r(14);
          padding: r(14) r(14) 0 r(9);
        }
      }
    }
    .person-rx-1{
      padding-top: r(188);
      text-align: center;
        height: r(15);
        line-height: r(15);
      a{
        color: #999;
        font-size: r(12);
        
      }
    }
    .person-rx-2{
      padding-top: r(39);
      text-align: center;
        height: r(18);
        line-height: r(18);
      a{
        color: #999;
        font-size: r(12);
        
      }
    }
    
  
}
</style>


