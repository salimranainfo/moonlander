<template>
  <section>
    <div class="lg:max-w-[55rem] xl:max-w-[66rem] mx-auto px-4 mt-32 md:mt-44 xl:mt-[12.5rem]">
      <div class="md:flex justify-between items-center md:space-x-6 xl:space-x-20">
        <!-- Mld Token -->
        <div class="md:w-4/12 md:pr-5">
          <h2 class="section-headline">Mld Token</h2>
          <p class="section-para text-justify mt-2 xl:mt-4">Advertisers and revshare stakers will create high demand for a very limited circulating supply of MLD.</p>
        </div>

        <!-- Supply & distribution -->
        <div class="md:w-8/12 bg-[#04264e] px-8 py-6 rounded-[.625rem] mt-10 md:mt-0 md:px-12 md:py-8">
          <div>
            <h3 class="text-xl font-semibold lg:text-2xl">Supply and distribution</h3>

            <div class="mt-4 space-y-2">
              <div v-for="(item, i) in items" :key="i" class="flex justify-between items-start space-x-4 md:space-x-6">
                <span class="w-6/12 text-sm text-[#e6e7ea] md:text-base xl:text-lg">{{ item.title }}</span>
                <span class="w-6/12 text-sm text-[#e6e7ea] md:text-base xl:text-lg">{{ item.total }}</span>
              </div>
            </div>
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
      items: [
        {
          title: 'Total Token Supply',
          total: '100,000,000 MLD',
        },
        {
          title: 'Pre-Sale Allocation',
          total: '5,000,000 MLD',
        },
        {
          title: 'Initial Circulating Supply',
          total: '10,000,000 MLD',
        },
        {
          title: 'Token Type',
          total: 'ERC20',
        },
      ],
    }
  },
}
</script>

<style></style>
