<template>

  
  <NavComponets/>

  <!-- <div style="height: 50vh">
    <HomeView/>
  </div> -->
 
  <!-- <div style="height: 200vh">
    
  </div> -->
  <router-view/>

  

</template>

<script>
import NavComponets from './components/NavComponets.vue'

import HomeView from './views/HomeView.vue'

export default {
  components: {NavComponets, HomeView}
}
</script>

<style scoped>

</style>
