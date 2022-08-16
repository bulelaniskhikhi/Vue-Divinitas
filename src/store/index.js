import { createStore } from 'vuex'
const nodeEOMP = "https://marge-api.herokuapp.com/";
export default createStore({
  state: {
    allprod: null,
    product: null
  },
  getters: {
  },
  mutations: {
    giveprod(state, products) {
      state.allprod = products

    },
    singleprod(state, products) {
      state.product = products
      
    }
  },
  actions: {
    login: async (context, payload) =>  {
      try{
        const {userEmail, userpassword} = payload;
        const data = {
          userEmail,
          userpassword
        };
        fetch(nodeEOMP+"users", {
          method: "patch",
          body : JSON.stringify(data), 
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then((res) => res.json())
        .then((data) => console.log(data))
      }catch(e){

      }
    },
    async getprod(context) {
      const response = await fetch("https://marge-api.herokuapp.com/products");
      const data = await response.json();
      context.commit('giveprod', data.results)
    },
    fetchSingleProd(context, id){
      fetch(`https://marge-api.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => context.commit('singleprod', data.results[0]))
    }
  },
  modules: {
  }
})
