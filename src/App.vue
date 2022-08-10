<template>

  <nav class="navbar bg-transparent sticky-top container">

    <div id="right-navbar" style="display: flex; justify-content: start">
    <div>
       chart
    </div>
     
    </div>

    <div id="center-navbar" style="display: flex; justify-content: center; ">
      <router-link to="/" id="Logo">Divinitas</router-link>
    </div>

    
    <div id="left-navbar" style="display: flex; justify-content: end">
    <div style="display: flex; justify-content: space-evenly">

      <div>
        <input id="searchbar" type="text" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2">
      </div>

      <div >
        login
      </div>
    </div>

      
      
    </div>
    
  </nav>

  <div style="height: 50vh">
    <landing-view/>
  </div>
 
  <div style="height: 200vh">
    
  </div>

  

</template>

<script>
import LandingView from './views/LandingView.vue'
export default {
  components: {LandingView}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');

nav a {
  
}

#Logo {
  text-decoration: none;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
}

#searchbar{
  width: 100px;
  border: none;
  text-decoration: underline;
  text-underline-offset: 2px;
}

</style>
