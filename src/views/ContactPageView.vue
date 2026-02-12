<script setup lang="ts">
import ImageLink from '@/components/ImageLink.vue'
</script>

<template>
  <div class="contact-container">
    <div class="contact-title">
      <h1>Email Me!</h1>
    </div>
    <div class="contact-image-gall">
      <ImageLink src="/email.png" height="150" width="150" url="mailto:thefool309@gmail.com" />
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
}

.contact-title h1 {
  font-size: 2rem;
  text-align: center;
  margin: 0;
}

.contact-image-gall {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}
</style>
