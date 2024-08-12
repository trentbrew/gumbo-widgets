<script setup>
  const props = defineProps({
    name: {
      type: String,
      default: '',
      requred: true,
    },
    size: {
      type: [Number, String],
      default: 24,
    },
  })

  const state = reactive({
    loading: true,
  })

  const svg = ref(null)

  const res = await fetch(
    `https://www.iconic.rest/api/icons/${props.name}?size=${props.size}`
  )

  res.json().then(data => {
    svg.value = data.svg
    setTimeout(() => {
      state.loading = false
    }, 300)
  })
</script>

<template>
  <div v-if="state.loading" :style="`width: ${props.size}px; height: ${props.size}px`" class="bg-transparent"></div>
  <div v-else style="transition: 300ms cubic-bezier(0.16, 1, 0.3, 1)" :style="`width: ${props.size}px`" :class="state.loading ? 'opacity-0 scale-[0.8]' : 'opacity-1 scale-1'">
    <div v-html="svg"></div>
  </div>
</template>

<style>
svg {
  @apply m-0 p-0;
}
</style>
