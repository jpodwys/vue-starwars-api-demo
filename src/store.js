import Vue from 'vue'
import Vuex from 'vuex'
import { getPeople, getPlanets, getStarships } from './sw-service'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
    list: []
	},
	mutations: {
    setList (state, list) {
      state.list = list;
    }
  },
  actions: {
    getPeople ({ commit }) {
      getPeople().then(res => {
        commit('setList', res.results);
      });
    },

    getPlanets ({ commit }) {
      getPlanets().then(res => {
        commit('setList', res.results);
      });
    },

    getStarships ({ commit }) {
      getStarships().then(res => {
        commit('setList', res.results);
      });
    }
  }
})
