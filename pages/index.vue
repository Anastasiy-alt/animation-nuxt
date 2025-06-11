<script setup>

</script>

<template>
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