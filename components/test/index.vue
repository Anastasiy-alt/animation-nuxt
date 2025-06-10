<script setup>
import {animate, onScroll, utils} from 'animejs';

onMounted(() => {
  utils.$('.square').forEach($square => {
    animate($square, {
      y: '70px',
      duration: 2000,
      alternate: true,
      ease: 'inOutQuad',
      autoplay: onScroll({
        sync: 1,
        enter: 'max bottom',
        leave: 'min top',
        debug: true
      })
    });
  });
})
</script>

<template>
  <div class="scroll-section padded">
    <div class="square"></div>
  </div>
  <div class="scroll-section padded">
    <div class="square"></div>
  </div>
  <div class="scroll-section padded">
    <div class="square"></div>
  </div>
</template>

<style scoped lang="sass">
@import '/const/an.css'
</style>