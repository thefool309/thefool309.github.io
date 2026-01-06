<script setup lang="ts">
defineProps<{
  heading: string
  content: string
  source?: string
  previewImg?: string
  imageAlt?: string
}>()
</script>

<template>
  <div class="project-listing">
    <!-- Here we create a generic project listing component for the project landing page that takes in the content that needs to be customized. -->
    <div class="main-details-wrapper">
      <h2>
        {{ heading }}
      </h2>
      <!--checks for imageAlt, if no imageAlt is displayed we remove the image for accessibility-->
      <div v-if="previewImg && imageAlt" class="preview-image">
        <img :src="previewImg" :alt="imageAlt" />
      </div>

      <!-- here we have commented out this code because it will be used on each individual project page later-->
      <div v-if="source" class="youtube-embed">
        <iframe
          width="560"
          height="315"
          :src="source"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/base.css';

.project-listing {
  align-items: center;
  padding: 10px;
}

.main-details-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  margin-bottom: 10px;
}

h2 {
  width: 100%;
}

.preview-image {
  flex-basis: 30%; /* Image takes up 30% of the available width */
  flex-shrink: 0; /* Prevents the image container from shrinking too much */
}

img {
  border: 5px solid var(--color-background);
  border-radius: 8%;
  padding: 5px;
  height: auto;
  width: 100%;
  display: block;
}

@media (max-width: 768px) {
  .image-and-text-wrapper {
    flex-direction: column;
  }
}
</style>
