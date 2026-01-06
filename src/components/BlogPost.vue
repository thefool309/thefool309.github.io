<script setup lang="ts">
defineProps<{
  title?: string
  date?: string
  content?: string
}>()
</script>

<template>
  <div class="blog-post">
    <h2>{{ title }}</h2>
    <p class="date">{{ date }}</p>
    <div class="content" :v-html="content"></div>
  </div>
</template>

<style module>
.blog-post {
  margin-bottom: 20px;
}

.blog-post h2 {
  font-size: 24px;
  margin-bottom: 5px;
}

.blog-post .date {
  font-size: 14px;
  margin-bottom: 10px;
}

.blog-post .content {
  font-size: 16px;
  line-height: 1.6;
}
</style>
