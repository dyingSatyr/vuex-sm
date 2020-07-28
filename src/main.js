import Vue from "vue";
import App from "./App.vue";

//Import Router
import router from "./router/index";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
