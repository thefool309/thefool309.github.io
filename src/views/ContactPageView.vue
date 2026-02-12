<script setup lang="ts">
import ImageLink from '@/components/ImageLink.vue'
</script>

<template>
  <div class="contact-container">
    <div class="contact-title">
      <h1>Contact</h1>
      <p>
        the email icon is a mailto link to my email, and the lock icon is a link to my public pgp
        key in case you wanted to encrypt the message
      </p>
    </div>
    <div class="contact-image-gall">
      <ImageLink
        src="/email.png"
        height="150"
        width="150"
        url="mailto:thefool309@gmail.com"
        alt="an incoming icon with an envelope and an arrow on the top of it"
      />
      <ImageLink
        src="/lock.png"
        url="https://keys.openpgp.org/search?q=thefool309@gmail.com"
        height="150"
        width="150"
        alt="A lock icon"
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

.contact-title p {
  font-size: 1.2rem;
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
