import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "./components/Navigation";
import store from "./store/store";
import VBodyScrollLock from "v-body-scroll-lock";
import Headline from "@/components/Headline";
import News from "@/components/News";
import Upload from "@/components/Upload";
//import store from "./store/store";
Vue.component("navigation", Navigation);
Vue.component("headline", Headline);
Vue.component("news", News);
Vue.component("upload", Upload);
Vue.use(VBodyScrollLock);
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(axios);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
  created() {
    AOS.init();
  },
}).$mount("#app");
