<script setup lang="ts">
import ImageLink from '@/components/ImageLink.vue'
</script>

<template>
  <div class="contact-container">
    <div class="contact-title">
      <h1>Click The Icon to Email Me!</h1>
    </div>
    <div class="contact-image-gall">
      <ImageLink
        src="/email.png"
        height="150"
        width="150"
        url="mailto:thefool309@gmail.com"
        alt="an incoming icon with an envelope and an arrow on the top of it"
      />
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
  flex-direction: row; /* we set this up to go in a row so that we
                          can add more icons and they'll apear side by side */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}
</style>
