<!-- I really need to learn to leave comments inside my vue code -->
<script setup lang="ts">
import ProjectListing from '@/components/ProjectListing.vue'
</script>

<template>
  <div class="proj-landing-page">
    <div id="image">
      <img src="../assets/jester-2.png" height="400" width="400" />
    </div>
    <ul>
      <li>
        <RouterLink :to="{ name: 'civ-sculptor' }">
          <ProjectListing
            heading="civ-sculptor"
            content="Hybrid Python/C++ civilization simulation engine"
          />
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'pisage' }">
          <ProjectListing
            heading="Penguin_Sage"
            content="A UI wrapper for nmap made w/ Typescript and Vue.js"
          />
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'life-leveling' }"
          ><ProjectListing
            heading="LifeLeveling"
            content="A gamified self care experience for android"
        /></RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'smokingisbad' }">
          <ProjectListing
            heading="Smoking is bad mkay?"
            content="A data visualization exercise done in python, using health data related to smoking"
          ></ProjectListing>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#image img {
  display: block;
  width: 100%;
  max-width: 200px;
  max-height: 200px;
  justify-content: center;
  padding-bottom: 0%;
}

.proj-landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  min-height: 10vh;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
}

li {
  margin-bottom: 0.25rem;
}

@media (min-width: 1024px) {
  .proj-landing-page {
    min-height: 20vh;
  }
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
</style>
