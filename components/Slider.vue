<script setup>
  const images = [
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/wl2106knnzfrgw3/yellow_L4zmemJuSJ.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/wl2106knnzfrgw3/red_1qMp7l7mNm.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/wl2106knnzfrgw3/storylab3_GFKNQV1yJo.png?token=',
    'https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/wl2106knnzfrgw3/blue_Q3mlRddrjg.png?token=',
  ]

  const state = reactive({
    currentSlide: 'engage',
    slides: ['engage', 'teach', 'create', 'amplify'],
  })

  const handleSlide = key => {
    state.currentSlide = key
  }

  const currentIndex = computed(() => state.slides.indexOf(state.currentSlide))
</script>

<template>
  <div
    class="flex flex-col md:flex-row gap-4 md:gap-12 items-center bg-white p-0 md:p-0 px-4 md:px-16 rounded-xl overflow-hidden"
  >
    <div class="p-4 md:p-6">
      <div class="mb-6 md:mb-10">
        <h2 class="text-3xl md:text-5xl font-bold">
          <span class="italic font-thin mr-2 md:mr-3">OUR</span>
          <span class="italic font-bold">MISSION</span>
        </h2>
        <p class="mt-2 md:mt-4 mb-6 md:mb-12">
          We are reimagining the future of media by activating community
          connections and creative opportunities to amplify the voices of our
          neighbors.
        </p>
      </div>
      <div
        v-for="(key, index) in state.slides"
        :key="key"
        :class="{
          'bg-base-content/25 hover:!bg-base-content/25':
            key === state.currentSlide,
        }"
        class="flex justify-between items-center p-4 md:p-6 border-t border-dotted border-base-content/25 hover:bg-base-200 transition-all cursor-pointer rounded-lg"
        @click="handleSlide(key)"
      >
        <span class="text-base md:text-lg font-medium">{{
          key.toUpperCase()
        }}</span>
        <span class="text-xs md:text-sm font-medium">{{
          String(index + 1).padStart(2, '0')
        }}</span>
      </div>
    </div>
    <div
      class="relative overflow-hidden w-full max-w-full md:max-w-[900px] rounded-lg"
    >
      <div
        class="flex transition-transform duration-1000 ease-in-out w-full md:max-w-[900px] bg-blue-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(key, index) in state.slides"
          :key="key"
          class="w-full md:aspect-square flex-shrink-0 rounded-lg relative"
        >
          <img
            :src="images[index]"
            alt="Slider Image"
            class="rounded-md w-full h-full object-cover brightness-75 contrast-75"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 duration-[5s] slider-text transition-transform ease-out"
          >
            <h2
              class="text-3xl md:text-5xl font-bold mb-3 md:mb-5 duration-[2s]"
            >
              <span class="italic" v-if="key === 'engage'"
                ><b>ENGAGE</b> <span class="font-thin">WITH US</span></span
              >
              <span class="italic" v-else-if="key === 'teach'"
                ><b>TEACH</b> <span class="font-thin">WITH US</span></span
              >
              <span class="italic" v-else-if="key === 'create'"
                ><b>CREATE</b> <span class="font-thin">WITH US</span></span
              >
              <span class="italic" v-else-if="key === 'amplify'"
                ><b>AMPLIFY</b> <span class="font-thin">YOUR VOICE</span></span
              >
            </h2>
            <p class="text-base max-w-full md:max-w-[67%]">
              <span v-if="key === 'engage'">
                Our programming is powered by community collaborations and
                creative exploration. At SPEAK MPLS, we bring you community
                events, pop-up media labs, crew opportunities, partnership and
                sponsorship pathways and interactive experiences to get to know
                each other. Check out what we can do when we dream together.
              </span>
              <span v-else-if="key === 'teach'">
                Take a class, teach a skill, and expand your knowledge. No
                matter where you are in your creative journey, tap into the
                opportunities and learn with us.
              </span>
              <span v-else-if="key === 'create'">
                Join us in bringing a community dream space into existence. Rent
                equipment, book a studio and browse the tools to bring your
                creative vision to life! The possibilities are as limitless as
                our imaginations.
              </span>
              <span v-else-if="key === 'amplify'">
                We're turning up the volume on creative media made by viewers
                like you! Watch unique stories from your neighbors on SPEAK MPLS
                TV and stream content online 24/7. Want to start your creative
                journey with us? Explore our membership tiers and activate your
                member journey today!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
