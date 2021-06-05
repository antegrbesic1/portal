<template>
  <div class="home-component">
    <navigation></navigation>
    <div class="headline-wrapper-home">
      <!--Imported Headline componenet-->
      <headline></headline>
    </div>
    <div class="news-wrapper-home">
      <!--Imported News componenet-->
      <news></news>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<style scoped>
.headline-wrapper-home,
.news-wrapper-home {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.news-wrapper-home {
  margin-top: 20px;
}
.headline-wrapper-home {
  margin-top: 20px;
}
</style>
