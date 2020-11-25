import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSeenIn: 0,
    token:""
  },
  mutations: {

    // change(state,user){

    //   state.shouquan = user.loginToken

    // },

    changeSign(state, n) {

      state.isSeenIn = n

    },

    setToken(state, val) {

       state.token = val

    }

  },
  actions: {
  },
  modules: {
    
  }
})
