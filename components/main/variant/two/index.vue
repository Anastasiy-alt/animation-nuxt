<script setup>
import {animate, onScroll, utils} from 'animejs';

onMounted(() => {
  utils.set('.square', {z: 100});
  const tarIcons = document.querySelector('.title_sub')

  // createDraggable('.img_alien', {
  //   container: '.container',
  //   releaseContainerFriction: 0,
  // });
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
        // enter: `top-=0 top`,
        // leave: `top+=0 bottom`,
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
  animate('.scroll-block', {
    width: '100%',
    opacity: 1,
    duration: 1000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      sync: 0.5,
      enter: 'top-=100 top',
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
    // y: '-100px',
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
      enter: 'top-=2000 top',
      leave: 'top-=2200 top',
      debug: false
    })
  });

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
  <div class="scroll-block">
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
  </div>
  <div class="target"></div>
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
  <MainVariantTwoRound />
  <NuxtLink target="_blank" class="link" to="https://telescope.fyi/">Reference</NuxtLink>
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

.next
  height: 200vh

.scroll-block
  opacity: 0
  height: 500vh
  width: 0
  margin: 0 auto

.title-block
  z-index: 15

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