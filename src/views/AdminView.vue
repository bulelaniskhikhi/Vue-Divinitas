<template>
    <div class="container">



        <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Description</th>
      <th scope="col">Type</th>
      <th scope="col">Price</th>
      <th scope="col">Serial code</th>
      <th scope="col">Brand</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody v-if="products">
    <tr v-for="product in products" :key="product" :product="product">

      <th style="font-family: 'Share Tech Mono', monospace; font-size: 1.1rem;" scope="row">{{product.id}}</th>
      <td style="font-family: 'Montserrat', sans-serif;"><strong>{{product.prodName}}</strong></td>
      <td><img :src="product.prodImg_URL" style="width: 5rem"></td>
      <td class="fw-light">{{product.prodDesc}}</td>
      <td style="font-family: 'Montserrat', sans-serif;"><strong>{{product.prodType}}</strong></td>
      <td style="font-family: 'Share Tech Mono', monospace; font-size: 1.1rem;">{{product.prodPrice}}</td>
      <td style="font-family: 'Share Tech Mono', monospace; font-size: 1.1rem;">{{product.prodSerial_Code}}</td>
      <td style="font-family: 'Montserrat', sans-serif;"><strong>{{product.brandName}}</strong></td>
      <td>
          <button type="submit" style="width: 100%">
            EDIT
          </button>
      </td>
      <td>
          <button type="submit" style="width: 100%">
            DELETE
          </button>
      </td>
    </tr>

  </tbody>
</table>
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
</style>