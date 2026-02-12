<template>
  <a v-if="url" :href="url" class="link-wrap"
    ><img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :class="['base-image', imgClass]"
      loading="lazy"
  /></a>

  <img
    v-else
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :class="['base-image', imgClass]"
    loading="lazy"
  />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: '150',
  },
  height: {
    type: [String, Number],
    default: '150',
  },
  imgClass: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.link-wrap {
  display: inline-block;
  overflow: hidden;
  background-color: transparent;
}

.link-wrap:hover {
  background-color: transparent;
}

.base-image {
  display: block;
  max-width: 100%;
  aspect-ratio: 1 / 1; /* ensures height scales with width */
  object-fit: cover; /* fill container cropping if necessary */

  border-radius: 8px; /* rounded corners */
  transition: transform 0.2s ease; /* smooth hover effect */
}

.base-image:hover {
  transform: scale(1.2) rotate(-5deg) translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.35);
  background: transparent;
}
</style>
