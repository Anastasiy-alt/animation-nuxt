<script setup>
import {animate, stagger, svg} from 'animejs';

onMounted(() => {
  animate(svg.createDrawable('.line'), {
    draw: ['0 0', '0 1', '1 1'],
    ease: 'inOutQuad',
    duration: 3000,
    delay: stagger(70),
    loop: true
  });
})

</script>

<template>

  <div class="draw-back">
    <h1>It`s work only on stroke</h1>
    <svg viewBox="0 0 304 112">
      <g fill="none" fill-rule="evenodd" stroke="#6aff65" stroke-linecap="round" stroke-linejoin="round"
         stroke-width="2">
        <path class="line"
              d="M59 90V56.136C58.66 46.48 51.225 39 42 39c-9.389 0-17 7.611-17 17s7.611 17 17 17h8.5v17H42C23.222 90 8 74.778 8 56s15.222-34 34-34c18.61 0 33.433 14.994 34 33.875V90H59z"/>
        <polyline class="line" points="59 22.035 59 90 76 90 76 22 59 22"/>
        <path class="line"
              d="M59 90V55.74C59.567 36.993 74.39 22 93 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90H59z"/>
        <polyline class="line" points="127 22.055 127 90 144 90 144 22 127 22"/>
        <path class="line"
              d="M127 90V55.74C127.567 36.993 142.39 22 161 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90h-17z"/>
        <path class="line" d="M118.5 22a8.5 8.5 0 1 1-8.477 9.067v-1.134c.283-4.42 3.966-7.933 8.477-7.933z"/>
        <path class="line" d="M144 73c-9.389 0-17-7.611-17-17v-8.5h-17V56c0 18.778 15.222 34 34 34V73z"/>
        <path class="line"
              d="M178 90V55.74C178.567 36.993 193.39 22 212 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90h-17z"/>
        <path class="line"
              d="M263 73c-9.389 0-17-7.611-17-17s7.611-17 17-17c9.18 0 16.58 7.4 17 17h-17v17h34V55.875C296.433 36.994 281.61 22 263 22c-18.778 0-34 15.222-34 34s15.222 34 34 34V73z"/>
        <path class="line" d="M288.477 73A8.5 8.5 0 1 1 280 82.067v-1.134c.295-4.42 3.967-7.933 8.477-7.933z"/>
      </g>
    </svg>
  </div>
</template>

<style lang="sass" scoped>
.draw-back
  //background-color: deepskyblue
  padding: 50px
</style>