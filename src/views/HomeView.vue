<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import Tonberry from '../assets/Sprite-TonberryWithWaterForSharing.png'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <section class="about">
      <section class="fool-text" id="fool-text">
        <div class="ImageGallery">
          <img
            :src="Tonberry"
            alt="a pixel art image of a Tonberry holding a glass of water"
            title="Drink water! >:3c"
            width="200"
            height="200"
          />
        </div>
        <h2>I'm thefool309. Welcome to my corner of the internet.</h2>
        <p>
          I've been fascinated by computers since I got my first laptop at 11, running Windows 7. I
          was always curious about how they worked, but my passion deepened when, at 20, a friend
          gave me his old Lenovo desktop. My friend and I took it apart, cleaned it, and put it back
          together, and that moment reignited the same excitement I felt as a kid exploring my first
          computer. As I explored different tech career paths, I became interested in cybersecurity,
          which led me to teach myself Python. From there everything clicked. I knew that as long as
          I was writing code, I’d be happy. That realization led me to pursue a Computer Science
          degree at Full Sail University. While I’m still figuring out my exact niche, my love for
          technology and software continues to grow. I have a strong interest in Linux (my desktop
          currently runs openSUSE Tumbleweed), and the inner workings of operating systems.
        </p>
        <p>
          I have experience in C++, Java, and Python. I also have added experience, to a lesser
          degree, in C#, Rust, MIPS ASM, x86-64 ASM, Typescript and HTML/CSS. Beyond tech, I’m
          passionate about tabletop role-playing games, open-world RPGs, painting miniatures, and
          playing stringed instruments.
        </p>
      </section>
    </section>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .fool-text {
    min-height: 30vh;
    min-width: 50vh;
    display: flex;
    align-items: baseline;
  }
}

@media (min-width: 420px) {
  h2 {
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
  }
}
.fool-text {
  min-height: 30vh;
  display: grid;
  align-items: center;
}
p {
  margin: auto;
  font-size: large;
  padding: 5px;
}
h2 {
  margin: auto;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  color: var(--color-heading);
}
.ImageGallery {
  display: flex;
  flex-wrap: wraps;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
}
</style>
