<script setup>
  defineEmits(['click'])

  const props = defineProps({
    expanded: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: null,
    },
  })

  const slot = ref(null)

  const state = reactive({
    contentHeight: 0,
    expanded: false,
  })

  const itemId = computed(() => `hidden-content-${props.title.toLowerCase().replace(/ /g, '-')}`)

  onMounted(() => {
    state.contentHeight = slot.value.clientHeight
    state.expanded = props.expanded
  })

  function toggle(event) {
    // todo: assess what might live inside these dropdowns
    if (event.target.tagName !== 'A' && event.target.tagName !== 'INPUT') {
      state.expanded = !state.expanded
    }
  }
</script>

<template>
  <li
    :id="itemId"
    role="menuitem"
    :aria-expanded="state.expanded.toString()"
    class="group flex flex-col bg-white rounded-lg shadow-sm p-1 duration-[300ms] shadow-black/10"
    :class="
      state.expanded
        ? 'z-10 scale-[1.028] active:scale-[0.98] !duration-[500ms] active:!shadow-sm hover:scale-[1.022] shadow-xl'
        : 'active:scale-[0.98] hover:scale-[0.992] hover:shadow-xs'
    "
  >
    <button
      @click="toggle"
      :aria-controls="itemId"
      class="text-left w-full rounded-lg p-4 flex justify-between items-center duration-[600ms] !cursor-pointer"
      :class="state.expanded ? 'bg-gray-200 hover:bg-gray-200' : 'hover:bg-gray-200/50'"
    >
      <span class="font-semibold text-gray-800">{{ props.title }}</span>
      <span class="transform duration-[500ms]" :class="state.expanded ? 'rotate-180' : ''">
        <Icon name="arrow_alt_down" />
      </span>
    </button>
    <div
      @click="toggle"
      class="duration-[500ms] overflow-hidden transition-height"
      :style="state.expanded ? `height: ${state.contentHeight}px; opacity: 1;` : 'height: 0px; opacity: 0;'"
    >
      <div ref="slot" class="p-4 text-gray-500">
        <slot />
      </div>
    </div>
  </li>
</template>

<style scoped>
  li {
    @apply border-b border-gray-200;
  }
  li:last-child {
    @apply border-b-0;
  }
</style>
