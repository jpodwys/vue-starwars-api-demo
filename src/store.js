import Vue from 'vue'
import Vuex from 'vuex'
import { getPeople, getPlanets, getStarships } from './sw-service'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
    loading: false,
    list: []
  },
  
  mutations: {
    setLoading (state, val) {
      state.loading = val;
    },

    setList (state, list) {
      state.loading = false;
      state.list = list;
    }
  },

  actions: {
    getPeople ({ commit }) {
      commit('setLoading', true);
      getPeople().then(res => {
        commit('setList', res.results);
      });
    },

    getPlanets ({ commit }) {
      commit('setLoading', true);
      getPlanets().then(res => {
        commit('setList', res.results);
      });
    },

    getStarships ({ commit }) {
      commit('setLoading', true);
      getStarships().then(res => {
        commit('setList', res.results);
      });
    }
  }
})
