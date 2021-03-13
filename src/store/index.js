import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      time: 180
  },
  mutations: {
      CHANGE_TIME(state, payload) {
          state.time = payload
      }
  },
  actions: {
      changeTime(context, payload) {
          context.commit("CHANGE_TIME", payload)
      }
  },
  modules: {
  }
})
