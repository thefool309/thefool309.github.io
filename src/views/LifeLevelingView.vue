<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue'
</script>

<template>
  <div class="lifeleveling-view">
    <ProjectPage
      title="Life Leveling"
      content1="LifeLeveling is a gamified self-care and personal growth application focused on helping users build positive habits through progression systems and rewards. I maintain the project repository and contribute across the backend and infrastructure, designing systems for user tracking, progression, and scalability. I also handle DevOps responsibilities, including deployment workflows and environment configuration, to ensure the project remains reliable and maintainable as it evolves."
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .lifeleveling-view {
    min-height: 95vh;
    display: flex;
    align-items: center;
  }
  a {
    color: var(--color-hyperlink);
  }
}
</style>
