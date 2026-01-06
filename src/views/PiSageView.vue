<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue'
</script>

<template>
  <div class="pisage-view">
    <ProjectPage
      title="pi_Sage"
      content1="pi_sage is a full-stack web application developed using TypeScript and Vue.js. I maintain the repository and work across both frontend and backend development, building reactive user interfaces and integrating them with backend logic. The project focuses on clean architecture, type safety, and scalable data flow, with an emphasis on maintainability and long-term growth. The project is dockerized make it perfect for self hosting. The idea was to deploy it on a headless raspberry_pi, in conjuction with other tools that are in development."
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .pisage-view {
    min-height: 95vh;
    display: flex;
    align-items: center;
  }
  a {
    color: var(--color-hyperlink);
  }
}
</style>
