<template>
  <div id="app">
    <Intro />       
    <About />       
    <Projects />       
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'app',
  components: {
    Intro,
    About,
    Projects
  }
}
</script>
