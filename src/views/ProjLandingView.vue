<!-- I really need to learn to leave comments inside my vue code -->
<script setup lang="ts">
import ProjectListing from '@/components/ProjectListing.vue'
</script>

<template>
  <div class="proj-landing-page">
    <div class="proj-landing-page" id="image">
      <img src="../assets/jester-boi.png" height="300" width="300" />
    </div>
    <ul>
      <RouterLink :to="{ name: 'life-leveling' }"
        ><ProjectListing
          heading="LifeLeveling"
          content="A gamified self care experience for android"
      /></RouterLink>
      <RouterLink :to="{ name: 'pisage' }">
        <ProjectListing
          heading="pi_Sage"
          content="A UI wrapper for nmap made w/ Typescript and Vue.js"
        />
      </RouterLink>
      <RouterLink :to="{ name: 'fastapi' }">
        <ProjectListing
          heading="foolishFastAPI"
          content="an example of a backend REST API made in python"
        />
      </RouterLink>
      <RouterLink :to="{ name: 'smokingisbad' }">
        <ProjectListing
          heading="Smoking is bad mkay?"
          content="A data visualization exercise done in python, using health data related to smoking"
        ></ProjectListing>
      </RouterLink>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
}

.proj-landing-page a {
  display: block;
  padding: 0.3rem;
  border-radius: 8px;
  transition:
    background-color 0.25s,
    transform 0.2s;
  text-decoration: none;
}

.proj-landing-page a:hover {
  background-color: var(--color-border-hover, rgba(255, 255, 255, 0.08));
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.proj-landing-page a:active {
  transform: translateY(0);
  box-shadow: none;
}

img {
  align-items: center;
}
@media (min-width: 1024px) {
  .proj-landing-page {
    min-height: 20vh;
    display: block;
    align-items: center;
  }
}
@media (max-width: 1024px) {
  .proj-landing-page {
    min-height: 10vh;
    display: block;
    align-items: center;
  }
}
</style>
