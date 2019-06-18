<template>
  <div class="hello">
      <ul class="rp">
        <li>
          <router-link to="/list/bs/rp" class="rp-a">乳品</router-link>
        </li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .rp{
    text-align: center;
     margin-top: r(25);
    font-weight: bold;
    font-size: r(14);
    color: #333;
    .rp-a{
      text-align: center;
      border-bottom: r(2) solid  #1db0b8;
    }
  }
</style>


