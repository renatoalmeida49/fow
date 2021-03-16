import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      pomodoro: {
        focusTime: 1500, //1500
        breakTime: 300, //300
        repeat: 0
      },
      fifty_two: {
        focusTime: 3120, //3120
        breakTime: 1020, //1020
        repeat: 0
      },
      focusTime: 5,
      // 5217 = 3120, Pomodoro = 1500
      breakTime: 10, 
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
