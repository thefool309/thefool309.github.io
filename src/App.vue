<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

console.log('Welcome stranger :3')
console.log(
  "You've wandered into the console. A place most people don't really go. I assume you're a developer...",
)
console.log('I hope you like what you see O///O')
console.log(
  'I spent some time on this one and learned a lot in the process \n If you have any feedback, my contact through email is thefool309@gmail.com',
)
</script>

<template>
  <div class="app-container">
    <header class="top-bar">
      <div class="wrapper">
        <!-- Logo and Name Section -->
        <div class="brand">
          <RouterLink :to="{ name: 'home' }"
            ><img alt="My logo" class="logo" src="@/assets/jester-boi.png" height="60" width="60"
          /></RouterLink>
          <RouterLink :to="{ name: 'home' }">
            <HelloWorld msg="thefool309" />
          </RouterLink>
        </div>

        <!-- Navigation Section -->
        <nav class="main-nav">
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
          <RouterLink :to="{ name: 'proj-landing-page' }">Projects</RouterLink>
          <a
            href="https://github.com/thefool309/thefool309.github.io"
            target="_blank"
            rel="noopener noreferrer"
            >Source</a
          >
        </nav>
      </div>
    </header>

    <main class="content">
      <RouterView />
    </main>

    <footer>
      <p>&copy; 2026 thefool309. All rights reserved.</p>
      <nav>
        <p>
          This
          <a
            href="https://github.com/thefool309/thefool309.github.io"
            target="_blank"
            rel="noopener noreferrer"
            >software</a
          >
          is licensed under the
          <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache v2.0 License</a>
        </p>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Takes full height of the screen */
  width: 100%;
}
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Pushes brand left and nav right */
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.content {
  flex: 1;

  width: 100%;
  margin: 80px auto 0;
  max-width: 1000px;
  padding: 0 1rem;
  display: block;
  text-align: center;
}

.brand {
  display: flex;
  align-items: center;
}

.brand img .logo {
  display: block;
}

.main-nav {
  font-size: 1rem;
}

.main-nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: var(--color-hyperlink);
  text-decoration: none;
}

.main-nav a:first-of-type {
  border: 0;
}

.main-nav a.router-link-exact-active {
  color: var(--color-text);
  font-weight: bold;
}

/* Ensure content doesn't hide behind the fixed bar */
.content {
  margin-top: 80px;
  min-height: calc(100vh - 150px);
}

footer {
  margin-top: auto;
  text-align: center;
  padding: 2rem;
  border-top: 1px solid var(--color-border);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.brand a {
  padding: 0;
}
.brand a:hover {
  /* Reset hover effect for the logo and header bar*/
  background-color: var(--color-background);
}
.brand img {
  padding-top: 10%;
}

@media (max-width: 400px) {
  p {
    max-width: 80%;
  }
}
</style>
