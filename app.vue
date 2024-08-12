<script setup>
  const nuxtApp = useNuxtApp()

  nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0)
  })
</script>

<template>
  <Html data-theme="light">
    <Head><Title>SPEAK MPLS WIDGETS</Title></Head>
    <div class="bg-gray-300 min-h-screen flex flex-col justify-center items-center w-full h-full">
      <!-- TODO: remove the fullscreen styling for embed -->
      <NuxtLayout />
    </div>
  </Html>
</template>
