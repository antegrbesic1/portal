<template>
  <div class="aboutUs-main">
    <navigation />
    <div class="mid-container"></div>

    <div
      class="tehnologije"
      ref="tehnologije"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div class="slike">
        <div class="html logo">
          <img src="../assets/html_logo.png" alt="" id="html_logo" />
        </div>
        <div class="css logo">
          <img src="../assets/css_logo.png" alt="" />
        </div>
        <div class="vue-js logo">
          <img src="../assets/vue_js_logo.png" alt="" id="vue_logo" />
        </div>
        <div class="node-js logo">
          <img src="../assets/node_js_logo.png" alt="" />
        </div>
        <div class="mysql logo">
          <img src="../assets/logo-mysql-170x115.png" alt="" />
        </div>
      </div>
    </div>

    <div class="tkosmo-box" data-aos="fade-up">
      <div class="card-container">
        <div class="credentials">
          <img
            class="round"
            src="../assets/sakota.jpeg"
            alt="user"
            id="slikaprofil"
          />
          <h3>Ivan Šakota</h3>
          <h6>Široki Brijeg</h6>

          <p id="zanimanje">
            Student @ FSRE | Mostar <br />
            junior web developer
          </p>
        </div>

        <div class="skills">
          <p>
            "Nadam se uspješnooj realizaciji projekta te stjecanju novih znanja
            koja će mi kasnije poslužiti kao čvrsta osnova"
          </p>
        </div>
      </div>

      <div class="card-container">
        <div class="credentials">
          <img
            class="round"
            src="../assets/antegrbesic.jpg"
            alt="user"
            id="slikaprofil"
          />
          <h3>Ante Grbešić</h3>
          <h6>Široki Brijeg</h6>
          <p id="zanimanje">
            Student @ FSRE | Mostar <br />
            junior web developer
          </p>
        </div>

        <div class="skills">
          <p>
            "Smatram ovaj projekt kao kvalitetnim izazovom kojim ćemo obraditi
            sve potrebne cjeline za web developera."
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import Navigation from "./Navigation.vue";

export default {
  name: "aboutUs",
  data() {
    Navigation;
    return {};
  },
  methods: {},
  beforeCreate() {
    window.addEventListener("load", () => {
      AOS.init();
    });
  },
  mounted() {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital@1&display=swap");

.aboutUs-main {
  scroll-behavior: smooth;
  position: relative;
}

.main-container {
  height: 100vh;
  display: flex;
  align-items: center;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mid-container {
  height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/slika.jpg");
  background-position: top;
  background-size: cover;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.logo img {
  height: 120px;
  width: 130px;
}

.slike {
  padding: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.slike img {
  padding: 5px;
}

#html_logo {
  width: 100px;
  height: 90px;
}

#vue_logo {
  height: 100px;
}

.tehnologije {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: 1.9s all ease-in-out;
}

.tkosmo-box {
  margin-top: 50px;
  font-family: "Montserrat", sans-serif;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 {
  margin: 10px 0;
}

h6 {
  margin: 5px 0;
  text-transform: uppercase;
}

p {
  font-size: 14px;
  line-height: 21px;
}

.card-container {
  background-color: #353535;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding-top: 30px;
  position: relative;
  width: 350px;
  max-width: 100%;
  text-align: center;
  margin: 50px;
  height: 500px;
}

.card-container .round {
  border-radius: 50%;
  padding: 7px;
}

#slikaprofil {
  height: 180px;
  width: 180px;
}

button.primary {
  background-color: #03bfcb;
  border: 1px solid #03bfcb;
  border-radius: 3px;
  color: #231e39;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  padding: 10px 25px;
}

button.primary.ghost {
  background-color: transparent;
  color: #02899c;
}

.skills {
  background-color: #212529;
  text-align: left;
  position: absolute;
  bottom: 0;
  padding: 15px;
  height: 20vh;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.credentials {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: -55px;
}

#zanimanje {
  margin-top: 20px;
}

@media only screen and (max-width: 600px) {
  .card-container {
    height: 350px;
    width: 300px;
  }
  #slikaprofil {
    height: 100px;
    width: 100px;
  }

  .skills p {
    font-size: 10px;
  }
  .tkosmo-box {
    flex-direction: column;
  }

  #opis {
    font-size: 32px;
  }
  .logo img {
    height: 100px;
    width: 110px;
  }
}
</style>
