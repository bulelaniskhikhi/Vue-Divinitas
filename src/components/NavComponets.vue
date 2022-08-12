<template>
    
  <div id="navfilter" class="container-fluid sticky-top" style="width: 100%">
    <nav class="navbar bg-transparent  container" >

    <div id="right-navbar" style="display: flex; justify-content: start">

    <div id="Chart" style="padding-right: 118.55px">
       Cart
    </div>
     
    </div>

    <div id="center-navbar" style="padding-left: 20px" >
      <router-link to="/" id="Logo">Divinitas</router-link>
    </div>

    
    <div id="left-navbar" style="display: flex; justify-content: end">
    <div style="display: flex; justify-content: space-evenly">

      <div>
        <input id="searchbar" type="text" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2">
      </div>

      <div >
        <router-link to='/Login' id="loginlink">Login</router-link>
      </div>

    </div>
      
    </div>
  </nav>
  </div>
    
</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap'); */


#Logo {
  text-decoration: none;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
}

#searchbar{
  width: 100px;
  outline: 0;
  border-width: 0 0 1px;
  border-color: black;
  margin-right: 20px;
  background: transparent;
}

#loginlink{
    color: black;
    text-decoration: none;
}

#center-navbar{
    
}
#right-navbar{
    vertical-align: middle;
}

#Chart , #loginlink {
    font-family: 'Oswald', sans-serif;
}

#navfilter{
/* From https://css.glass */
background: rgba(255, 255, 255, 0);
border-radius: 16px;
/* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
backdrop-filter: blur(9.5px);
-webkit-backdrop-filter: blur(9.5px);

}
</style>