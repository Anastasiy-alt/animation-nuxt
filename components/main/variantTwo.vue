<script setup>
import {animate, createDraggable, createScope, onScroll, stagger, utils} from 'animejs';

onMounted(() => {
  utils.set('.square', {z: 100});

  createDraggable('.img_alien', {
    container: '.container',
    releaseContainerFriction: 0,
  });
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
      const maxDistance = 50; // максимальное расстояние

      const moveX = (dx / distance) * maxDistance;
      const moveY = (dy / distance) * maxDistance;
      par.style.transition = '.35s all'
      par.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    par.addEventListener('mouseleave', () => {
      par.style.transition = '1s all'
      par.style.transform = 'translate(0, 0)';
    });
  })

  utils.$('.img').forEach((icon, idx) => {
    animate(icon, {
      y: `${utils.random(-150, 150)}px`,
      x: `${utils.random(-150, 150)}px`,
      opacity: 0,
      duration: 500,
      alternate: true,
      ease: 'inOutQuad',
      autoplay: onScroll({
        sync: 0.5,
        enter: `top+=${idx * 100} top`,
        leave: `top+=${idx * 10} bottom`,
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
      enter: 'top+=700 top',
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

  // animate('.scroll-block__inner', {
  //   scale: 5,
  //   opacity: 1,
  //   duration: 1000,
  //   alternate: true,
  //   ease: 'inOutQuad',
  //   autoplay: onScroll({
  //     sync: 0.5,
  //     enter: 'top+=200 top',
  //     leave: 'top-=0 bottom',
  //     debug: true
  //   })
  // });

  createScope({
    mediaQueries: { landscape: '(orientation: horizontal)' },
    defaults: { ease: 'out(3)', duration: 500 },
  }).add((scope) => {

    let cardAnimation;

    if (scope.matches.landscape) {
      cardAnimation = animate('.scroll-block__inner', {
        y: {
          from: stagger(['20vh','-20vh'], {from: 'center'}),
        },
        x: ['0', stagger(['80%', '-80%'])],
        delay: stagger(0, { from: 'first' }),
      });
    } else {
      cardAnimation = animate('.scroll-block__inner', {
        y: ['100vh', stagger(['-80%', '80%'])],
        delay: stagger(100, { from: 'first' })
      });
    }

    onScroll({
      target: '.scroll-block',
      enter: 'top',
      leave: 'bottom',
      debug: true,
      sync: .5
    }).link(cardAnimation)

  });


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

  <section class="container">
    <div class="title-block">
      <div class="title title_anim">awesome Journey Through Space</div>
      <div class="title-sub-block">
        <div class="title title_anim-sec_one">Beyond</div>

        <div class="title title_anim-sec_two">Insights</div>
      </div>
      <br>
      <div class="title_sub">drag the alien, hover another</div>

    </div>

    <img alt="" class="img img_parallax img_comet" src="~/assets/main/cosmos/comet.png">
    <img alt="" class="img img_alien" src="~/assets/main/cosmos/alien.png">
    <img alt="" class="img img_parallax img_planet" src="~/assets/main/cosmos/planet.png">
    <img alt="" class="img img_parallax img_moon" src="~/assets/main/cosmos/moon.png">
    <img alt="" class="img img_parallax img_nebula" src="~/assets/main/cosmos/nebula.png">
    <img alt="" class="img img_parallax img_asteroid" src="~/assets/main/cosmos/asteroid.png">
    <img alt="" class="img img_parallax img_dark-moon" src="~/assets/main/cosmos/dark-moon.png">
    <img alt="" class="img img_parallax img_stars" src="~/assets/main/cosmos/stars.png">
  </section>
  <div class="scroll-block">

    <div class="scroll-block__inner">
      <img class="scroll-block__image" src="~/assets/main/photo.jpg" alt="">
    </div>
    <div class="scroll-block__inner">
      <img class="scroll-block__image" src="~/assets/main/photo.jpg" alt="">
    </div>
  </div>
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
  <section class="next"></section>
</template>

<style lang="sass" scoped>
.next
  height: 200vh
.scroll-block
  height: 200vh
  //position: fixed
  //top: 50%
  //left: 50%
  //transform-origin: center center
  //transform: translate(-50%, -50%)


.scroll-block__inner
  //opacity: 0
  width: 300px
  height: 200px
.scroll-block__image
  width: 100%
  height: 100%
  object-fit: cover
.page
  margin: 0 !important

.container
  position: relative
  //height: calc(100vh - 100px)
  width: 100%
  height: 300vh
  overflow: hidden

.img
  position: fixed
  user-select: none
  -webkit-user-drag: none

.img_parallax
  padding: 50px
//transition: 1.35s all
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
  color: #e6e6e6
  font-weight: bold

.title_sub
  color: #9b9797
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