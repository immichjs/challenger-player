import axios from '../../services/axios'

import { Entries, State } from '../../types/Player'

export default {
  namespaced: true,
  state: {
    challengers: []
  },
  getters: {
    challengers: (state: State) => state.challengers
  },
  mutations: {
    SET_CHALLENGER_PLAYERS: (state: State, payload: Entries[]) => state.challengers = payload
  },
  actions: {
    async requestChallengerPlayers ({ commit }: any) {
      let response = await axios.get('/')
        .then(response => response.data.entries)

      response = response.sort((current: Entries, next: Entries) => current.leaguePoints < next.leaguePoints ? 1 : -1)
      
      commit('SET_CHALLENGER_PLAYERS', response)
    }
  }
}
