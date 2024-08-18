<script setup>
  const googleDriveLink = ref('')
  const downloadLink = ref('')

  const state = reactive({
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
</script>

<template>
  <main class="flex flex-col items-center justify-center min-h-screen bg-base-200 w-screen" data-theme="light">
    <div class="w-full max-w-[64vw] p-6 pb-3 rounded-lg shadow-xl bg-base-100" :class="downloadLink ? 'pt-4' : ''">
      <div class="space-y-0">
        <div class="space-y-2" :class="downloadLink ? 'opacity-0 h-0 !p-0 pointer-events-none' : 'opacity-1'">
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
              class="input w-full bg-base-300/75"
            />
            <button @click="generateDownloadLink" class="btn bg-black btn-neutral border-none">
              <Icon name="arrow_right" />
            </button>
          </div>
        </div>
        <div class="space-y-2">
          <div
            :class="downloadLink ? 'opacty-1' : 'opacity-0 h-0 pointer-events-none p-0'"
            class="w-full rounded-md px-4 text-muted-foreground bg-success/[0] text-success-content mb-3 my-2 flex justify-between items-center duration-[200ms]"
          >
            <div>
              <span class="font-medium mr-2 ml-3">Downloadable link:</span>
              <a :href="downloadLink" target="_blank" class="font-normal underline opacity-50 hover:opacity-[0.75]">{{
                downloadLink
              }}</a>
            </div>
            <div class="flex justify-between items-center gap-1">
              <button
                @click="copyToClipboard"
                class="btn btn-ghost border-[1.5px] tooltip hover:tooltip-open px-2"
                data-tip="Copy to clipboard"
              >
                <Icon class="scale-[1]" name="copy" />
              </button>
              <button
                @click="handleRefresh"
                class="btn btn-ghost border-[1.5px] tooltip hover:tooltip-open px-2"
                data-tip="Convert another link"
              >
                <Icon class="scale-[1]" name="refresh" />
              </button>
            </div>
          </div>
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
        <Icon name="clipboard" />
        <span class="font-medium">Download link copied to clipboard.</span>
      </div>
    </div>
  </main>
</template>
