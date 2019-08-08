<template>
  <div id="app" class="container-fluid">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  position: relative;
}
.frame {
  animation-name: inner-frame;
  animation-duration: 1s;
  animation-fill-mode: both;
  left: 0;
}
@keyframes inner-frame {
  from,
  25% {
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    filter: blur(3px);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    opacity: 0;
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px);
    filter: blur(0px);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
