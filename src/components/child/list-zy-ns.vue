<template>
  <div class="hello">
    <div class="list">
      <!-- 女神 -->
      <div v-for="(item,index) in cakeList" :key="index">
        <div>
          <div>
            <img
              :src="'https://res.bestcake.com/m-images/ww/ns/'+item.Name+'.png?v=11'" class="imgs"  @click.stop="toShow(item)">
            <!-- https://res.bestcake.com/m-images/ww/ns/一见倾心.jpg?v=14 -->
          </div>
         <div class="lista">
            <div class="listname">
            <span>{{item.Name}}</span>
          </div>
          <div class="listmeans">
            <span>{{item.Means|textLengthSet(9)}}</span>
          </div>
          <div class="listCurrentPrice">
             <span class="CurrentPrice1">￥</span>
             <span class="CurrentPrice2">{{item.CurrentPrice}}</span>
             <span class="CurrentPrice3">.00</span>
             <span>/{{item.Size}}</span>
             <img src="https://res.bestcake.com\m-images-2\list-cart.png?v=1" alt="" class="list-product-e" @click="add(item)">
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
import { MessageBox } from 'mint-ui';//弹框
export default {
  name: "HelloWorld",
  data() {
    return {
      cakeList: ""
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
        if (el.Brand == "女神系列") {
          arr.push(el);
        }
        this.cakeList = arr;
      });
      // console.log(this.cakeList)
    });
  },
  methods:{
    //跳转详情页
    toShow(item){
      var data={
        key:item.Name,
        c:item.SupplyNo
      }
      this.$router.push({
        path:'/show',
        query:{key:data.key,c:data.c}
      })
    },
    //点击加入购物车
    add(item){
      console.log(item)
      var data={
         Pid:item.ID,
         Name:item.Name,
         ImgUrl:'https://res.bestcake.com/m-images/ww/ns/'+item.Name+'.png?v=11',
         Size:item.Size,
         price:item.CurrentPrice,
         num:1,
         SupplyNo:item.SupplyNo
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
  .listname{
   
  }
  .listmeans{
    font-size: r(12);
    color:#999;
  }
  .listCurrentPrice{
    font-size: r(12);
    color: rgb(188, 188, 188);
  }
  .imgs {
    width: r(140);
    height: r(140);
  }
  .list-product-e{
    width: r(18);
    height: r(18);
    margin-left:r(22);
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