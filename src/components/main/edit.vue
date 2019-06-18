<template>
  <div class="hello">
    <!-- <h1>注册</h1>
    <button @click="edit">提交</button>-->
    <form>
      <h1 class="resgister">注册</h1>
      <label>
        <p>
          账号:
          <input type="text">
        </p>
        <p>
          密码:
          <input type="text">
        </p>
        <p>
          <button class="btn" @click="edit">提交</button>
        </p>
      </label>
    </form>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import Store from "storejs";
export default {
  data() {
    return {
      loginNum: 0,
      uname: "",
      upwd: "",
      userinfo: {}
    };
  },
  mounted() {},
  methods: {
    edit() {
      var data = {
        id: 118,
        username: "cr",
        password: "123456",
        avatar: "https://avatars0.githubusercontent.com/u/22588905?v=4&s=120",
        name: "超人"
      };

      // this.$apis.edit(data).then(res => {
      //   if (res.data.code == 1) {
      //     //   console.log(res.data.msg);
      //     //   this.$router.push({
      //     //     path: "/userinfo"
      //     //   });
      //     MessageBox({
      //       title: "提示",
      //       message: "注册成功,是否立即登录?",
      //       showCancelButton: true
      //     })
      //       .then(action => {
      //         if (action == "confirm") {
      //           this.$router.push({ path: "/userinfo" });
      //         }
      //       })
      //       .catch(err => {
      //         if (err == "confirm") {
      //         }
      //       });
      //   }
      // });
      this.$apis.edit(data).then(res => {
        if (res.data.code == 1) {
          console.log(res.data.msg);
          this.$router.push({
            path: "/user"
          });
        }
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
form {
  width: 100%;
  height: r(600);
  background: rgba(54, 209, 220, 1);
  p {
    padding: r(15);
    color: #fff;
    font-size: r(12);
  }
  input {
    width: r(200);
    height: r(20);
  }
  .btn {
    width: r(60);
    height: r(25);
    background: #fff;
  }
  .resgister {
    padding-top: r(10);
    padding-left: r(20);
    color: #fff;
  }
}
</style>


