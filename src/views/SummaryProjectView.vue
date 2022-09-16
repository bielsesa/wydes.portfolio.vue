<script>
const baseImagesUrl = 'src/assets/img/projects/summary/';

export default {
  data() {
    return {
      images: [`${baseImagesUrl}enrevessat-01.jpg`, `${baseImagesUrl}enrevessat-02.jpg`]
    }
  }
}
</script>

<template>
  <div class="summary">
    <h1>This is a project page</h1>
    <div v-for="img in images">
      <img :src="img" class="img-fluid w-50 align-self-center" />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .summary {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
