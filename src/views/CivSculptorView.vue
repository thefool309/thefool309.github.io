<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue'
</script>

<template>
  <div class="fastapi-view">
    <ProjectPage title="civ-sculptor" content1="" />
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
