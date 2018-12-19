<template>
  <div id="app">
    <div class="o-container">
      <div class="o-row o-flex o-flex--center">

        <HelloWorld msg="Welcome to Your Vue.js App | Jelou"/>
        <Intro />
        
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Intro from './components/Intro.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Intro
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
