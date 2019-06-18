<template>
  <div class="hello">
    <div class="info">
      <div class="info-list">
        <div class="info-left">头像</div>
        <div class="info-a-right">
          <img src="https://res.bestcake.com/m-images/ww/point/point_tx.png" alt>
        </div>
        <div class="info-list">
          <div class="info-left">昵称</div>
          <div class="info-a-right">{{userInfo.username}}</div>
        </div>
        <div class="info-list">
          <div class="info-left">真实姓名</div>
          <div class="info-a-right">{{userInfo.name}}</div>
        </div>
        <div class="info-list">
          <div class="info-left">性别</div>
          <div class="info-a-right">{{userInfo.sex}}</div>
        </div>
        <div class="info-list">
          <div class="info-left">手机号</div>
          <div class="info-a-right">111111</div>
        </div>
        <div class="info-list">
          <div class="info-left">修改密码</div>
          <div class="info-a-right"></div>
        </div>
        <div class="info-list">
          <div class="info-left-1" @click="tuichu">退出登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Store from "storejs";
import { MessageBox } from "mint-ui";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
      userInfo: {}
    };
  },
  mounted() {
    this.pageInit();
    console.log(this.$route);
  },
  methods: {
    pageInit() {
      this.userInfo = Store.get("userInfo");
    },
    tuichu() {   
      MessageBox({
        title: "提示",
        message: "确定退出?",
        showCancelButton: true
      }).then(action=>{
        if(action=='confirm'){
          Store.remove("userInfo");
          this.$router.push({path:'/appCom'})
        }
      }).catch(err=>{
        if(err=='confirm'){

        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info-list {
  width: 100%;
  clear: both;
  height: r(50);
  border-bottom: r(1) solid #ccc;
  line-height: r(50);
  text-align: center;
  display: inline-block;
  .info-left {
    color: #333;
    font-size: r(14);
    margin: r(0) 0 r(26) r(15);
    float: left;
  }
  .info-a-right {
    float: right;
    height: r(36);
    img {
      width: r(36);
      height: r(36);
    }
  }
  .info-a-right {
    float: right;
    margin: r(5) r(15);
  }
  .info-left-1 {
    color: #f2495e;
    margin-top: r(15);
    font-size: r(14);
  }
}
</style>


