<template>
  <div class="o-container">
    <div class="c-about">
      <div class="o-container--md">
        <h1 class="c-about__title">Julio Cesar Montenegro</h1>
        <p class="c-about__text">Hey, I’m an independent <strong class="c-about__text--focus">Front-End Developer & UI Web Designer</strong> from <strong>Mexicali, Mexico</strong>. Autodidact and IPA beer lover.</p>
        <p class="c-about__text"><em>Some of my skills primarily include methodology BEMIT, Vue and Adonis</em>.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-about {
  // background-color: $about-bg-color;
  background-image: linear-gradient(141deg, #00d0da 0%, #23d160 71%, #2ce28a 100%);
  padding: rem(108) rem(15) rem(48);
  font-size: rem(20);
  color: $about-text-color;
  text-align: center;
  border-radius: $global-radius;
  box-shadow: rem(-15) 0 rem(45) $black;

  &__title {
    font-size: rem(28);
    color: $about-text-color;
    @include breakpoint(md) {
      font-size: rem(36);
    }
  }

  &__text {
    &--focus {
      border-bottom: 2px dashed $about-text-color;
      font-weight: bold;
    }
  }
  
}
</style>