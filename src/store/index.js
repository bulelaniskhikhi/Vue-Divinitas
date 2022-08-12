import { createStore } from 'vuex'

export default createStore({
  state: {
    allprod: null
  },
  getters: {
  },
  mutations: {
    giveprod(state, products) {
      state.allprod = products
    }
  },
  actions: {
    async getprod(context) {
      const response = await fetch("https://marge-api.herokuapp.com/products");
      const data = await response.json();
      context.commit('giveprod', data.results)
    }
  },
  modules: {
  }
})
