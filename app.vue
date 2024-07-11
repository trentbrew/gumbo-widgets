<script setup>
  const nuxtApp = useNuxtApp()

  nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0)
  })
</script>

<template>
  <Html data-theme="light">
    <Head><Title>SPEAK MPLS WIDGETS</Title></Head>
    <div><NuxtLayout /></div>
  </Html>
</template>
