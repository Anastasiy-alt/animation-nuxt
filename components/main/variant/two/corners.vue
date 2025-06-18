<script setup>
import {animate, onScroll} from "animejs";

onMounted(() => {
  animate('.corners', {
    duration: 1000,
    y: '-300px',
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      target: document.querySelector('.scroll-block'),
      debug: false
    })
  });
  animate('.corner_second', {
    duration: 1000,
    y: '-100px',
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      leave: 'bottom',
      target: document.querySelector('.corner_first'),
      debug: false
    })
  });
  animate('.corner_third', {
    duration: 500,
    y: '-250px',
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      target: document.querySelector('.corner_second'),
      leave: 'bottom',
      debug: false
    })
  });
  animate('.corner_second .corner__inner', {
    duration: 500,
    x: '30vw',
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      target: document.querySelector('.corner_first'),
      leave: 'bottom-=200 bottom',
      debug: false
    })
  });
  animate('.corner_first .corner__inner', {
    duration: 500,
    x: '-30vw',
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      target: document.querySelector('.target'),
      leave: 'top+=100 top',
      debug: false
    })
  });
  animate('.corner_third .corner__inner', {
    duration: 500,
    x: '-20vw',
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      target: document.querySelector('.corner_second'),
      leave: 'bottom-=10 bottom',
      debug: false
    })
  });

  document.querySelectorAll('.corner_third .corner__text').forEach(function (el) {
    const randomX = Math.floor(Math.random() * 201) - 200;
    const randomY = Math.floor(Math.random() * 201) - 200;
    el.style.transform = `translate(${randomX}px, ${randomY}px) scale(2)`;
    animate(el, {
      duration: 500,
      x: {
        from: `${randomX}px`,
        to: '0'
      },
      y: {
        from: `${randomY}px`,
        to: '0'
      },
      alternate: true,
      ease: 'inOutQuad',
      autoplay: onScroll({
        sync: 0.5,
        target: document.querySelector('.corner_second'),
        enter: 'bottom-=20 bottom',
        leave: 'bottom-=150 bottom',
        debug: false
      })
    });
  });

  document.querySelectorAll('.corner_second .corner__text').forEach(function (el) {
    const randomX = Math.floor(Math.random() * 201) - 200;
    const randomY = Math.floor(Math.random() * 201) - 200;
    el.style.transform = `translate(${randomX}px, ${randomY}px) scale(2)`;
    animate(el, {
      duration: 500,
      x: {
        from: `${randomX}px`,
        to: '0'
      },
      y: {
        from: `${randomY}px`,
        to: '0'
      },
      alternate: true,
      ease: 'inOutQuad',
      autoplay: onScroll({
        sync: 0.5,
        target: document.querySelector('.corner_first'),
        enter: 'bottom-=20 bottom',
        leave: 'bottom-=150 bottom',
        debug: false
      })
    });
  });

  document.querySelectorAll('.corner_first .corner__text').forEach(function (el) {
    const randomX = Math.floor(Math.random() * 201) - 200;
    const randomY = Math.floor(Math.random() * 201) - 200;
    el.style.transform = `translate(${randomX}px, ${randomY}px) scale(2)`;
    animate(el, {
      duration: 500,
      x: {
        from: `${randomX}px`,
        to: '0'
      },
      y: {
        from: `${randomY}px`,
        to: '0'
      },
      alternate: true,
      ease: 'inOutQuad',
      autoplay: onScroll({
        sync: 0.5,
        target: document.querySelector('.target'),
        leave: 'top+=200 top',
        debug: false
      })
    });
  });
})
</script>

<template>
  <section class="corners">
    <div class="corner corner_first">
      <div class="corner__block">
        <div class="corner__text-block">
          <div class="corner__inner">
            <span class="corner__text">o</span>
            <span class="corner__text">o</span>
            <span class="corner__text">d</span>
          </div>
        </div>
      </div>
    </div>
    <div class="corner corner_second">
      <div class="corner__text-block">
        <div class="corner__inner">
          <span class="corner__text">d</span>
          <span class="corner__text">a</span>
          <span class="corner__text">l</span>
          <span class="corner__text">e</span>
          <span class="corner__text">k</span>
        </div>

      </div>
    </div>
    <div class="corner corner_third">
      <div class="corner__block">
        <div class="corner__text-block">
          <div class="corner__inner">
            <span class="corner__text">t</span>
            <span class="corner__text">h</span>
            <span class="corner__text">e</span>
            <span class="corner__text">&nbsp;</span>
            <span class="corner__text">m</span>
            <span class="corner__text">a</span>
            <span class="corner__text">s</span>
            <span class="corner__text">t</span>
            <span class="corner__text">e</span>
            <span class="corner__text">r</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@use "/const/color"

.corner::before
  z-index: 0
  content: ''
  height: 100%
  width: 100svw
  position: absolute
  top: 0
  left: 50%
  transform: translate(-50%, 0)
  clip-path: polygon(0 300px, 100% 0, 100% 100%, 0 100%)
  background: color.$light-yellow

.corner:nth-child(2n)::before
  background: color.$white
  clip-path: polygon(0 0, 100% 200px, 100% 100%, 0 100%)

.corner:last-child::before
  clip-path: polygon(0 200px, 100% 0, 100% 100%, 0 calc(100% - 200px))

.corner
  position: relative
  width: 100%
  overflow: visible
  height: 800px
  margin-top: -250px

.corner:first-child
  margin-top: 0

.corner__text
  display: inline-block

.corner__text-block
  width: fit-content
  position: absolute
  top: 50%
  right: 0
  transform: translate(0, -50%)
  color: black !important
  font-size: 150px
  text-transform: uppercase
  font-weight: bold

.corner:nth-child(2n) .corner__text-block
  left: 0
  right: auto

</style>