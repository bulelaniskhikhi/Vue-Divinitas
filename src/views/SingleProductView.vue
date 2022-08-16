<template>

    <div class="container" style="margin-bottom: 5rem" v-if="product" >
       <div class="row">

       <div class="col-sm-6" >
           <img id="prodImg" :src="product.prodImg_URL" class="card-img-top" alt="..." />
       </div>
       <div class="col-sm-6">
           <div class="container" style="margin-top: 5rem">
           <div id="prodName" style="">
               <h1>{{product.prodName}}</h1>
           </div>
               

               <div id="prodDesc" style="margin-top: 2rem">
                   <p class="fw-light">{{product.prodDesc}}</p>
               </div>

                <div id="prodPrice" style="margin-top: 2rem">
                    <p id='prodPrice'>R {{product.prodPrice}}</p>
                </div>
            
            <button>
                <router-link to='/cart' id="cartlink">CART</router-link>
                
            </button>
           </div>
            
            <div style=" display: flex; justify-content: center;">
                <img style="width: 15rem; margin-top: 5rem;" :src="product.brandLogoImg_URL" alt="">
            </div>
            
       </div> 
    </div> 
    </div>
    
</template>
<script>
export default {
 
    mounted(){
        this.$store.dispatch('fetchSingleProd', this.$route.params.id)
    },
    computed:{
        product(){
            return this.$store.state.product
        }
    }
}
</script>

<style scoped>
button {
    background: #000;
    width: 40%;
    color: white;
    margin-top: 2rem;
    border: none;
}

#prodPrice{
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.5rem;
}

#prodName{
     font-family: 'Montserrat', sans-serif;
}

#cartlink{
    text-decoration: none;
    color: white;
}
</style>