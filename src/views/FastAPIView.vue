<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue'
</script>

<template>
  <div class="fastapi-view">
    <ProjectPage
      title="foolishFastAPI"
      content1="foolishFastAPI is a RESTful API built in Python using FastAPI, created as a learning project to understand and implement core backend concepts. Through this project, I gained hands-on experience designing API endpoints and implementing basic CRUD operations backed by a database. The focus was on learning proper request handling, data validation, and structuring a simple but functional backend service."
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .fastapi-view {
    min-height: 95vh;
    display: flex;
    align-items: center;
  }
  a {
    color: var(--color-hyperlink);
  }
}
</style>
