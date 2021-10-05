<template>
  <section>
    <div class="lg:max-w-[55rem] xl:max-w-[66rem] mx-auto px-4 pb-16 lg:pb-20">
      <div class="pt-8 md:pt-10 lg:pt-16 xl:pt-24">
        <!-- title -->
        <div class="">
          <h2 class="section-headline">Latest Updates</h2>
        </div>

        <!-- table one -->
        <div class="mt-8 overflow-x-auto rounded-[.625rem] hide-scrollbar">
          <div class="w-full rounded-[.625rem] bg-[#0f1642]">
            <!-- all buttons -->
            <div class="flex flex-nowrap justify-start items-center w-full overflow-x-auto">
              <button class="button" :class="activeTab === '' && 'bg-[#082851]'" @click="activeTab = ''">All</button>
              <button class="button" :class="activeTab === 'Marketing' && 'bg-[#082851]'" @click="activeTab = 'Marketing'">Marketing</button>
              <button class="button" :class="activeTab === 'Development' && 'bg-[#082851]'" @click="activeTab = 'Development'">Development</button>
              <button class="button" :class="activeTab === 'Partnership' && 'bg-[#082851]'" @click="activeTab = 'Partnership'">Partnership</button>
              <button class="button" :class="activeTab === 'Design' && 'bg-[#082851]'" @click="activeTab = 'Design'">Design</button>
            </div>

            <div class="w-full">
              <div v-for="(item, i) in listItems" :key="i" class="flex justify-between items-start border-t border-[#082851] space-x-4 py-2 md:px-8 md:py-4">
                <p class="w-3/12 md:w-2/12 text-sm px-2 md:text-base">{{ item.date }}</p>
                <p class="w-6/12 text-sm md:w-8/12 md:text-base">{{ item.headline }}</p>
                <button class="w-3/12 md:w-2/12 text-sm px-2 whitespace-nowrap md:text-right md:text-base">Read More</button>
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
      activeTab: '',
      data: [
        {
          title: 'Marketing',
          items: [
            {
              date: '21/09/2021',
              headline: 'Moonlender listed on Binanace',
            },
            {
              date: '21/09/2021',
              headline: 'Moonlender listed on Binanace',
            },
            {
              date: '21/09/2021',
              headline: 'Moonlender listed on Binanace',
            },
          ],
        },
        {
          title: 'Development',
          items: [
            {
              date: '21/09/2021',
              headline: 'Moonlender listed on Binanace',
            },
            {
              date: '21/09/2021',
              headline: 'Moonlender listed on Binanace',
            },
            {
              date: '21/09/2021',
              headline: 'Moonlender listed on Binanace',
            },
          ],
        },
        {
          title: 'Partnership',
          items: [
            {
              date: '21/09/2021',
              headline: 'Moonlender listed on Binanace',
            },
            {
              date: '21/09/2021',
              headline: 'Moonlender listed on Binanace',
            },
            {
              date: '21/09/2021',
              headline: 'Moonlender listed on Binanace',
            },
          ],
        },
        {
          title: 'Design',
          items: [
            {
              date: '21/09/2021',
              headline: 'Moonlender listed on Binanace',
            },
            {
              date: '21/09/2021',
              headline: 'Moonlender listed on Binanace',
            },
            {
              date: '21/09/2021',
              headline: 'Moonlender listed on Binanace',
            },
          ],
        },
      ],
    }
  },

  computed: {
    listItems() {
      let currentItems = []

      if (this.activeTab) {
        const found = this.data.find((el) => el.title === this.activeTab)

        currentItems = found.items
      } else {
        this.data.forEach((el) => {
          currentItems.push(...el.items)
        })
      }

      return currentItems
    },
  },
}
</script>

<style scoped>
.button {
  @apply px-4 py-4 text-lg font-semibold hover:bg-[#082851] active:bg-[#082851] md:w-full;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
