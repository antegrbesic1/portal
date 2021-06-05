<template>
  <div class="news-component">
    <div class="news-wrapper">
      <a>Vijesti</a>
      <div
        class="content-box"
        v-for="vijest in vijesti.slice(0, limiter)"
        :key="vijest.heading"
      >
        <div class="red-line"></div>
        <div class="image-news-box">
          <img :src="vijest.url" />
        </div>
        <div class="heading-description-box">
          <h3>{{ vijest.heading }}</h3>
        </div>
      </div>
    </div>
    <button id="load_more_news" @click="moreClicked = !moreClicked">
      {{ poruka }}
    </button>
  </div>
</template>

<script>
import Api from "../services/Api";
export default {
  name: "News",
  data() {
    return {
      vijesti: null,
      ready: false,
      limiter: null,
      moreClicked: false,
      poruka: "Ucitaj vise vijesti",
    };
  },
  mounted() {
    if (window.location.href == "http://localhost:8080/#/") {
      this.limiter = 6;
    }
    console.log(window.location.href);
    Api()
      .get("vijesti")
      .then(async (response) => {
        this.vijesti = response.data;
        this.vijesti.reverse();
      });
  },
  watch: {
    moreClicked: function() {
      if (this.moreClicked == true) {
        this.limiter = this.limiter + 3;
        this.poruka = "Ucitaj manje vijesti";
      } else if (this.moreClicked == false) {
        this.limiter = this.limiter - 3;
        this.poruka = "Ucitaj vise vijesti";
      }
    },
  },
};
</script>

<style scoped>
.news-component {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
}
.news-wrapper {
  width: 1000px;
  position: relative;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));
  grid-template-rows: repeat(auto, 200px);
}
.news-wrapper img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.news-content-overlay {
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

/*SINGLE BOXES FOR NEWS*/
.content-box {
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.13);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.13);
  height: 300px;
}

.news-wrapper a {
  position: absolute;
  top: -25px;
  left: 0;
  color: #d91414 !important;
}
.red-line {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #d91414;
  width: 100%;
  height: 5px;
  z-index: 1;
}

.image-news-box {
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
#load_more_news {
  margin-top: 50px;
  padding: 15px;
  background-color: #e63946;
  color: white;
}
</style>
