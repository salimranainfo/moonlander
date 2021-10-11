<template>
  <section class="bg-[#0f1642] relative">
    <div class="lg:max-w-[55rem] xl:max-w-[66rem] mx-auto px-4 pb-16 lg:pb-20 z-[1] relative">
      <div class="pt-8 md:pt-10 lg:pt-16 xl:pt-24">
        <!-- title -->
        <div class="">
          <h2 class="section-headline">Transparency Details</h2>
          <p class="section-para text-justify mt-2">We are mining on our team wallet for additional funds for marketing and development additional to the (?)% development fee in the token.</p>
        </div>

        <!-- Details -->
        <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <!-- 1 -->
          <div class="px-8 py-6 rounded-md w-full relative overflow-hidden" style="background: linear-gradient(90deg, rgba(3, 124, 189, 1) 0%, rgba(53, 157, 205, 1) 100%)">
            <!-- text -->
            <div class="z-[1] relative h-full flex flex-col justify-between">
              <h4 class="title">Verifiable Team KYC</h4>
              <button class="button">Verify</button>
            </div>

            <!-- bg Image -->
            <div class="absolute left-0 bottom-0 z-0 transform translate-x-[-50%] translate-y-[50%]">
              <img src="~/assets/images/sphere-gold.png" alt="" class="w-40" />
            </div>
          </div>

          <!-- 2 -->
          <div class="px-8 py-6 rounded-md w-full relative overflow-hidden" style="background: linear-gradient(90deg, rgba(3, 124, 189, 1) 0%, rgba(53, 157, 205, 1) 100%)">
            <!-- text -->
            <div class="h-full flex flex-col justify-between">
              <h4 class="title">Liquidity lock</h4>
              <button class="button">Proof of locking</button>
            </div>
          </div>

          <!-- 3 -->
          <div class="px-8 py-6 rounded-md w-full relative overflow-hidden" style="background: linear-gradient(90deg, rgba(3, 124, 189, 1) 0%, rgba(53, 157, 205, 1) 100%)">
            <!-- text -->
            <div class="z-[1] relative h-full flex flex-col justify-between">
              <h4 class="title">Read the full audit by Certik</h4>
              <button class="button">Verify</button>
            </div>

            <!-- bg Image -->
            <div class="absolute right-0 bottom-0 z-0 transform translate-x-[30%] translate-y-[40%]">
              <img src="~/assets/images/torus-bronze.png" alt="" class="w-40" />
            </div>
          </div>

          <!-- 4 -->
          <div class="px-8 py-6 rounded-md w-full relative overflow-hidden" style="background: linear-gradient(90deg, rgba(3, 124, 189, 1) 0%, rgba(53, 157, 205, 1) 100%)">
            <!-- text -->
            <div class="h-full flex flex-col justify-between">
              <h4 class="title">take a look at our whitepaper</h4>
              <button class="button">Read whitepaper</button>
            </div>
          </div>

          <!-- 5 -->
          <div class="px-8 py-6 rounded-md w-full relative overflow-hidden" style="background: linear-gradient(90deg, rgba(3, 124, 189, 1) 0%, rgba(53, 157, 205, 1) 100%)">
            <!-- text -->
            <div class="z-[1] relative h-full flex flex-col justify-between">
              <h4 class="title">Transparency report</h4>
              <button class="button">Read the report</button>
            </div>

            <!-- bg Image -->
            <div class="absolute right-0 bottom-0 z-0 transform translate-x-[30%] translate-y-[40%]">
              <img src="~/assets/images/torus-bronze.png" alt="" class="w-40" />
            </div>
          </div>

          <!-- 1 -->
          <div class="px-8 py-6 rounded-md w-full relative overflow-hidden" style="background: linear-gradient(90deg, rgba(3, 124, 189, 1) 0%, rgba(53, 157, 205, 1) 100%)">
            <!-- text -->
            <div class="h-full flex flex-col justify-between">
              <h4 class="title">Verifiable Team KYC</h4>
              <button class="button">Verify</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden lg:block absolute bottom-0 right-16 2xl:right-64 z-[2] rellax" data-rellax-speed="1">
      <img src="~/assets/images/torus-purple.png" alt="" class="w-16 h-16 2xl:h-40 2xl:w-40 transform rotate-12 translate-y-[20%]" />
    </div>
    <div class="hidden lg:block absolute bottom-0 transform translate-y-[-1%] lg:translate-y-[15%] 2xl:translate-y-[40%] right-4 z-0">
      <img src="~/assets/images/torus-purple.png" alt="" class="w-28 h-28 2xl:h-80 2xl:w-80 filter blur-md transform -rotate-12" />
    </div>
  </section>
</template>

<script>
import Rellax from 'rellax'

export default {
  mounted() {
    const rellax = new Rellax('.rellax')

    console.log(rellax)
  },
}
</script>

<style scoped>
.title {
  @apply text-xl font-semibold lg:text-2xl xl:text-3xl;
}

.button {
  @apply text-[#474747] w-full text-center px-6 py-3 rounded-md text-xl font-bold mt-6 md:px-2 md:text-base lg:text-xl lg:px-6 whitespace-nowrap xl:text-2xl xl:py-4 xl:mt-8;
  background: linear-gradient(90deg, rgba(198, 231, 251, 1) 0%, rgba(243, 250, 254, 1) 100%);
}
</style>
