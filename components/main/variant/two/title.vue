<script setup>
import {animate, onScroll, utils} from 'animejs';

onMounted(() => {
  utils.set('.square', {z: 100});
  const tarIcons = document.querySelector('.title_sub')
  const parallax = document.querySelectorAll('.img_parallax');
  parallax.forEach((par) => {
    par.addEventListener('mousemove', (e) => {
      const {clientX, clientY} = e;
      const rect = par.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      const dx = x - clientX;
      const dy = y - clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 50;

      const moveX = (dx / distance) * maxDistance;
      const moveY = (dy / distance) * maxDistance;
      par.style.transition = '.35s all'
      par.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    par.addEventListener('mouseleave', () => {
      par.style.transition = '1s all'
      par.style.transform = 'translate(0, 0)';
    });
    window.addEventListener('scroll', () => {
      par.style.transition = 'none'
    })
  })

  utils.$('.img').forEach((icon, idx) => {
    animate(icon, {
      y: `${utils.random(-250, 250, 20)}px`,
      x: `${utils.random(-250, 250, 20)}px`,
      opacity: 0,
      duration: 500,
      alternate: true,
      ease: 'inOutQuad',
      autoplay: onScroll({
        sync: 0.5,
        target: tarIcons,
        debug: false
      })
    });
  })
  animate('.title_anim', {
    y: '-20px',
    opacity: 0,
    duration: 1000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      enter: 'top+=500 top',
      leave: 'top-=0 bottom',
      debug: false
    })
  });

  animate('.title_sub', {
    y: '20px',
    opacity: 0,
    duration: 1000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      enter: 'top+=900 top',
      leave: 'top-=0 bottom',
      debug: false
    })
  });

  animate('.title_anim-sec_one', {
    x: '-1200px',
    duration: 1000,
    scale: '2',
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      enter: 'top+=500 top',
      leave: 'top-=0 bottom',
      debug: false
    })
  });

  animate('.title_anim-sec_two', {
    x: '1200px',
    scale: '2',
    duration: 1000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      enter: 'top+=500 top',
      leave: 'top-=0 bottom',
      debug: false
    })
  });
})

</script>

<template>
  <section class="container">
    <div class="title-block">
      <div class="title title_anim">awesome Journey Through Space</div>
      <div class="title-sub-block">
        <div class="title title_anim-sec_one">Beyond</div>

        <div class="title title_anim-sec_two">Insights</div>
      </div>
      <br>
      <div class="title_sub">hover icons</div>
    </div>
    <img alt="" class="img img_parallax img_comet" src="~/assets/main/cosmos/comet.png">
    <img alt="" class="img img_parallax img_alien" src="~/assets/main/cosmos/alien.png">
    <img alt="" class="img img_parallax img_planet" src="~/assets/main/cosmos/planet.png">
    <img alt="" class="img img_parallax img_moon" src="~/assets/main/cosmos/moon.png">
    <img alt="" class="img img_parallax img_nebula" src="~/assets/main/cosmos/nebula.png">
    <img alt="" class="img img_parallax img_asteroid" src="~/assets/main/cosmos/asteroid.png">
    <img alt="" class="img img_parallax img_dark-moon" src="~/assets/main/cosmos/dark-moon.png">
    <img alt="" class="img img_parallax img_stars" src="~/assets/main/cosmos/stars.png">
  </section>
</template>

<style lang="sass" scoped>
@use "/const/color"

.title-block
  z-index: 15

.page
  margin: 0 !important

.container
  position: relative
  width: 100%
  height: 100%
  overflow: hidden

.img
  position: fixed
  user-select: none
  -webkit-user-drag: none

.img_parallax
  padding: 50px

.title-block
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  text-transform: uppercase

.title-sub-block
  display: flex
  flex-direction: row
  justify-content: center
  gap: 10px

.title
  font-size: 50px
  margin: 0
  text-align: center
  color: color.$white
  font-weight: bold

.title_sub
  color: color.$grey
  font-size: 20px
  width: 100%
  text-align: center

.img_comet
  top: 15%
  right: 15%
  width: 100px
  height: 100px

.img_alien
  top: 70%
  left: 50%
  z-index: 10
  width: 120px
  height: 120px

.img_planet
  top: 40%
  right: 5%
  width: 150px
  height: 150px

.img_nebula
  top: 5%
  left: 20%
  width: 120px
  height: 120px

.img_moon
  top: 5%
  left: 50%
  width: 110px
  height: 110px

.img_asteroid
  bottom: 0
  left: 10%
  width: 130px
  height: 130px

.img_dark-moon
  bottom: 10%
  right: 15%
  width: 120px
  height: 120px

.img_stars
  bottom: 45%
  left: 5%
  width: 100px
  height: 100px
</style>