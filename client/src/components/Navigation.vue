<template>
  <nav class="navbar-component">
    <div class="desktop" v-if="desktop">
      <div class="navigation-wrapper">
        <div class="logo-container">
          <a>portal</a>
        </div>
        <div class="links-container">
          <div class="vijesti-container">
            <div class="color-box-vijesti"></div>
            <a>
              Vijesti
            </a>
          </div>
          <div class="biznis-container">
            <div class="color-box-biznis"></div>
            <a>Biznis</a>
          </div>
          <div class="sport-container">
            <div class="color-box-sport"></div>
            <a>Sport</a>
          </div>
          <div class="filmovi-container">
            <div class="color-box-filmovi"></div>
            <a>Filmovi</a>
          </div>
          <div class="glazba-container">
            <div class="color-box-glazba"></div>
            <a>Glazba</a>
          </div>
        </div>
        <div class="social-links-container">
          <a>Facebook</a>
          <a>Instagram</a>
        </div>
      </div>
    </div>
    <div class="mobile-nav" v-if="responsive">
      <div class="mobile-nav-icon">
        <v-app-bar-nav-icon
          v-if="responsive"
          @click="openMobileNav = !openMobileNav"
        ></v-app-bar-nav-icon>
      </div>
      <div
        class="mobile-nav-list"
        v-bind:class="{ 'clicked-mobile': openMobileNav }"
      >
        <ul>
          <router-link :to="{ name: 'Home' }">
            <li>Početna</li>
          </router-link>
          <router-link :to="{ name: 'aboutUs' }">
            <li>
              O nama
            </li></router-link
          >
          <router-link :to="{ name: 'Register' }">
            <li>
              Registriraj se
            </li></router-link
          >
          <router-link :to="{ name: 'Login' }">
            <li>
              Logiraj se
            </li></router-link
          >
          <router-link :to="{ name: 'Home' }">
            <li>Početna</li>
          </router-link>
          <router-link :to="{ name: 'aboutUs' }">
            <li>
              O nama
            </li></router-link
          >
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import AOS from "aos";
import { mixin as clickaway } from "vue-clickaway";
export default {
  mixins: [clickaway],
  name: "Navigation",
  data() {
    return {
      responsive: false,
      desktop: true,
      openMobileNav: false,
    };
  },

  methods: {
    handleView() {
      if (window.innerWidth > 600) {
        this.responsive = false;
        this.desktop = true;
        this.openMobileNav = false;
      } else {
        this.responsive = true;
        this.desktop = false;
      }
    },
  },
  watch: {
    openMobileNav: function() {
      if (this.openMobileNav) {
        document.querySelector("html").style.overflow = "hidden";
        document.querySelector(".mobile-nav-list").style.overflow = "auto";
        console.log("hahahaha");
      } else {
        document.querySelector("html").style.overflow = "";
      }
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
    AOS.init();
  },
  beforeDestroy() {
    document.querySelector("html").style.overflow = "";
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: inherit !important;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  text-decoration: none;
  text-align: center;
  color: black;
}

.mobile-nav {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

.mobile-nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-nav-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100vh;
  width: 80%;
  left: -999px;
  transition: 0.4s;
  z-index: 2;
  background-color: white;
}

.mobile-nav-list li {
  display: flex;
  width: 100%;
  width: 100%;
}

.clicked-mobile {
  left: 0;
}

.clicked-mobile ul li {
  left: 0;
  width: 100%;
}
.router-link-exact-active {
  font-weight: 700;
}

.navbar-component {
  z-index: 2;
  background-color: white;
  width: 100%;
}

/*DESKTOP NAVIGACIJA*/
.navigation-wrapper {
  width: 100%;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  position: relative;
}

.links-container {
  display: flex;
  align-items: center;
}

.links-container > div {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin: 15px;
  color: #575757;
}

.links-container > div > div {
  margin-right: 5px;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 20px;
  left: 0;
  font-size: 28px;
  height: 100%;
}

.social-links-container {
  display: flex;
  align-items: center;
  position: absolute;
  padding: 20px;
  right: 0;
  font-size: 20px;
  height: 100%;
  padding: 10px;
}

.social-links-container > a {
  margin-left: 5px;
}

.color-box-vijesti {
  height: 10px;
  width: 10px;
  background-color: #d91414;
  border-radius: 100px;
}

.color-box-biznis {
  height: 10px;
  width: 10px;
  background-color: #3a3434;
  border-radius: 100px;
}

.color-box-sport {
  height: 10px;
  width: 10px;
  background-color: #049b49;
  border-radius: 100px;
}
.color-box-filmovi {
  height: 10px;
  width: 10px;
  background-color: #c0b33a;
  border-radius: 100px;
}
.color-box-glazba {
  height: 10px;
  width: 10px;
  background-color: #f51afa;
  border-radius: 100px;
}
</style>
