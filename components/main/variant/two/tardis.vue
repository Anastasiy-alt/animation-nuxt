<script setup>
import {animate, onScroll} from "animejs";

onMounted(() => {
  animate('.scroll-block', {
    width: '100%',
    opacity: 1,
    duration: 1000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      enter: 'top-=10% top',
      leave: 'top-=600 top',
      debug: false
    })
  });

  animate('.inner__title-block', {
    // y: '-100px',
    opacity: 1,
    duration: 1000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      enter: 'top-=300 top',
      leave: 'top-=500 top',
      debug: false
    })
  });

  animate('.inner__info-block', {
    height: '400px',
    opacity: 1,
    duration: 1000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      enter: 'top-=600 top',
      leave: 'top-=800 top',
      debug: false
    })
  });
  animate('.inner__img-block', {
    opacity: 1,
    duration: 1000,
    height: '400px',
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      enter: 'top-=900 top',
      leave: 'top-=1100 top',
      debug: false
    })
  });
  animate('.inner__img_second', {
    duration: 1000,
    x: '-300px',
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      enter: 'top-=1800 top',
      leave: 'top-=2200 top',
      debug: false
    })
  });
})
</script>

<template>
  <section class="scroll-block">
    <div class="scroll-block__inner">
      <div class="scroll-block__inner-content inner">
        <div class="inner__title-block">
          <p class="inner__title">The TARDIS</p>
          <p class="inner__subtitle">Vworp!</p>
        </div>
        <div class="inner__info-block">
          <p class="inner__info">The TARDIS is the Doctor's ship, their home and their friend. It has been the one
            constant through all their lives; an impossible blue box, bigger on the inside than the outside, not
            necessarily taking them where they want to go, but very often where they need to be. It can reach any time
            or place, and with it the Doctor has shown the universe to their many, many friends.
            <br><br>
            ‘TARDIS’ stands for ‘Time and Relative Dimension in Space’ – an acronym coined by Susan, the Doctor’s
            granddaughter. A Type 40 capsule created by the Time Lords, the TARDIS is the Doctor’s incredible ship for
            travelling in time and space. The First Doctor actually stole the TARDIS, using it to run away and embark on
            adventures across the universe. Or, perhaps, was it the TARDIS that stole him?
          </p>
          <div class="inner__img-block">
            <img alt="" class="inner__img" src="~/assets/main/tardis.jpg">
            <img alt="" class="inner__img inner__img_second" src="~/assets/main/tardis-inside.jpg">
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@use "/const/color"

.inner__title-block
  opacity: 0

.inner__info-block
  height: 0
  opacity: 0

.inner__title-block
  display: flex
  flex-direction: column
  gap: 10px
  border-bottom: 2px solid color.$grey

.inner__title
  white-space: nowrap
  font-size: 28px
  color: black

.inner__subtitle
  font-size: 24px
  color: black

.inner__info
  font-size: 24px
  color: black
  height: 100%
  overflow: hidden

.inner__info-block
  display: flex
  gap: 50px
  flex-direction: row

.inner__img
  position: absolute
  top: 0
  right: 0
  width: 100%
  height: 100%
  object-fit: cover
  object-position: center

.inner__img_second
  right: -300px

.inner__img-block
  position: relative
  opacity: 0
  overflow: hidden
  width: 300px
  min-width: 300px
  height: 1px
  border-radius: 20px

.scroll-block
  opacity: 0
  height: 450vh
  width: 0
  margin: 0 auto

.scroll-block__inner
  position: sticky
  top: 0
  display: flex
  justify-content: center
  align-items: center
  width: 60%
  margin: 0 auto
  height: 100vh


.scroll-block__inner-content
  border-radius: 50px
  width: 100%
  height: fit-content
  max-height: 80vh
  background: color.$white
  outline: 5px solid color.$grey
  padding: 30px
  box-sizing: border-box
  display: flex
  flex-direction: column
  gap: 30px

.scroll-block__image
  width: 100%
  height: 100%
  object-fit: cover

</style>