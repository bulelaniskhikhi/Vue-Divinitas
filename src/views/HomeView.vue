<template>

    <div id="LandindVid" style="height: 77vh; margin-bottom: 5rem; ">
        <video width="580" height="580" autoplay muted loop>
            <source src="../assets/divintas/Videos/240883353_1284305858688501_159176465472167767_n.mp4" type="video/mp4">
        </video>
    </div>

    <div class="container" style="height: 50vh; display: flex; justify-content: center">
    <div id="About" style="width: 60rem; ">
        <div id="AboutTitle" >
            <h1>ABOUT</h1>
        </div>
        <p class="fw-light" id="para" ALIGN=CENTER >How to understand and situate femininity has been a subject that has haunted second wave feminism. Second wave feminists faced the difficult task of saying that women are not naturally feminine but socialized to be feminine, while at the same time trying to give value to feminine traits. They have broken ground for third wave feminists to redefine femininity, to perform it differently. Femininity transcends form. All of your favorite designer brands are gathered under the <strong ><em>Divintas</em></strong> brand name for your convenience.</p>
    </div>
        
    </div>

    <div class="container" style="margin-top: 5rem">
      <div class="row" >
          <div class="col-sm-3" v-for="(product, index) in products" :key="product">

      <div style="display: flex; justify-content: center" v-if="index < 5">

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
#LandindVid{
    margin-top: 3rem;
    display: flex;
    justify-content: center;
}

#para{
    font-size: 1.5rem;
}

#AboutTitle{
    font-family: 'Montserrat', sans-serif;
   display: flex;
   justify-content: center; 
   margin-bottom: 3rem;
}

#prodName, #prodType, #prodPrice{
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.1rem;
    margin-bottom: 0;
}

#prodImg{
  transition: scale 1s;
}

#prodImg:hover {
  scale: 1.2;
}
</style>