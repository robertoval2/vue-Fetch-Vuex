export default {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {
    evenOrOdd: (state) => (state.count % 2 === 0 ? 'even' : 'odd'),
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    reset: ({ commit }) => commit('reset'),
    incrementIfOdd({ commit, state }) {
      if ((state.count + 1) % 2 === 0) {
        commit('increment');
      }
    },
    incrementAsync({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment');
          resolve();
        }, 1000);
      });
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
  },
};
