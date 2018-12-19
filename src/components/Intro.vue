<template>
	<div class="c-intro">
		<div class="c-intro__head">
			<a href="tel:+5216862101600" class="c-intro__head--link">+52 1 686 210 1600</a>
			<span>•</span>
			<a href="mailto:hey@huleos.com?subject=Hello%20huleos" class="c-intro__head--link">hey@huleos.com</a>
		</div>
	  <div class="o-container--md u-pt2">
	    <a href="/" class="c-intro__brand">huleos</a>
	    <h2 class="c-intro__title">Front-End Developer</h2>
	    <p class="c-intro__text">html + css + javascript</p>
	  </div>
	  <div class="c-profile-avatar">
			<a href="" class="c-profile-avatar--link">
				<img src="/assets/images/huleos.jpg" alt="" class="c-profile-avatar--img">
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>

// Intro
.c-intro {
  color: $white;
  background-color: #2B2A2A;
  text-align: center;
  
  &__head {
    background-image: linear-gradient(141deg, #00d0da 0%, #23d160 71%, #2ce28a 100%);
    text-align: center;
    &--link {
      color: $white;
      display: inline-block;
      padding: rem(10);
      &:hover {
        background-color: $white;
        color: #2ce28a;
      }
    }
  }

  &__brand {
    display: inline-block;
    font-size: rem(56);
    background-image: linear-gradient(141deg, #00d0da 0%, #23d160 71%, #2ce28a 100%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: 600;
    line-height: 1;
    margin-bottom: rem(10);
    transition: all 0.25s ease-out;
    &:hover {
      background-image: linear-gradient(-141deg, #00d0da 0%, #23d160 71%, #2ce28a 100%);
      color: #2ce28a;
     &:after {
      color: $white;
     }
    }
    &:after {
      display: table;
      flex-basis: 0;
      order: 1;
      position: relative;
      width: auto;
      margin: 0 auto 0;
      content: '• • • • • • • •';
      color: #5F5F5F;
      font-size: rem(15);
      transition: all 0.25s ease-out;
    }
  }

  &__title {
    font-size: rem(28);
    margin-bottom: 0;
    color: $white;
    font-weight: 200;
    line-height: 1;
    text-transform: uppercase;
    @include breakpoint(md) {
    	font-size: rem(42);
    }
  }

  &__text {
    font-size: rem(14);
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: rem(6);
    @include breakpoint(md) {
    	font-size: rem(18);
    	letter-spacing: rem(10);
    }
  }
  
}

// Profile Avatar
.c-profile-avatar {
  position: relative;
  background-color: $white;
  border: 5px solid $white;
  border-radius: 50%;
  height: rem(175);
  width: rem(175);
  margin: rem(20) auto rem(-87.5);
  overflow: hidden;
  box-shadow: 0 2px 8px 0 rgba($black, 0.25);
  transition: all 0.25s ease-out;
  &:hover {
    box-shadow: 0 4px 12px 0 rgba($black, 0.25);
    transform: scale(1.01);
  }

  &--link {
    display: block;
  }
}
</style>