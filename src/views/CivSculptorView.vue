<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue'
</script>

<template>
  <div class="fastapi-view">
    <ProjectPage
      title="civ-sculptor"
      content1="Civ-Sculptor is a hybrid Python/C++ civilization simulation engine, designed for experimentation, and analysis. The simulation runs core logic in C++ for high performance and low-level control, while exposing a Python API for scripting, logging, machine learning and data visualization integration."
      github_url="https://github.com/thefool309/civ-sculptor"
      content2-head="Who Works On This Project?"
      content2="This project is a FOSS project with a small growing development community. I am the maintainer of this repository and we are currently accepting contributions. For further information on contributing please check the github link below. I am still planning a lot of the systems, but the general idea is that the simulation core is run in c++ and the control of the library is done by python."
      content3-head="But What's The Point?"
      content3="The point is to build a simulation that can generate data to train, and later be piloted by, ML/RL algorithms. This is a research project just intended to see what we can create and nothing more. This software is mostly just a cool thing I'm doing to add to the world of computer science."
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
