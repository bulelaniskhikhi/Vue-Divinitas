<template>
  <div class="container" style="margin-top: 5rem">
      <div class="row" >
          <div style="height: 100vh" class="col-md-3" v-for="product in products" :key="product">

      <div style="display: flex; justify-content: center" >

        <router-link id="prodLink" :to="{name : 'product' , params:{ id : product.id}}">
          <div class="card" style="width: 20rem; margin-bottom: 3rem; border: none;" >
          <img id="prodImg" :src="product.prodImg_URL" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text" id="prodName">
                {{product.prodName}}
            </p>
            <p id="prodType">
               {{product.prodType}} 
            </p>
            <p id="prodPrice">
              R {{product.prodPrice}}
            </p>
          </div>
        </div>
        </router-link>

      </div>
    </div>
      </div>
    
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getprod");
  },
  computed: {
    products() {
      return this.$store.state.allprod;
    },
  },
};
</script>

<style scoped>
#prodName, #prodType, #prodPrice{
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.1rem;
    margin-bottom: 0;
    color: black;
}

#prodImg{
  transition: scale 1s;
}

#prodImg:hover {
  scale: 1.05;
}

#prodLink{
  text-decoration: none;
}
</style>




