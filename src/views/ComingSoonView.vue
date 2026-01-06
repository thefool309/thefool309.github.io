<script setup lang="ts">
import Moogle from '../assets/Sprite-moogle-export-for-resumet.png'
</script>

<template>
  <div class="coming-soon">
    <h1>Coming soon...</h1>
    <img :src="Moogle" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .coming-soon {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .coming-soon img {
    width: 75%;
  }
}
@media (min-width: 720px) {
  .coming-soon img {
    margin-bottom: 10rem;
    width: 50%;
  }
}
@media (min-width: 420px) and (max-width: 1024px) {
  .coming-soon h1 {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
  .coming-soon img {
    place-content: center;
    margin-left: auto;
    margin-right: auto;
    width: 35%;
    margin-bottom: 1.8rem;
  }
}
.coming-soon img {
  display: block;
  flex-wrap: wraps;
  gap: 1rem;
  padding: 0.5rem;
  justify-content: center;
}
.coming-soon h1 {
  min-height: 10vh;
  display: flex;
  align-items: center;
}
</style>
