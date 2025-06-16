<script setup>

import Main from "~/pages/main.vue";
</script>

<template>
<!--  <MainTest />-->
  <h1>
    This pet-project about usage Anime.js lib with Nuxt.js
  </h1>
  <h2>The links show pages with usage examples.</h2>
  <ul>
    <li>
      <NuxtLink class="link" to="/main?type=one">Main display v1</NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="/main?type=two">Main display v2</NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="/svg">Svg animations</NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="/simple">Simple</NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="/scroll">Scroll</NuxtLink>
    </li>
  </ul>

</template>

<style lang="sass">
@import "/const/color"

li::marker
  content: "🌝 "

li:nth-child(2n)::marker
  content: "🌚 "


</style>