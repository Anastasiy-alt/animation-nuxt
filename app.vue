<script setup>
const router = useRouter();
const route = useRoute();

function goBack() {
  window.scrollTo({top: 0, behavior: 'smooth'});
  if (window?.history.state.back === null) {
    router.push('https://anastasiy-alt.github.io/animation-nuxt')
  } else {
    window?.history.back()
  }
}

const buttonIsVisible = ref(false)

const handleScroll = () => {
  if (window.scrollY > 300) {
    buttonIsVisible.value = true
  } else {
    buttonIsVisible.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <head>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link
        href="https://fonts.googleapis.com/css2?family=Electrolize&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Zen+Dots&display=swap"
        rel="stylesheet">
  </head>
  <div class="page">
    <div class="center"></div>
    <NuxtLink v-if="route.fullPath !== '/'" class="back-button custom-button"
              to="https://anastasiy-alt.github.io/animation-nuxt">Go back
    </NuxtLink>
    <NuxtPage/>
    <button :class="[{'top-button_visible': buttonIsVisible}]" class="top-button custom-button" @click="scrollToTop">
      Top!
    </button>
  </div>

</template>

<style lang="sass">
@import "/const/color"
*
  font-family: "Electrolize", sans-serif
  font-style: normal
  margin: 0
  padding: 0

h1, h2
  text-align: center
  margin: 50px auto
  color: $white

p
  color: $white

.page

  margin: 50px 100px
//.center
//  position: fixed
//  top: 50%
//  left: 50%
//  transform: translate(-50%, -50%)
//  width: 20px
//  height: 20px
//  background: yellow
//  z-index: 100
body
  background-color: #252423
  overflow-x: hidden

.custom-button:visited
  text-decoration: none !important
  color: black !important

.custom-button
  text-decoration: none !important
  color: black !important
  background: $white
  border: 5px solid $light-green
  border-radius: 100px
  padding: 10px 20px
  cursor: pointer
  transition: .35s all

.custom-button:hover
  background: white
  transform: scale(1.1)

.back-button
  position: fixed
  top: 50px
  left: 50px
  z-index: 100

.top-button
  bottom: 70px
  opacity: 0
  position: fixed
  right: 180px
  visibility: hidden
  z-index: 13

.top-button_visible
  opacity: 1
  visibility: visible

.link
  font-size: 24px
  color: $grey
  transition: .35s all

.link:hover
  color: $white

.link:visited
  color: $light-green
</style>
