<template>
  <div class="c-about">
    <div class="o-container--md">
      <h1 class="c-about__title">Julio Cesar Montenegro</h1>
      <p class="c-about__text">Hey, I’m an independent <strong class="c-about__text--focus">Front-End Developer & UI Web Designer</strong> from <strong>Mexicali, Mexico</strong>. Autodidact and IPA beer lover.</p>
      <p class="c-about__text"><em>Some of my skills primarily include methodology BEMIT, Vue and Adonis</em>.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-about {
  background-color: $about-bg-color;
  padding: rem(108) rem(15) rem(48);
  font-size: rem(20);
  color: $about-text-color;
  text-align: center;

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