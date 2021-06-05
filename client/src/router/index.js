import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import aboutUs from "@/components/aboutUs";
import Headline from "@/components/Headline";
import News from "@/components/News";
import Upload from "@/components/Upload";
import Login from "@/components/Login";
import Register from "@/components/Register";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/aboutus",
      name: "aboutUs",
      component: aboutUs,
    },
    {
      path: "/headline",
      name: "Headline",
      component: Headline,
    },
    {
      path: "/news",
      name: "News",
      component: News,
    },
    {
      path: "/upload",
      name: "Upload",
      component: Upload,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
  ],
});
