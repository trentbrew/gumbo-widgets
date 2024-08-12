<script setup>
  const emit = defineEmits(['click'])

  const props = defineProps({
    nested: {
      type: Boolean,
      default: false,
    },
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
    console.log(state.contentHeight)
    state.expanded = props.expanded || props['data-child']
  })

  function toggle(event) {
    console.log('event', event)
    const isChild = event.target.parentElement?.dataset?.child === 'true'
    console.log('event.target.parentElement', event.target.parentElement)
    console.log('isChild', isChild)
    // 1. check if the clicked element is a link
    if (event.target.tagName === 'A' || event.target.closest('a')) {
      return // don't toggle the accordion if a link was clicked
    }
    // 2. check if the clicked element is inside a nested accordion or is a button/input
    const isNestedAccordion = event.target.closest('.nested-accordion')
    const clickedElementTag = event.target.tagName
    if (['BUTTON', 'INPUT'].includes(clickedElementTag) || isNestedAccordion) {
      event.stopPropagation() // prevent the event from bubbling up to the parent
      return
    }
    // 3. toggle the accordion's expanded state
    state.expanded = !state.expanded
  }

  watchEffect(() => {
    if (state.expanded === true) {
      console.log('state.expanded', state.expanded, props.title)
    }
  })
</script>

<template>
  <li
    :id="itemId"
    role="menuitem"
    :aria-expanded="state.expanded"
    class="group flex flex-col bg-white rounded-lg text-base-content shadow-sm p-1 duration-[420ms] shadow-black/[0.12] min-w-[400px]"
    :class="`${
      state.expanded
        ? 'z-10 !scale-[1.036] active:!scale-[1] !duration-[500ms] active:!shadow-sm !shadow-xl brightness-100 mb-0 mt-0 active:!brightness-[0.9]'
        : 'active:scale-[0.95] active:!brightness-[0.87] hover:scale-[0.99] hover:shadow-xs brightness-[0.95] saturate-[1] hover:brightness-[0.9]'
    } ${props.nested ? 'bg-base-content' : ''} ${state.expanded && props.nested ? 'mt-3' : ''} ${
      props.nested ? '' : 'hover:scale-[0.98]'
    }`"
  >
    <div
      @click="toggle"
      :aria-controls="itemId"
      class="text-left w-full rounded-lg p-4 flex justify-between items-center duration-[400ms] !cursor-pointer"
      :class="
        props.nested
          ? 'bg-base-content/75 text-[#F0E4C9] hover:text-[#F0E4C9]'
          : state.expanded
          ? 'bg-[#F0E4C9]/0 hover:bg-[#F0E4C9]/0 active:bg-[#F0E4C9]/0'
          : 'hover:bg-[#F0E4C9]/0 active:bg-[#F0E4C9]/0'
      "
    >
      <span
        class="font-semibold text-lg transition duration-[600ms]"
        :class="state.expanded && !props.nested ? 'translate-y-[12px]' : 'translate-y-[0px]'"
        >{{ props.title }}</span
      >
      <span
        class="duration-[600ms] ease-in-out"
        :class="state.expanded ? 'rotate-180' : props.nested ? 'mt-[6px]' : ''"
      >
        <Icon name="arrow_alt_down" />
      </span>
    </div>
    <div
      class="duration-[500ms] overflow-hidden transition-height"
      :style="state.expanded ? `height: ${state.contentHeight}px; opacity: 1;` : 'height: 0px; opacity: 0;'"
    >
      <div ref="slot" class="p-4 !pt-0 text-gray-500 text-sm">
        <slot />
      </div>
    </div>
  </li>
</template>

<style scoped>
  li {
    @apply border-b border-base-200;
  }
  li:last-child {
    @apply border-b-0;
  }
</style>
