<script setup>
import {animate, onScroll, utils} from 'animejs';

onMounted(() => {
  utils.$('.animation').forEach($square => {
    animate($square, {
      y: '160px',
      duration: 5000,
      alternate: true,
      ease: 'inOutQuad',
      autoplay: onScroll({
        sync: 0.5,
        // enter: 'max bottom',
        // leave: 'min top',
        // enter: 'bottom-=500 top',
        enter: 'top+=300 bottom',
        leave: 'top-=0 bottom',
        debug: false
      })
    });
  });
})
</script>

<template>
  <h1>Recommendation: watch on 1920px display and scroll down to see the magic</h1>
  <section class="main">
    <div class="title-block title-block_first">
      <div class="animation title-block">
        <p class="title title_first">awesome Journey</p>
        <img alt=""
             class="square img img_first" src="~/assets/main/variantOne/alien.png">
      </div>
    </div>

    <div class="title-block title-block_second">
      <div class="animation title-block">
        <img alt="" class="img img_second" src="~/assets/main/variantOne/comet.png">
        <p class="title title_second_one">Through</p>
        <img alt="" class="img img_third" src="~/assets/main/variantOne/moon.png">
        <img alt="" class="img img_fourth" src="~/assets/main/variantOne/nebula.png">
        <p class="title title_second_two">Space</p>
      </div>
    </div>
    <div class="title-block title-block_third">
      <div class="animation title-block">
        <p class="title title_third">Beyond Insights</p>
        <img alt="" class="img img_fifth" src="~/assets/main/variantOne/planet.png">
      </div>
    </div>
  </section>

<!--  <section class="main">-->
<!--    <div class="title-block title-block_first">-->
<!--      <p class="title title_first">awesome Journey</p>-->
<!--      <img alt=""-->
<!--           class="img img_first" src="~/assets/main/variantOne/alien.png"></div>-->
<!--    <div class="title-block title-block_second">-->
<!--      <img alt="" class="img img_second" src="~/assets/main/variantOne/comet.png">-->
<!--      <p class="title title_second_one">Through</p>-->
<!--      <img alt="" class="img img_third" src="~/assets/main/variantOne/moon.png">-->
<!--      <img alt="" class="img img_fourth" src="~/assets/main/variantOne/nebula.png">-->
<!--      <p class="title title_second_two">Space</p></div>-->
<!--    <div class="title-block title-block_third">-->
<!--      <p class="title title_third">Beyond Insights</p>-->
<!--      <img alt="" class="img img_fifth" src="~/assets/main/variantOne/planet.png">-->
<!--    </div>-->
<!--  </section>-->

  <section class="long">
    Very long block about space, time, stars and cosmos ship...
  </section>

</template>

<style lang="sass" scoped>

.long
  position: relative
  height: 100vh
  padding: 50px
  box-sizing: border-box
  background-color: deepskyblue
  margin-top: 100px

.main
  margin-top: 200px

.title-block
  display: flex
  align-items: center
  flex-direction: row
  gap: 10px
  height: 150px
  overflow: hidden
  position: relative
  width: 100%

.title
  animation: title 3s cubic-bezier(0.1, 0.5, 1, 1) forwards
  font-size: 130px
  line-height: 130px
  text-transform: uppercase
  font-weight: 600
  color: #e6e6e6


.title_first
  animation: title_first 6s cubic-bezier(0.1, 0.5, 1, 1) forwards

.title_second_one
  animation: title_second_one 6s cubic-bezier(0.1, 0.5, 1, 1) forwards

.title_second_two
  animation: title_second_two 6s cubic-bezier(0.1, 0.5, 1, 1) forwards

.title_third
  animation: title_third 6s cubic-bezier(0.1, 0.5, 1, 1) forwards


.img
  position: absolute

.img_first
  animation: img_first 6s cubic-bezier(0.1, 0.5, 1, 1) forwards

.img_second
  animation: img_second 6s cubic-bezier(0.1, 0.5, 1, 1) forwards

.img_third
  z-index: 1
  animation: img_third 6s cubic-bezier(0.1, 0.5, 1, 1) forwards

.img_fourth
  animation: img_fourth 6s cubic-bezier(0.1, 0.5, 1, 1) forwards

.img_fifth
  animation: img_fifth 6s cubic-bezier(0.1, 0.5, 1, 1) forwards

@keyframes title
  0%
    transform: translate(0, 160px)
  100%
    transform: translate(0, 0)

@keyframes title_first
  0%
    transform: translate(0, 160px)
  50%
    transform: translate(0, 0)
  100%
    transform: translate(200px, 0)

@keyframes title_second_one
  0%
    transform: translate(0, 160px)
  50%
    transform: translate(0, 0)
  100%
    transform: translate(130px, 0)

@keyframes title_second_two
  0%
    transform: translate(0, 160px)
  50%
    transform: translate(0, 0)
  100%
    transform: translate(320px, 0)

@keyframes title_third
  0%
    transform: translate(0, 160px)
  50%
    transform: translate(0, 0)
  100%
    transform: translate(150px, 0)

@keyframes img_first
  0%
    opacity: 0
    transform: translate(1500px, 0) scale(0)
  60%
    opacity: 0
    transform: translate(1500px, 0) scale(1.2)
    left: 0
  100%
    transform: translate(1530px, 0) scale(1.2)
    opacity: 1
    left: 0

@keyframes img_second
  0%
    opacity: 0
    transform: translate(0, 0) scale(0)
  60%
    opacity: 0
    transform: translate(0, 0) scale(1.2)
    left: 0
  100%
    transform: translate(10px, 0) scale(1.2)
    opacity: 1
    left: 0

@keyframes img_third
  0%
    opacity: 0
    transform: translate(720px, 0) scale(0)
  80%
    opacity: 0
    transform: translate(720px, 0) scale(1.2)
    left: 0
  100%
    transform: translate(780px, 0) scale(1.2)
    opacity: 1
    left: 0

@keyframes img_fourth
  0%
    opacity: 0
    transform: translate(800px, 0) scale(0)
  70%
    opacity: 0
    transform: translate(800px, 0) scale(1.2)
    left: 0
  100%
    transform: translate(840px, 0) scale(1.2)
    opacity: 1
    left: 0

@keyframes img_fifth
  0%
    opacity: 0
    transform: translate(1300px, 0) scale(0)
  50%
    opacity: 0
    transform: translate(1300px, 0) scale(1.2)
    left: 0
  100%
    transform: translate(1350px, 0) scale(1.2)
    opacity: 1
    left: 0
</style>