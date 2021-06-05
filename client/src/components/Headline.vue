<template>
  <div class="headline-component">
    <div class="headline-wrapper">
      <img src="../assets/plenkovic.jpg" alt="" />
      <div class="content-overlay">
        <div class="heading">
          Premijer Plenković: Proglašavamo katastrofu na područjima pogođenim
        </div>
        <div class="description">
          Na sjednici Vlade koja je počela u 12 sati, svi ministri izvijestit će
          hrvatsku javnost o dosad učinjenom na uklanjanju posljedica nakon
          razornog potresa.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Headline",
  data() {
    return {};
  },
};
</script>

<style scoped>
.headline-component {
  display: flex;
  justify-content: center;
}
.headline-wrapper {
  height: 550px;
  width: 1000px;
  overflow: hidden;
  position: relative;
}
.headline-wrapper img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.content-overlay {
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
</style>
