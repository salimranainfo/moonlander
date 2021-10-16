<template>
  <section>
    <div class="section-width">
      <!-- features -->
      <div class="mt-6 space-y-10 md:space-y-0 md:grid grid-cols-2 md:gap-8 md:mt-8 lg:gap-10 lg:mt-10 xl:gap-[3.125rem] xl:mt-[3.125rem]">
        <div>
          <h2 class="section-headline text-center md:text-left">Moonlender Features</h2>
        </div>

        <div v-for="(item, i) in data" :key="i" class="flex flex-col md:flex-row justify-start md:justify-between items-start space-y-4 md:space-y-0 md:space-x-6">
          <!-- icon -->
          <div class="bg-[#052554] px-6 py-4 xl:p-6 rounded-[.625rem] flex justify-center items-center bg-opacity-40">
            <img src="~/assets/images/feature.png" alt="" class="w-10 md:w-20 lg:w-24" />
          </div>

          <!-- text -->
          <div class="">
            <h3 class="text-xl font-semibold leading-none lg:text-2xl">{{ item.title }}</h3>
            <p class="text-sm mt-2 lg:text-base xl:text-lg text-[#e6e7ea]">{{ item.details }}</p>
          </div>
        </div>
      </div>

      <!-- box -->
      <div class="mt-16 lg:mt-[5.32rem] rounded-[.625rem] flex justify-start items-center space-x-6 relative" style="background: linear-gradient(90deg, rgba(1, 119, 184, 1) 0%, rgba(48, 152, 201, 1) 100%)">
        <div class="w-6/12 bg-opacity-60">
          <p class="text-lg leading-tight text-justify md:text-2xl md:leading-tight lg:text-3xl lg:leading-tight px-4 py-6 md:px-8 md:py-10 xl:px-12 xl:py-16">Another pretty block about the project feature</p>
        </div>

        <!-- Corner Image -->
        <div class="hidden absolute bottom-0 left-0 lg:block transform translate-x-[-110%] translate-y-[-20%]">
          <img src="~assets/images/sphere-gold.png" alt="" class="h-16" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'Feature 1',
          details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
        },
        {
          title: 'Feature 2',
          details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
        },
        {
          title: 'Feature 3',
          details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
        },
        {
          title: 'Feature 4',
          details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
        },
        {
          title: 'Feature 5',
          details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
        },
        {
          title: 'Feature 6',
          details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
        },
        {
          title: 'Feature 6',
          details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
        },
      ],
    }
  },
}
</script>

<style></style>
