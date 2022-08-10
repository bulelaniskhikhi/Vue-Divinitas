<template>
    

    <nav class="navbar bg-transparent sticky-top container" >

    <div id="right-navbar" style="display: flex; justify-content: start">

    <div>
       Chart
    </div>
     
    </div>

    <div id="center-navbar" class="d-flex justify-content-center">
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
}

#loginlink{
    color: black;
    text-decoration: none;
}

#center-navbar{
    display: flex !important;
    justify-content: center !important;
}
#right-navbar{
    vertical-align: middle;
}
</style>