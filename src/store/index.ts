import Vue from 'vue'
import Vuex from 'vuex'

import challengers from './challengers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    challengers
  }
})
