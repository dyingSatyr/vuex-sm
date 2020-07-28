import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 5,
  },
  mutations: {
    setCounter(n) {
      this.state.counter = n;
    },
    incrementCounter() {
      this.state.counter++;
    },
    decrementCounter() {
      this.state.counter--;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getCounter: () => this.state.counter,
  },
});
