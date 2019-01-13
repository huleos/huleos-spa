<template>
	<footer class="c-footer u-py3">
    <div class="o-container">
      <a href="/" class="c-footer__brand">huleos</a>
      <p class="c-footer__made">Handmade by me &copy; 2019</p>
      <div class="c-social">
        <a href="https://github.com/huleos" class="c-social__item github">Github</a>
        <a href="https://mx.linkedin.com/in/juliocesarmontenegro" class="c-social__item linkedin">Linkedin</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.c-footer {
  background-color: #1a1915;
  text-align: center;
  
   &__brand {
    font-size: rem(32);
    background-image: linear-gradient(141deg, #00d0da 0%, #23d160 71%, #2ce28a 100%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
     &:hover {
       background-image: linear-gradient(-141deg, #00d0da 0%, #23d160 71%, #2ce28a 100%);
     }
  }
  
  &__made {
    color: $gray-dark;
  }
  
}
</style>