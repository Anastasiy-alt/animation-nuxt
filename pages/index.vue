<script setup>

</script>

<template>
  <h1>
    This pet-project about usage Anime.js lib with Nuxt.js
  </h1>
  <h2>The links show pages with usage examples.</h2>
  <ul>
    <li>
      <NuxtLink class="link" to="https://anastasiy-alt.github.io/animation-nuxt/main">Main display</NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="https://anastasiy-alt.github.io/animation-nuxt/svg">Svg animations</NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="https://anastasiy-alt.github.io/animation-nuxt/simple">Simple</NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="https://anastasiy-alt.github.io/animation-nuxt/scroll">Scroll</NuxtLink>
    </li>

  </ul>


  <!--  <SvgRoad />-->
  <!--  <SvgDraw />-->
</template>

<style lang="sass">


li::marker
  content: "🌝 "

li:nth-child(2n)::marker
  content: "🌚 "

.link
  font-size: 24px
  color: #9b9797
  transition: .35s all

.link:hover
  color: #e6e6e6

.link:visited
  color: #6aff65
</style>