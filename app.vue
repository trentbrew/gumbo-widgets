<script setup>
  const nuxtApp = useNuxtApp()

  nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0)
  })
</script>

<template>
  <Html data-theme="lofi">
    <Head><Title>SPEAK MPLS WIDGETS</Title></Head>
    <div class="!bg-transparent min-h-screen flex flex-col items-center w-full h-full">
      <NuxtLayout />
    </div>
  </Html>
</template>
