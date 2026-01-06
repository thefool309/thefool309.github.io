<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue'
</script>

<template>
  <div class="project-view">
    <ProjectPage
      title="no"
      content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis, erat id dignissim vestibulum, ante neque auctor turpis, nec aliquet ipsum sapien quis libero. Maecenas sed elit odio. Suspendisse ut malesuada ex. Sed eget diam nisi. Praesent sodales sagittis sodales. Curabitur tincidunt purus sed libero aliquam ullamcorper. Praesent id lacus ac ligula dignissim rhoncus vel non nulla. Maecenas eu dui pretium, molestie felis pellentesque, consequat lacus. Donec pharetra congue risus sed convallis. Suspendisse in eleifend turpis, at congue lorem. Mauris aliquam ullamcorper ultricies. Mauris mattis semper risus. Nulla a interdum nunc. Etiam molestie nunc vitae nisi fermentum pharetra. Aenean dictum dui velit, in pharetra quam efficitur at."
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .project-view {
    min-height: 95vh;
    display: flex;
    align-items: center;
  }
  a {
    color: var(--color-hyperlink);
  }
}
</style>
