<template>
  <section class="bg-[#0f1642] py-8 mt-20 md:mt-24 xl:mt-[7rem] xl:py-12">
    <div class="lg:max-w-[55rem] xl:max-w-[66rem] mx-auto px-4 py-6">
      <h2 class="section-headline">Video Guides</h2>

      <div class="mt-4 md:flex justify-start items-stretch xl:mt-6">
        <!-- buttons -->
        <div class="flex flex-col justify-between items-stretch rounded-t-[.625rem] md:rounded-t-none md:rounded-l-[.625rem] overflow-hidden md:w-[30%]">
          <div v-for="(item, i) in items" :key="i" class="w-full px-6 py-4 cursor-pointer md:py-6" :class="activeButtonIndex === i ? 'bg-[#2e9ed2]' : 'bg-[#0d2e5f]'" @click="selectVideo(i)">
            <h4 class="leading-tight md:text-lg xl:text-2xl">{{ item.title }}</h4>
            <p class="section-para leading-none mt-1 md:leading-normal md:mt-2">{{ item.details }}</p>
          </div>
        </div>

        <!-- video -->
        <div class="rounded-b-[.625rem] md:rounded-b-none md:rounded-r-[.625rem] overflow-hidden md:w-[70%]">
          <iframe class="w-full h-48 md:h-full" :src="items[activeButtonIndex].link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeButtonIndex: 0,
      items: [
        {
          title: 'How to buy',
          details: 'A short guide to get you started',
          link: 'https://www.youtube.com/embed/RM9gena1y7s',
        },
        {
          title: 'How to avoid scams',
          details: 'A short guide to get you started',
          link: 'https://www.youtube.com/embed/oX8-IXdABuc',
        },
        {
          title: 'How to buy',
          details: 'A short guide to get you started',
          link: 'https://www.youtube.com/embed/8dpkmUjJ8xU',
        },
      ],
    }
  },

  methods: {
    selectVideo(i) {
      this.activeButtonIndex = i
    },
  },
}
</script>

<style></style>
