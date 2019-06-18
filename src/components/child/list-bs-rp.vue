<template>
  <div class="hello">
    <div class="list">
      <div v-for="(item,index) in cartList" :key="index" class="list-product-tab">
        <div>
          <div>
            <img :src="'https://res.bestcake.com/m-images/ww/rp/'+item.Name+'.png?v=11'" class="imgs" @click.stop="toShow(item)">
           <!-- https://res.bestcake.com/m-images/ww/rp/可莱思迪客英国进口冰淇淋(125mlx4).jpg?v=14 -->
          </div>
         <div class="lista">
            <div class="listname">
            <span>{{item.Name}}</span>
          </div>
          <div class="listmeans">
            <span>{{item.Means}}</span>
          </div>
          <div class="listCurrentPrice">
             <span class="CurrentPrice1">￥</span>
             <span class="CurrentPrice2">{{item.CurrentPrice}}</span>
             <span class="CurrentPrice3">.00</span>
             <span>/{{item.Size}}</span>
             <img src="https://res.bestcake.com\m-images-2\list-cart.png?v=1" @click="add(item)" class="list-product-e">
          </div>
         </div>
        </div>
      </div>
    </div>
    <jg-gonggao></jg-gonggao>
    <p>加载中...</p>
    <br>
    <br>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  name: "HelloWorld",
  data() {
    return {
     cartList: ""
    };
  },
  mounted() {
  
    var data = {
      v: "1560137694113",
      c: "NsCakeCenter",
      m: "GetJdListNew"
    };
    this.$apis.GetJdListNew(data).then(res => {
      //  console.log(res.data.Tag.cakelist);
      this.msg = res.data.Tag.cakelist;
      var arr = [];
      res.data.Tag.cakelist.forEach(el => {
        if (el.Brand == "乳品系列") {
          arr.push(el);
        }
        this.cartList = arr;
      });
    });
  },
  methods:{
     toShow(item) {
      var data ={
      key:item.Name||item.key, //拿到名字
      c:item.SupplyNo||'NS'
    }
    // router ****
      this.$router.push({
        path: "/show",
        query: { key:data.key, c:data.c }
      });
    },
    add(item){
      console.log(item);
      var data={
        Pid:item.ID,
        Name:item.Name,
        SupplyNo:item.SupplyNo,
        num:1,
        Size:item.Size,
        ImgUrl:'https://res.bestcake.com/m-images/ww/rp/'+item.Name+'.png?v=11',
        price:item.CurrentPrice
      }
      this.$store.commit('add',data)
      MessageBox.alert(item.Name+'已加入购物车').then(action => {
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang=scss>
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .lista{
    margin-left: r(6)
  }
  .list-product-tab{
    width: r(145);
    height:auto;
  }
  .listname{
    text-indent: 0.5em;
  }
  .listmeans{
    font-size: r(12);
    color:#999;
    padding-left: r(4)
  }
  .listCurrentPrice{
    font-size: r(12);
    color: rgb(188, 188, 188);
    padding-left: r(4)
  }
  .imgs {
    width: r(140);
    height: r(140);
  }
  .list-product-e{
    width: r(17);
    height: r(17);
    margin-left:r(5);
  }
  .CurrentPrice1{
    color: rgb(255, 51, 0);
    width: r(18);
    height: r(16);
    font-size: r(12)
  }
  .CurrentPrice2{
    color: rgb(255, 51, 0);
    font-size: r(13)
  }
  .CurrentPrice3{
    color: rgb(255, 51, 0);
    width: r(15);
    height: r(16);
    font-size: r(12)
  }
  
}
</style>