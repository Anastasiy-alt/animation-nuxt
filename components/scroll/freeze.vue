<script setup>
import {onScroll, animate, stagger, createScope} from 'animejs'


onMounted(() => {
  createScope({
    mediaQueries: { landscape: '(orientation: horizontal)' },
    defaults: { ease: 'out(3)', duration: 500 },
  }).add((scope) => {

    let cardAnimation;

    if (scope.matches.landscape) {
      cardAnimation = animate('.card-freeze', {
        y: {
          from: stagger(['20vh','-20vh'], {from: 'center'}),
        },
        x: ['0', stagger(['80%', '-80%'])],
        delay: stagger(0, { from: 'first' }),
      });
    } else {
      cardAnimation = animate('.card-freeze', {
        y: ['100vh', stagger(['-80%', '80%'])],
        delay: stagger(100, { from: 'first' })
      });
    }

    onScroll({
      target: '.sticky-container',
      enter: 'top',
      leave: 'bottom',
      debug: false,
      sync: .5
    }).link(cardAnimation)

  });
})
</script>



<template>
  <section class="spacer"></section>
  <section class="sticky-container">
    <div class="sticky-content">
      <div class="stack">
        <div class="card-freeze">1</div>
        <div class="card-freeze">2</div>
        <div class="card-freeze">3</div>
        <div class="card-freeze">4</div>
        <div class="card-freeze">5</div>
      </div>
    </div>
  </section>
  <section class="spacer"></section>

</template>

<style lang="sass" scoped>
.sticky-container
  align-items: flex-start
  height: 400vh

.sticky-content
  position: sticky
  top: 0
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  width: 100%

section
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  min-height: 100vh
  border-top: 1px dotted var(--red)
  border-bottom: 1px dotted var(--red)

section.spacer
  min-height: 50vh

h2
  font-family: ui-monospace, monospace
  font-size: min(5vw, 24px)
  max-width: 1000px

.section-content
  display: flex
  width: 100%
  height: 100vh
  justify-content: center

.stack
  --w: 22.5vh
  --h: 30vh
  position: relative
  width: calc(var(--w) * 1)
  height: calc(var(--h) * 1)

.card-freeze
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  border-radius: 1rem
  background-color: #f8cc1b
.card-freeze:nth-child(3n)
  background-color: #f6a020
.card-freeze:nth-child(3n + 1)
  background-color: #72b043


.card-freeze > div
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 100%
  background-position: center
  border-radius: inherit

</style>