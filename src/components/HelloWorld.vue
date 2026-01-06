<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="pink">{{ msg }}</h1>
    <!-- here we are reusing the default "HelloWorld" File and changing the msg being passed in as well as the color-->
    <h3>Software Developer</h3>
  </div>
</template>

<style scoped>
.pink {
  color: var(--vt-c-pink, #ff69b4); /* Ensuring visibility */
}
h1 {
  font-weight: 500;
  font-size: 1.2rem; /* Reduced for top bar */
  margin: 0;
}
h3 {
  font-size: 0.8rem;
  margin: 0;
  color: var(--color-text-light);
}
.greetings {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
}
</style>
