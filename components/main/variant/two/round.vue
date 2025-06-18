<script setup>
import {animate, createTimeline, onScroll, stagger, utils} from 'animejs'

onMounted(() => {
  createTimeline({
    defaults: {
      ease: 'linear',
      duration: 500,
      composition: 'blend',
    },
    autoplay: onScroll({
      target: '.sticky-container-round',
      enter: 'top top',
      leave: 'bottom bottom',
      sync: .5,
      debug: false,
    }),
  })
      .add('.stack', {
        ease: 'in(2)',
      }, 0)
      .add('.card', {
        rotate: 0,
        rotateZ: {to: stagger([0, -300], {from: 'first'}), ease: 'inOut(2)'},
        y: {to: '-150%', duration: 400},
        delay: stagger(1, {from: 'first'}),
      }, 0)
      .init()
})
</script>


<template>
  <section class="sticky-container-round">
    <div class="sticky-content">
      <div class="stack">
        <div class="card">1</div>
        <div class="card">2</div>
        <div class="card">3</div>
        <div class="card">4</div>
        <div class="card">5</div>
        <div class="card">6</div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.sticky-container-round
  align-items: flex-start
  height: 400lvh

.sticky-content
  position: sticky
  top: 0
  display: flex
  justify-content: center
  align-items: center
  height: 100lvh
  width: 100%

section
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  min-height: 100lvh
  border-top: 1px dotted var(--red)
  border-bottom: 1px dotted var(--red)

.section-content
  display: flex
  width: 100%
  height: 100lvh
  justify-content: center

.stack
  position: relative
  width: 150px
  height: 150px

.card
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  border-radius: 1rem
  background-color: #f8cc1b

.card:nth-child(3n)
  background-color: #f6a020

.card:nth-child(3n + 1)
  background-color: #72b043

.card > div
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 100%
  background-position: center
  border-radius: inherit

</style>