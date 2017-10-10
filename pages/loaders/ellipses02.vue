<template>
  <div class="cover">
    <div class="loading"></div>
    <div class="loading2"></div>
  </div>
</template>

<style scoped>
html, body, .cover{
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #FDA700
}

.loading {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.6);
  animation: anim1 4s infinite ease-in-out;
  border-radius: 50%;
  overflow: hidden;
  background-blend-mode: lighten;
}

.loading2 {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.6);
  animation: anim2 4s infinite ease-in-out;
  border-radius: 50%;
  overflow: hidden;
  background-blend-mode: lighten;
}

@keyframes anim1 {
  0% {
    /*opacity: 0.0;*/
    transform: translate(-20px, 0);
    z-index: 100;
  }

  25% {
    /*opacity: 1.0;*/
    transform: translate(80px, 0);
  }

  50% {
    /*opacity: 0.0;*/
    transform: translate(-20px, 0);
    z-index: 1;
  }

  75% {
    /*opacity: 1.0;*/
    transform: translate(80px, 0);
  }

  100% {
    /*opacity: 0.0;*/
    transform: translate(-20px, 0);
    z-index: 100;
  }
}

@keyframes anim2 {
  0% {
    /*opacity: 0.0;*/
    transform: translate(20px, 0);
    z-index: 1;
  }

  25% {
    /*opacity: 1.0;*/
    transform: translate(-80px, 0);
  }

  50% {
    /*opacity: 0.0;*/
    transform: translate(20px, 0);
    z-index: 100;
  }

  75% {
    /*opacity: 1.0;*/
    transform: translate(-80px, 0);
  }

  100% {
    /*opacity: 0.0;*/
    transform: translate(20px, 0);
    z-index: 1;
  }
}
</style>
