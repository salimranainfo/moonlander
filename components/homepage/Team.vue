<template>
  <section>
    <div class="lg:max-w-[50rem] xl:max-w-[55rem] mx-auto">
      <div class="pt-8 pb-10">
        <!-- headline -->
        <div class="px-4 md:w-7/12 md:mx-auto">
          <h3 class="section-headline text-center">Team</h3>
          <p class="section-para text-center leading-tight mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi vero iste veritatis</p>
        </div>

        <!-- items -->
        <div class="mt-16">
          <div class="md:flex justify-between items-start md:space-x-4 xl:space-x-8 md:px-4 space-y-20 md:space-y-0 px-[4.5rem]">
            <div v-for="(item, i) in items" :key="i" class="shadow-2xl rounded-2xl">
              <!-- image -->
              <div class="flex justify-center z-0">
                <div class="h-20 w-20 rounded-full border-4 bg-gray-600 transform translate-y-[-50%]">
                  <img src="" alt="" />
                </div>
              </div>

              <!-- Text -->
              <div class="-mt-6 px-8 pb-10">
                <h4 class="font-bold text-center text-lg">{{ item.title }}</h4>
                <p class="text-xs leading-none text-left mt-2">{{ item.details }}</p>
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
          title: 'Gabe',
          image: '',
          details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ipsam iure nemo eos. Delectus, recusandae laborum repudiandae repellendus, natus sint dolore aperiam nesciunt aspernatur molestiae unde cupiditate culpa sed fugiat.',
        },
        {
          title: 'K',
          image: '',
          details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ipsam iure nemo eos. Delectus, recusandae laborum repudiandae repellendus, natus sint dolore aperiam nesciunt aspernatur molestiae unde cupiditate culpa sed fugiat.',
        },
        {
          title: 'SailorGabe',
          image: '',
          details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ipsam iure nemo eos. Delectus, recusandae laborum repudiandae repellendus, natus sint dolore aperiam nesciunt aspernatur molestiae unde cupiditate culpa sed fugiat.',
        },
      ],
    }
  },
}
</script>

<style></style>
