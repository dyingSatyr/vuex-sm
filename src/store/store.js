import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 5,
  },
  mutations: {
    setCounter(state, n) {
      state.counter = n;
    },
    incrementCounter(state) {
      state.counter++;
    },
    decrementCounter(state) {
      state.counter--;
    },
  },
  actions: {
    incrementCounter(context) {
      context.commit("incrementCounter");
    },
    decrementCounter(context) {
      context.commit("decrementCounter");
    },
    setCounter(context, val) {
      context.commit("setCounter", val);
    },
  },
  modules: {},
  getters: {
    getCounter: (state) => state.counter,
  },
});
