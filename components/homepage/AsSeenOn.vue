<template>
  <section class="bg-[#0f1642] py-8 mt-20 md:mt-24 xl:mt-[7rem] xl:py-12">
    <div class="lg:max-w-[55rem] xl:max-w-[66rem] mx-auto px-4 py-6">
      <h2 class="section-headline">As Seen On</h2>

      <div class="mt-4 md:mt-6">
        <div class="grid grid-cols-3 gap-4 md:gap-x-8 lg:gap-x-12 lg:gap-y-6">
          <div v-for="(image, i) in images" :key="i">
            <img :src="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require('~/assets/images/binance.png'),
        require('~/assets/images/binance.png'),
        require('~/assets/images/binance.png'),
        require('~/assets/images/binance.png'),
        require('~/assets/images/binance.png'),
        require('~/assets/images/binance.png'),
        require('~/assets/images/binance.png'),
        require('~/assets/images/binance.png'),
        require('~/assets/images/binance.png'),
      ],
    }
  },
}
</script>

<style></style>
