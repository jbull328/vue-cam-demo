<template>
  <div id="app">
    <CameraDisplay />
  </div>
</template>

<script>
import CameraDisplay from './components/CameraDisplay';

export default {
  name: 'app',
  components: {
    CameraDisplay
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
