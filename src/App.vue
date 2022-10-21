<script setup>
import { ref } from "vue";
const list = ref([
  "https://s3.bmp.ovh/imgs/2022/07/06/5fd403a5515153b8.png",
  "https://s3.bmp.ovh/imgs/2022/07/06/1cb6a18f05c58e5c.png",
  "https://s3.bmp.ovh/imgs/2022/07/06/6599df6ac5535c8b.png",
  "https://s3.bmp.ovh/imgs/2022/07/06/f8435f86f1ed2081.jpg",
  "https://s3.bmp.ovh/imgs/2022/07/06/85a73598b873b349.jpg",
]);
</script>

<template>
  <WuCard :options="list"></WuCard>
</template>

<style scoped></style>
