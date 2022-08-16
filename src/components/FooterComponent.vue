<template>

    <footer class="py-3 footer" style="background-color: black; color: white; margin-top: 5rem;">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      
      <li class="nav-item"><router-link to="/" class="nav-link px-2 text-muted">Home</router-link></li>

      <li class="nav-item"><router-link to="/products" class="nav-link px-2 text-muted">Products</router-link></li>

    </ul>
    <p class="text-center text-muted">© 2022 Divinitas ⚧, Inc</p>
  </footer>

</template>

<style scoped>
 footer>* {
     font-family: 'Roboto', sans-serif;
     font-size: 1.3rem;
 }
</style>