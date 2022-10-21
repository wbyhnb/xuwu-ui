<template>
  <div
    class="card_box"
    ref="cardbox"
    @mouseenter="swiperStop()"
    @mouseleave="swiper()"
    :style="{width: boxWidth}"
  >
    <div
      class="card_item"
      :class="index == boxindex ? 'card_active' : 'card_actives'"
      v-for="(item, index) in options"
      :key="index"
      :style="{ backgroundImage: 'url(' + item + ')' }"
      @click="cardClick(index)"
    >
      <div>{{ index + 1 }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref,  onBeforeUnmount, onMounted } from "vue";
defineOptions({
  name: "WuCard",
});
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  auto: {
    type: Boolean,
    default: false,
  },
});
const boxindex = ref(0);
const cardbox = ref(null);
const timer = ref(null);
const boxWidth = ref(0);

swiper();
onMounted(() => {
  boxWidth.value = 300 + (props.options.length - 1) * 105 + "px";
});
function cardClick(index) {
  boxindex.value = index;
}
//自动轮播
function swiper() {
  if (props.auto == true) {
    timer.value = setInterval(() => {
      boxindex.value++;
      if (boxindex.value > props.options.length - 1) {
        boxindex.value = 0;
      }
    }, 2000);
  }
}
//停止轮播
function swiperStop() {
  if (props.auto == true) {
    clearInterval(timer.value);
  }
}
onBeforeUnmount(() => {
  //去除轮播自动播放
  swiperStop();
});
</script>

<style lang="scss" >
@import "./index.scss";
</style>
