<template>
  <footer>
    <div class="lg:max-w-[50rem] xl:max-w-[55rem] mx-auto">
      <div class="px-4 space-y-4 md:space-y-0 md:flex justify-around items-start pt-12 pb-20">
        <div v-for="(item, i) in items" :key="i">
          <h4 class="text-lg font-bold">{{ item.title }}</h4>
          <div class="flex flex-col space-y-1 mt-2">
            <nuxt-link v-for="(footerItem, z) in item.footerItems" :key="z" :to="footerItem.link" class="text-sm">{{ footerItem.title }}</nuxt-link>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-bold">Join us</h4>
          <div class="flex flex-col space-y-1 mt-2">
            <a v-for="(item, i) in socialMediaItems" :key="i" :href="item.link" class="flex justify-start items-center space-x-2 text-sm">
              <span class="h-4 w-4 rounded-full bg-gray-500">
                <img :src="item.icon" alt="" />
              </span>
              <span>{{ item.title }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Footer title',
          footerItems: [
            {
              title: 'Footer Item',
              link: '',
            },
            {
              title: 'Footer Item',
              link: '',
            },
            {
              title: 'Footer Item',
              link: '',
            },
            {
              title: 'Footer Item',
              link: '',
            },
          ],
        },
        {
          title: 'Footer title',
          footerItems: [
            {
              title: 'Footer Item',
              link: '',
            },
            {
              title: 'Footer Item',
              link: '',
            },
            {
              title: 'Footer Item',
              link: '',
            },
            {
              title: 'Footer Item',
              link: '',
            },
            {
              title: 'Footer Item',
              link: '',
            },
          ],
        },
      ],

      socialMediaItems: [
        {
          title: 'Telegram',
          icon: '',
          link: '',
        },
        {
          title: 'Reddit',
          icon: '',
          link: '',
        },
        {
          title: 'Twitter',
          icon: '',
          link: '',
        },
        {
          title: 'Youtube',
          icon: '',
          link: '',
        },
      ],
    }
  },
}
</script>

<style></style>
