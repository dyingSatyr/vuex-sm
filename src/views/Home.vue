<template>
  <div>
    <p>Counter value is {{ getCounter }}</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <br />
    <input
      type="text"
      name="counter-value"
      id="counter-value"
      v-model="setCounterValue"
    />
    <button @click="set(setCounterValue)">Set Counter</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data: function() {
    return {
      setCounterValue: 0,
    };
  },
  computed: {
    //Get data from getter manual way
    //Create a func that returns getter
    //Func name is used in template
    counter() {
      return this.$store.getters.getCounter;
    },
    //Get data from getter with mapGetters helper
    //mapGetters need to be imported from vuex
    //Explicitly define which getters you need
    //Use getter functions directly in template
    ...mapGetters(["getCounter"]),
  },
  methods: {
    increment() {
      this.$store.dispatch("incrementCounter");
    },
    decrement() {
      this.$store.dispatch("decrementCounter");
    },
    set(val) {
      this.$store.dispatch("setCounter", val);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
