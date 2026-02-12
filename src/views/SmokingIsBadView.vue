<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue'
</script>

<template>
  <div class="smoking-is-bad-view">
    <ProjectPage
      title="Smoking is Bad, Mkay?"
      content1="smoking-is-bad is a data analysis and visualization project created to showcase my skills with Jupyter Notebooks and common Python data science libraries. The project involves cleaning, analyzing, and visualizing datasets to communicate insights clearly through well-structured notebooks. It emphasizes readable analysis, effective visual storytelling, and reproducible workflows."
      github_url="https://github.com/thefool309/smoking-is-bad-mkay"
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .smoking-is-bad-view {
    min-height: 95vh;
    display: flex;
    align-items: center;
  }
  a {
    color: var(--color-hyperlink);
  }
}
</style>
