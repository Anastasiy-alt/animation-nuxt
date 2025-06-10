<script setup>

</script>

<template>
  <div class="svg-anim-page">
    <div class="svg-anim-block"><SvgDraw /></div>
    <div class="svg-anim-block"><SvgRoad /></div>
  </div>

</template>

<style scoped lang="sass">
.svg-anim-page
  display: flex
  gap: 50px
  flex-direction: column

.svg-anim-block
  position: relative
  height: fit-content

.svg-anim-block:last-child
  min-height: 600px
</style>