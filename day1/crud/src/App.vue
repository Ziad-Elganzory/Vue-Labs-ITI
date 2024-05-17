<template>
  <Navbar v-if="!$route.meta.hideNavbar"></Navbar>
  <div class="d-flex flex-column align-items-center">
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  export default {
    name: 'App',
    components: {
      Navbar,
    },
    data() {
      return {
        title: 'CRUD App',
        name:'',
        age:'',
        num:0,
      }
    },
    watch:{
      num(newVal){
        newVal == 3 ? alert('danger') : '';
      }
    }
  }
</script>
<style scoped>

</style>