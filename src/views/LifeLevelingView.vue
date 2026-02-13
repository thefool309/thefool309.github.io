<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue'
</script>

<template>
  <div class="lifeleveling-view">
    <ProjectPage
      title="Life Leveling"
      content1="LifeLeveling is a gamified self-care and personal growth application focused on helping users build positive habits through progression systems and rewards. This was my Capstone project of my Bachelor's Degree program I maintain the project repository and contribute across the backend and infrastructure, designing systems for user tracking, progression, and scalability. I also handle DevOps responsibilities, including deployment workflows and environment configuration, to ensure the project remains reliable and maintainable as it evolves."
      content2-head="Who Works On This Project?"
      content2="Our frontend is handled by Elysia, and StephenC1993. The backend systems are mostly architectured and implemented by fdesouza1992. This is an Open Source project and contributions are welcome. I handle DevOps and take a support role in the backend development. I built services to handle notifications, and our coins management system, alongside writing some of the firebase functionality. I am working with Stephen to flesh out a graphics system for this application."
      content3="I will be working on a graphics system with Stephen. I plan to use JNI and C++ OpenGL or maybe Vulkan to handle rendering the avatar on screen. Our goal is to make the avatar customizable, so this may turn into a rather daunting task, and I don't know if things will keep rolling at the pace they did during our final project."
      content3-head="What Will I Be Working On?"
      image1="/Life_Leveling_4.png"
      alt1="The life leveling logo"
      image2="/lifelevelinginaction1.png"
      alt2="A screenshot of the lifeleveling avatar screen"
      github_url="https://github.com/thefool309/lifeleveling"
      image3="/lifelevelinginaction2.png"
      alt3="a screenshot of the life leveling daily reminders screen"
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

.lifeleveling-view img {
  max-width: 40%;
}
</style>
