<template>
  <div id="app">
    <Intro />       
    <About />       
    <Projects />
    <Contact />
    <IsFooter />
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Intro,
    About,
    Projects,
    Contact,
    IsFooter: Footer
  }
}
</script>
