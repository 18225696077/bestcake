<template>
  <div class="hello">
    <div id="footer">
     <router-link :to="item.path"  v-for="(item,index) in Tab" :key="index">
       <img :src="Active==index?item.img1:item.img2" @click="tiaozhuan(index)">
       <!-- :class="listIndex===index? 'active':''" -->
     </router-link>
        <span class="cart"></span>
        <span class="cart1" v-show="!$store.state.shopCart.list.length==0">{{$store.state.shopCart.list.length}}</span>
    </div>
      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      Tab:[
        {
          img1:"https://res.bestcake.com/m-images/ww/foot/foot-menu-a-2.png?v=119",
          img2:"https://res.bestcake.com/m-images/ww/foot/foot-menu-a-1.png?v=119",
          path:'/appCom'
          },
          {
          img1:"https://res.bestcake.com/m-images/ww/foot/foot-menu-b-2.png?v=119",
          img2:"https://res.bestcake.com/m-images/ww/foot/foot-menu-b-1.png?v=119",
          path:'/list'
          },
          {
          img1:"https://res.bestcake.com/m-images/ww/foot/foot-menu-c-2.png?v=119",
          img2:"https://res.bestcake.com/m-images/ww/foot/foot-menu-c-1.png?v=119",
          path:'/cart'
          },
          {
          img1:"https://res.bestcake.com/m-images/ww/foot/foot-menu-d-2.png?v=119",
          img2:"https://res.bestcake.com/m-images/ww/foot/foot-menu-d-1.png?v=119",
          path:'/userinfo'
          }
      ],
      Active:0
    }
  },
  methods:{
   tiaozhuan(index){
      this.Active=index    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#footer {
    position: relative;
    height: r(43);
    background:#fff;
    position: fixed;
    bottom: r(-2);
    border-top: 1px solid #eee;
    width: 100%;
    display: flex;
    justify-content: space-between;
   img{
    width: 50%;
    margin: 0 r(10);
    }
    .cart1{
      width: r(16);
      height: r(16);
      background: #f2495e;
      border-radius:r(50);
      color: #fff;
      font-size: r(12);
      line-height: r(16);
      text-align: center;
      position: absolute;
      left:r(200);
      top:r(-2);
    }
    .cart{
      position: absolute;
      left:r(180);
      top:r(-2);
    
    }
  }
</style>


