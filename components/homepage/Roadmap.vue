<template>
  <section>
    <div class="lg:max-w-[50rem] xl:max-w-[55rem] mx-auto">
      <div class="pt-8 pb-10">
        <!-- headline -->
        <div class="px-4 md:w-7/12 md:mx-auto">
          <h3 class="section-headline text-center">Roadmap</h3>
          <p class="section-para text-center leading-tight mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi vero iste veritatis</p>
        </div>

        <!-- items -->
        <div class="mt-16">
          <div class="flex justify-between items-start space-x-4 px-4 md:w-8/12 md:mx-auto">
            <div v-for="(item, i) in items" :key="i" class="md:w-20">
              <h4 class="font-bold text-center text-lg">{{ item.title }}</h4>
              <p class="text-xs leading-none text-center">{{ item.details }}</p>
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
          title: 'Item 1',
          details: 'Lorem ipsum dolor sit amet',
        },
        {
          title: 'Item 2',
          details: 'Lorem ipsum dolor sit amet',
        },
        {
          title: 'Item 3',
          details: 'Lorem ipsum dolor sit amet',
        },
        {
          title: 'Item 4',
          details: 'Lorem ipsum dolor sit amet',
        },
      ],
    }
  },
}
</script>

<style></style>
