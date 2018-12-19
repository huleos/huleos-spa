<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="c-card">
      <h4 class="c-card__header">
        Featured
      </h4>
      <div class="c-card__content">
        <h4>Card title</h4>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="c-button c-button--primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.c-card {
  max-width: 20rem;
  background-color: $gray-dark;
}
</style>
