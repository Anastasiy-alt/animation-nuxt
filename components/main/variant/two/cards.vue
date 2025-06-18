<script setup>
onMounted(() => {
  const cards = document.querySelectorAll('.card')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cards.forEach(el => el.classList.add('anim'))
        observer.unobserve(entry.target)
      }
    });
  }, {
    root: null,
    threshold: 0.5,
  });
  observer.observe(document.querySelector('.card-container'));
})

</script>


<template>
  <section class="card-container">
    <div class="card">1</div>
    <div class="card">2</div>
    <div class="card">3</div>
    <div class="card">4</div>
    <div class="card">5</div>
    <div class="card">6</div>
    <div class="card">7</div>
    <div class="card">8</div>
  </section>
</template>

<style lang="sass" scoped>
@use "/const/color"

.card-container
  position: relative
  margin-top: -600px
  height: 1000px
  overflow: hidden

.card
  position: absolute
  top: 200px
  left: 0
  width: 300px
  height: 400px
  border-radius: 1rem
  background-color: color.$light-green
  transform: translateY(100vh)
.card.anim
  animation-name: anim-card
  animation-duration: 1s
  animation-fill-mode: forwards
.card:nth-child(2)
  left: 400px
  top: 0
  &.anim
    animation-delay: .5s

.card:nth-child(3)
  left: 800px
  top: 100px
  &.anim
    animation-delay: 1.2s

.card:nth-child(4)
  left: auto
  right: 350px
  top: 300px
  &.anim
    animation-delay: 1.5s

.card:nth-child(5)
  left: auto
  right: 0
  top: 200px
  &.anim
    animation-delay: 2.2s

.card:nth-child(6)
  left: 150px
  top: 420px
  &.anim
    animation-delay: 2.8s

.card:nth-child(7)
  left: 550px
  top: 550px
  &.anim
    animation-delay: 3.1s

.card:nth-child(8)
  left: auto
  right: 500px
  top: 600px
  &.anim
    animation-delay: 3.5s

.card:nth-child(3n)
  background-color: color.$white

.card:nth-child(3n + 1)
  background-color: color.$light-yellow
@keyframes anim-card
  0%
    transform: translateY(100vh)
  100%
    transform: translateY(0)
</style>