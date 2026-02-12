<template>
  <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer" class="link-wrap"
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
    default: null,
  },
  height: {
    type: [String, Number],
    default: null,
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
  background-color: transparent;
}

.link-wrap:hover {
  background-color: transparent;
}

.base-image {
  display: block;
  max-width: 100%;
  transition: transform 0.2s ease; /* smooth hover effect */
}

.link-wrap:hover .base-image {
  transform: scale(1.2) rotate(-5deg) translateY(-5px);
  background-color: transparent;
}
</style>
