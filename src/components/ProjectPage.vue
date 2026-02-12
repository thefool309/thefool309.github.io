<script setup lang="ts">
defineProps<{
  title: string
  content1: string
  content2?: string
  content2Head?: string
  content3?: string
  content3Head?: string
  image1?: string
  alt1?: string
  image2?: string
  alt2?: string
  image3?: string
  alt3?: string
  youtube_url?: string
  github_url?: string
}>()

import ImageLink from './ImageLink.vue'
</script>

<template>
  <div class="ProjectPage">
    <div class="title">
      <a :href="github_url" target="_blank" rel="noopener noreferrer" class="header-link"
        ><h1>{{ title }}</h1></a
      >
    </div>
    <div v-if="youtube_url" class="youtube-embed">
      <iframe
        width="560"
        height="315"
        :src="youtube_url"
        title="YouTube video player"
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        "
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div v-if="image1 && alt1" class="first-image">
      <img :src="image1" :alt="alt1" />
    </div>
    <div class="project-content" id="first-content">
      <p>{{ content1 }}</p>
    </div>
    <div v-if="image2 && alt2" class="second-image">
      <img :src="image2" :alt="alt2" />
    </div>
    <div v-if="content2 && content2Head" class="project-content" id="second-content">
      <h2>{{ content2Head }}</h2>
      <p>{{ content2 }}</p>
    </div>
    <div v-if="image3 && alt3" class="third-image">
      <img :src="image3" :alt="alt3" />
    </div>
    <div v-if="content3 && content3Head" class="project-content" id="third-content">
      <h2>{{ content3Head }}</h2>
      <p>{{ content3 }}</p>
    </div>
    <div class="github-link">
      <h2>GitHub Link</h2>
      <ImageLink src="/GitHub_Invertocat_White.png" width="150" height="150" :url="github_url" />
    </div>
  </div>
</template>

<style scoped>
.ProjectPage {
  width: 100%;
}

.title {
  margin: 1rem 0;
  text-align: center;
}

.project-content {
  width: 100%;
  margin: 1.25rem 0;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.25rem;
  margin: 1rem 0;
}

.header-link:hover {
  background-color: transparent;
}

.youtube-embed {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.youtube-embed iframe {
  width: 100%;
  height: 100%;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1rem auto;
}

@media (min-width: 768px) {
  p {
    font-size: 1.1rem;
  }
  .project-content {
    margin: 2rem 0;
  }
}
</style>
