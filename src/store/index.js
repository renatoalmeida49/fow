import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      focusTime: 5,
      // 5217 = 3120, Pomodoro = 1500
      breakTime: 15, 
      // 5217 = 1020, Pomodoro = 300 
      repeat: 0
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
