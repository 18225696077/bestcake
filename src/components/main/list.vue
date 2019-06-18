<template>
  <div id="app">
    <div id="header">
      <ul>
        <li id="header1" v-for="(item,index) in list" :key="index" @click="select(index)" :class="listIndex===index? 'active':''">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
      <!-- <router-link :to="item.path" id="header1" v-for="(item,index) in list" :key="index" @click="select(index)" :class="listIndex===index? 'active':''">
        {{item.name}}
      </router-link> -->
      <!-- <router-link to="/list/bs" id="header2">贝式优选</router-link> -->
      <router-view></router-view>
     </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
      list:[
        { path:'/list/zy',name:'自营' },
         { path:'/list/bs',name:'贝式优选'}
      ],
      listIndex:0
    };
  },
  methods:{
    select(index){
      this.listIndex=index;
    }
  },
  mounted() {
   
  },
  
  components: {
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
  #header {
    ul{
        display: flex;
        #header1 {
      width: 50%;
      height: r(42);
     
      text-align: center;
      line-height: r(42);
      color: #333;
      font-size: r(14);
    }
    }
  
    
  }
}
#header .active {
  color: #1db0b8;
}
</style>


