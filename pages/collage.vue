<script setup>
const imageUrl = "https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/9ipk2xbj9zmqc7t/black_minimalist_moodboard_photo_colllage_A8aRcCYxk3.png?token="
</script>

<template>
  <div class="collage-container">
    <div class="collage-scroll">
      <div v-for="i in 4" :key="i" class="collage-item">
        <img :src="imageUrl" alt="Collage image" class="hoverable">
      </div>
    </div>
  </div>
</template>

<style scoped>
.hoverable:hover {
  transform: scale(1.01);
}

.collage-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  border: solid white 0.8rem;
}

.collage-scroll {
  display: flex;
  flex-direction: column;
  animation: scroll 60s linear infinite;
}

.collage-item {
  margin-top: 0.8rem;
  width: 100%;
  flex-shrink: 0;
  transition: transform 300ms;
}

.collage-item img {
  width: 100%;
  height: auto;
  display: block;
}

@keyframes scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
</style>
