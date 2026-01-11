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
  url?: string
}>()
</script>

<template>
  <div class="ProjectPage">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div v-if="url" class="youtube-embed">
      <iframe
        width="560"
        height="315"
        :src="url"
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
  </div>
</template>

<style scoped>
.ProjectPage {
  width: 100%;
}

.title,
.project-content,
.youtube-embed,
.first-image,
.second-image,
.third-image {
  display: flex;
  justify-content: center;
  text-align: center;
}

.title {
  margin-bottom: 2vh;
}
.project-content,
.youtube-embed {
  margin-bottom: 5vh;
}

.project-content {
  flex-direction: column;
}

p {
  margin: auto;
  font-size: large;
  padding: 5px;
}
h1 {
  margin: auto;
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  color: var(--color-heading);
}
h2 {
  margin: auto;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  color: var(--color-heading);
}
</style>
