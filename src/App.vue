<template>
  <div id="app">
    <Intro />       
    <About />       
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    Intro,
    About
  }
}
</script>
