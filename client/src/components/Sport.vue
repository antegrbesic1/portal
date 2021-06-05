<template>
  <div class="sport-component">
    <div class="sport-wrapper">
      <a>Sport</a>
      <div
        class="content-box"
        v-for="vijest in sport.slice(0, limiter)"
        :key="vijest.heading"
      >
        <div class="green-line"></div>
        <div class="image-sport-box">
          <img :src="vijest.url" />
        </div>
        <div class="heading-description-box">
          <h3>{{ vijest.heading }}</h3>
        </div>
      </div>
    </div>
    <button id="load_more_sport" @click="moreClicked = !moreClicked">
      {{ poruka }}
    </button>
  </div>
</template>

<script>
import Api from "../services/Api";
export default {
  name: "Sport",
  data() {
    return {
      sport: null,
      ready: false,
      limiter: null,
      moreClicked: false,
      poruka: "Ucitaj vise sporta",
    };
  },
  mounted() {
    if (window.location.href == "http://localhost:8080/#/") {
      this.limiter = 6;
    }
    console.log(window.location.href);
    Api()
      .get("sport")
      .then(async (response) => {
        this.sport = response.data;
        this.sport.reverse();
      });
  },
  watch: {
    moreClicked: function() {
      if (this.moreClicked == true) {
        this.limiter = this.limiter + 3;
        this.poruka = "Ucitaj manje sporta";
      } else if (this.moreClicked == false) {
        this.limiter = this.limiter - 3;
        this.poruka = "Ucitaj vise sporta";
      }
    },
  },
};
</script>

<style scoped>
.sport-component {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
}
.sport-wrapper {
  width: 1000px;
  position: relative;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));
  grid-template-rows: repeat(auto, 200px);
}
.sport-wrapper img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.sport-content-overlay {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 150px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.heading,
.description {
  height: 50%;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
}
.heading {
  font-size: 24px;
  font-weight: 800;
  color: white;
}
.description {
  font-size: 18px;
  color: white;
  font-weight: 300;
}

/*SINGLE BOXES FOR sport*/
.content-box {
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.13);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.13);
  height: 300px;
}

.sport-wrapper a {
  position: absolute;
  top: -25px;
  left: 0;
  color: #43ee43 !important;
}
.green-line {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #43ee43;
  width: 100%;
  height: 5px;
  z-index: 1;
}

.image-sport-box {
  height: 50%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  object-fit: cover;
}
.heading-description-box {
  background-color: white;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
#load_more_sport {
  margin-top: 50px;
  padding: 15px;
  background-color: #e63946;
  color: white;
}
</style>
