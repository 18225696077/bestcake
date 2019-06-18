<template>
  <div>
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title" img-set="/static/logo.png"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title" img-set="/static/logo.png"></router-view>

    <lay_footer v-if="!($route.path=='/show'||$route.path=='/userinfo')"></lay_footer>
  </div>

</template>

<script>
import lay_footer from "@/components/layout/lay_footer";
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    // this.$eventHub.$on("sub",(val)=>{
    //   console.log(val)
    // })
    this.$store.commit("vuexInit")
  },
  components:{
    lay_footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


