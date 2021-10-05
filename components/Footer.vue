<template>
  <footer class="bg-[#0f1642]">
    <div class="lg:max-w-[55rem] xl:max-w-[66rem] mx-auto">
      <div class="px-4 pt-12 pb-10">
        <div class="space-y-6 md:space-y-0 md:grid grid-cols-4 gap-x-6">
          <!-- Moonlender -->
          <div>
            <h4 class="text-lg font-bold">Moonlender</h4>
            <p class="text-sm leading-tight mt-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi</p>
          </div>

          <!-- Pages and Docs -->
          <div v-for="(item, i) in items" :key="i">
            <h4 class="text-lg font-bold">{{ item.title }}</h4>
            <div class="flex flex-col space-y-1 mt-2">
              <nuxt-link v-for="(footerItem, z) in item.footerItems" :key="z" :to="footerItem.link" class="text-sm">{{ footerItem.title }}</nuxt-link>
            </div>
          </div>

          <!-- Contact and investors -->
          <div class="flex flex-col justify-between">
            <div>
              <h4 class="text-lg font-bold">Contact</h4>
              <div class="flex flex-col space-y-1 mt-2">
                <nuxt-link to="" class="text-sm">Footer item</nuxt-link>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-bold">investors</h4>
              <div class="flex flex-col space-y-1 mt-2">
                <nuxt-link to="" class="text-sm">Footer item</nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <!-- copyright & social media icons -->
        <div class="mt-20 md:mt-12 md:flex justify-between items-center">
          <p class="opacity-50">&copy; 2021 Moonlender. All rights reserved</p>

          <!-- social media links -->
          <div class="flex justify-start items-center space-x-2 mt-2 md:mt-0">
            <a href="">
              <img src="~/assets/images/social-media/reddit.png" alt="" />
            </a>
            <a href="">
              <img src="~/assets/images/social-media/telegram.png" alt="" />
            </a>
            <a href="">
              <img src="~/assets/images/social-media/twitter.png" alt="" />
            </a>
            <a href="">
              <img src="~/assets/images/social-media/youtube.png" alt="" />
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
          title: 'Pages',
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
        {
          title: 'Docs',
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
    }
  },
}
</script>

<style></style>
