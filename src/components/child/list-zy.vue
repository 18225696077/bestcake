<template>
  <div class="hello">
     <ul class="list-tabs">
       <li v-for="(item,index) in arr" :key="index" @click="listselect(index)" :class="listselectIndex===index? 'active1':''">
        <router-link :to="item.path" class="list-tabs-a">{{item.name}}</router-link>
       </li>
    </ul>
        <router-view></router-view>
     
  </div>
</template>

<script>
// http://m.bestcake.com/json1811.ashx?v=1560137694113&c=NsCakeCenter&m=GetJdListNew
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      arr:[
        {path:'/list/zy/jd',name:'经典'},
        {path:'/list/zy/ns',name:'女神'},
        {path:'/list/zy/bsl',name:'伴手礼'}
      ],
      listselectIndex:0
    }
  },
  methods:{
    listselect(index){
      this.listselectIndex=index
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list-tabs{
  display: flex;
  margin-top: r(24);
  margin-left: r(50);
 .list-tabs-a{
   padding: 0 r(10);
   font-size: r(14);
 }
 
}
 

</style>


