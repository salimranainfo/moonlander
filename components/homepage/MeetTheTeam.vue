<template>
  <section>
    <div class="section-width pb-20 xl:pb-24">
      <div class="md:w-7/12">
        <h2 class="section-headline">Meet the team</h2>
        <p class="section-para text-justify md:mt-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
      </div>

      <div class="mt-8 lg:mt-10">
        <div class="space-y-12 md:space-y-0 md:flex justify-around items-start md:space-x-6">
          <div v-for="(item, i) in items" :key="i" class="flex flex-col justify-center items-center">
            <div class="h-20 w-20 rounded-full border-4 bg-black flex justify-center items-center lg:h-28 lg:w-28 lg:border-[6px]">
              <img src="" alt="" />
            </div>

            <div class="mt-4">
              <h3 class="text-xl font-semibold leading-none lg:text-2xl xl:leading-none text-center">{{ item.title }}</h3>
              <p class="section-para text-center mt-1">{{ item.details }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- box -->
      <div class="mt-16 lg:mt-[5.32rem] rounded-[.625rem] relative bg-[#082851] md:flex justify-end" style="background: linear-gradient(90deg, rgba(1, 119, 184, 1) 0%, rgba(48, 152, 201, 1) 100%)">
        <div class="md:w-9/12 bg-opacity-60 px-4 py-6 md:px-8 md:py-10 xl:px-12 xl:py-16">
          <div class="md:flex justify-between items-center md:space-x-6">
            <div class="md:w-9/12">
              <h3 class="text-lg leading-tight text-justify md:text-2xl md:leading-tight lg:text-3xl lg:leading-tight">Join MLD Telegram</h3>

              <p class="section-para text-justify mt-3 leading-tight">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
            </div>

            <div class="mt-6 flex justify-end md:mt-0 md:justify-center md:w-3/12">
              <button class="bg-[#040822] px-4 py-2 rounded-md">Join Now</button>
            </div>
          </div>
        </div>

        <!-- Corner Image -->
        <div class="hidden absolute bottom-0 left-0 lg:block transform translate-x-[-50%] translate-y-[50%]">
          <img src="~assets/images/sphere-gold.png" alt="" class="h-28" />
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
          title: 'Gabe',
          details: 'Lorem ipsum dolor sit',
          image: '',
        },
        {
          title: 'Gabe',
          details: 'Lorem ipsum dolor sit',
          image: '',
        },
        {
          title: 'SailorGabe',
          details: 'Lorem ipsum dolor sit',
          image: '',
        },
      ],
    }
  },
}
</script>

<style></style>
