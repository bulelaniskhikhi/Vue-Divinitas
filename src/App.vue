<template>

  
  <NavComponets/>
  
  <router-view/>

  <FooterComponent/>

</template>

<script>
import NavComponets from './components/NavComponets.vue'
import FooterComponent from './components/FooterComponent.vue'

import HomeView from './views/HomeView.vue'

export default {
  components: {NavComponets, HomeView, FooterComponent}
}
</script>

<style scoped>
</style>
