<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue'
</script>

<template>
  <div class="smoking-is-bad-view">
    <ProjectPage
      title="Smoking is Bad, Mkay?"
      content1="smoking-is-bad is a data analysis and visualization project created to showcase my skills with Jupyter Notebooks and common Python data science libraries. The project involves cleaning, analyzing, and visualizing datasets to communicate insights clearly through well-structured notebooks. It emphasizes readable analysis, effective visual storytelling, and reproducible workflows. Below is two sets of violin plots of Systolic and Diastolic Blood Pressure by smoking status"
      github_url="https://github.com/thefool309/smoking-is-bad-mkay"
      image1="/smoking-is-bad4.png"
      alt1="a strip plot of systolic blood pressure by smoking category"
      content2-head="What These Plots Indicate"
      content2="These plots seem to indicate with smoking status and increased age both blood pressure metrics have a larger concentration of people above 150. This would possibly indicate that smoking status and age are two contributors to high blood pressure"
      image2="/smoking-is-bad2.png"
      alt2="a violin plot of systolic blood pressure by smoking status"
      content3-head="Skills Gained"
      content3="From this project I learned to visualize data quickly and efficiently with python libraries like numpy, seaborn, and matplotlib. In the classes I picked these skills up in (Data Visualization and Modeling + Machine Intelligence Systems) I also learned to handle various machine learning algorithms with the sklearn library."
      image3="/smoking-is-bad3.png"
      alt3="a violin plot of Diastolic Blood pressure by smoking status"
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
