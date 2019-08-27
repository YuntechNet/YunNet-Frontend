<template>
  <div id="app" class="container-fluid">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-weight: 600 !important;
  font-family: "Microsoft Yahei", Helvetica, Arial, sans-serif !important;
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
.frame-navigator {
  animation-name: navigator;
  animation-duration: 1s;
  animation-fill-mode: both;
  left: 0;
}
.head-padding {
  padding: 3%;
}
.display-hidden {
  visibility: hidden;
}
.display-visible {
  visibility: visible;
}
@media screen and (max-width: 600px) {
  .head-padding {
    padding: 0%;
  }
  .display-hidden {
    visibility: visible;
  }
  .display-visible {
    visibility: hidden;
  }
}

@keyframes inner-frame {
  from,
  25% {
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    filter: blur(3px);
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -o-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0;
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
@keyframes navigator {
  from,
  25% {
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    filter: blur(3px);
    -webkit-transform: scale(1);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  to {
    -webkit-filter: blur(0.4px);
    -moz-filter: blur(0.4px);
    -o-filter: blur(0.4px);
    filter: blur(0.4px);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
</style>
