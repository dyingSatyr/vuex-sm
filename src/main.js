import Vue from "vue";
import App from "./App.vue";

//Import Router
import router from "./router/index";

//Import store
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
