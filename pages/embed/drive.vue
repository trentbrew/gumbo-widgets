<script setup>
  const googleDriveLink = ref('')
  const downloadLink = ref('')

  const state = reactive({
    ready: false,
    toast: {
      type: '',
      active: false,
    },
  })

  function toast(type) {
    if (state.toast.timeoutId) {
      clearTimeout(state.toast.timeoutId)
    }
    state.toast.active = true
    state.toast.type = type
    state.toast.timeoutId = setTimeout(() => {
      state.toast.active = false
      state.toast.timeoutId = null
    }, 5000)
  }

  const generateDownloadLink = () => {
    downloadLink.value = ''
    if (!googleDriveLink.value) {
      toast('warning')
      return
    }
    const fileIdMatch = googleDriveLink.value.match(/d\/([a-zA-Z0-9_-]+)/)
    if (!fileIdMatch) {
      toast('error')
      return
    }
    const fileId = fileIdMatch[1]
    downloadLink.value = `https://drive.google.com/uc?export=download&id=${fileId}`
    state.ready = true
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(downloadLink.value).then(() => {
      console.log('Copied to clipboard:', downloadLink.value)
      toast('success')
    })
  }

  function handleRefresh() {
    window.location.reload()
  }

  function handleUpdate(e) {
    state.ready = false
  }
</script>

<template>
  <main class="flex flex-col items-center justify-center min-h-screen bg-base-200 w-screen" data-theme="light">
    <div class="w-full max-w-[64vw] p-6 pb-3 rounded-lg shadow-xl bg-base-100" :class="downloadLink ? 'pt-4' : ''">
      <div class="space-y-0">
        <div class="space-y-2 duration-[500ms]">
          <div class="w-full flex justify-start">
            <Label class="flex gap-2 mb-2 items-center font-medium" htmlFor="googleDriveLink"
              ><Icon name="google_drive" />Enter Google Drive link</Label
            >
          </div>
          <div class="flex w-full gap-2">
            <input
              @keydown.enter="generateDownloadLink"
              autocomplete="off"
              id="googleDriveLink"
              v-model="googleDriveLink"
              placeholder="https://drive.google.com/file/d/14cLhFfCTAPWQfpSYE-nVwPROn90pQuip/view?usp=sharing"
              class="input w-full bg-base-300/75 duration-[500ms]"
              :class="downloadLink ? 'text-base-content/25 pointer-events-none' : 'text-base-content'"
            />
            <button
              data-tip="Generate another link"
              @click="downloadLink ? handleRefresh() : generateDownloadLink()"
              class="btn bg-black btn-neutral"
              :class="downloadLink ? 'tooltip tooltip-right !btn-outline' : ''"
            >
              <Icon v-show="!downloadLink" name="arrow_right" />
              <Icon v-show="downloadLink" name="refresh" class="scale-[0.9]" />
            </button>
          </div>
        </div>
        <div class="flex duration-300" :class="downloadLink ? 'space-y-2 gap-2' : 'space-y-2 gap-2'">
          <div
            class="w-full rounded-md px-2 text-muted-foreground bg-success/[0.24] border-[1.5px] border-success/75 text-success-content mb-3 my-2 flex justify-between items-center duration-[500ms]"
            :class="state.ready ? 'opacity-1 h-[50px] ' : 'opacity-0 h-[0] !m-0 !p-0'"
          >
            <div>
              <span class="font-medium mr-2 ml-3">Downloadable link:</span>
              <a
                :href="downloadLink"
                target="_blank"
                class="font-normal underline opacity-[0.6] hover:opacity-[0.75]"
                >{{ downloadLink }}</a
              >
            </div>
            <!-- <div class="flex justify-between items-center gap-0">

              <button
                @click="handleRefresh"
                class="btn btn-ghost border-[1.5px] tooltip tooltip-bottom hover:tooltip-open px-1"
                data-tip="Convert another link"
              >
                <Icon class="scale-[0.75]" name="refresh" />
              </button>
            </div> -->
          </div>
          <button
            v-if="downloadLink"
            @click="copyToClipboard"
            class="btn btn-neutral bg-success hover:bg-success/75 text-white border-success hover:border-success tooltip tooltip-right hover:tooltip-open"
            data-tip="Copy to clipboard"
          >
            <Icon class="scale-[0.9]" name="copy" />
          </button>
        </div>
      </div>
    </div>
    <!-- TOOLTIPS -->
    <div
      :class="state.toast.active ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-64'"
      class="toast w-full duration-[300ms]"
    >
      <div v-show="state.toast.type === 'error'" class="flex justify-start items-center alert alert-error">
        <Icon name="warning" />
        <span class="font-medium">Invalid Google Drive link.</span>
      </div>
      <div v-show="state.toast.type === 'warning'" class="flex justify-start items-center alert alert-warning">
        <Icon name="caution" />
        <span class="font-medium">Please enter a Google Drive link.</span>
      </div>
      <div v-show="state.toast.type === 'success'" class="flex justify-start items-center alert alert-success">
        <Icon name="check_alt" />
        <span class="font-medium">Link copied to clipboard.</span>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .flash {
    animation: flash 5s forwards;
  }

  @keyframes flash {
    0% {
      @apply bg-success/50;
    }
    100% {
      @apply bg-success/0;
    }
  }
</style>
