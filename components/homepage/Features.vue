<template>
  <section>
    <div class="section-width">
      <h2 class="section-headline">Moonlender Features</h2>

      <!-- features -->
      <div class="mt-6 space-y-6 md:space-y-0 md:grid grid-cols-2 md:gap-8 md:mt-8 lg:gap-10 lg:mt-10 xl:gap-[3.125rem] xl:mt-[3.125rem]">
        <div v-for="(item, i) in data" :key="i" class="flex justify-between items-start space-x-6">
          <!-- icon -->
          <div class="bg-[#052554] p-4 xl:p-8 rounded-[.625rem] w-4/12 flex justify-center items-center">
            <img src="~/assets/images/feature.png" alt="" />
          </div>

          <!-- text -->
          <div class="w-8/12">
            <h3 class="text-xl font-semibold leading-none lg:text-2xl">{{ item.title }}</h3>
            <p class="text-sm leading-tight mt-2 lg:text-base lg:leading-tight xl:text-lg xl:leading-tight">{{ item.details }}</p>
          </div>
        </div>
      </div>

      <!-- box -->
      <div class="mt-16 lg:mt-[5.32rem] rounded-[.625rem] flex justify-between items-center space-x-6 relative" style="background: linear-gradient(90deg, rgba(1, 119, 184, 1) 0%, rgba(48, 152, 201, 1) 100%)">
        <div class="w-6/12 bg-opacity-60">
          <p class="text-lg leading-tight text-justify md:text-2xl md:leading-tight lg:text-3xl lg:leading-tight px-4 py-6 md:px-8 md:py-10 xl:px-12 xl:py-16">Another pretty block about the project feature</p>
        </div>

        <div class="w-6/12 m-2 h-28 bg-gray-600 flex justify-center items-center">
          <p>image here</p>
        </div>

        <!-- Corner Image -->
        <div class="hidden absolute bottom-4 -left-16 bg-white h-16 w-16 rounded-full lg:flex justify-center items-center">
          <p class="text-black text-xs text-center">Image</p>
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
      ],
    }
  },
}
</script>

<style></style>
