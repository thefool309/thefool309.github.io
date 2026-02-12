<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue'
</script>

<template>
  <div class="lifeleveling-view">
    <ProjectPage
      title="Life Leveling"
      content1="LifeLeveling is a gamified self-care and personal growth application focused on helping users build positive habits through progression systems and rewards. I maintain the project repository and contribute across the backend and infrastructure, designing systems for user tracking, progression, and scalability. I also handle DevOps responsibilities, including deployment workflows and environment configuration, to ensure the project remains reliable and maintainable as it evolves."
      content2-head="Who Worked On This Project?"
      content2="Our frontend is handled by Elysia, and StephenC1993. The backend systems are mostly architectured and implemented by fdesouza1992. I handle DevOps and take a support role in the backend development. I am working with Stephen to flesh out a graphics system for this program."
      image1="/Life_Leveling_4.png"
      alt1="The life leveling logo"
      github_url="https://github.com/thefool309/lifeleveling"
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
