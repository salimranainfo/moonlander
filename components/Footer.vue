<template>
  <footer class="bg-[#0f1642]">
    <div class="lg:max-w-[55rem] xl:max-w-[66rem] mx-auto">
      <div class="px-4 pt-12 pb-10">
        <div class="xl:flex justify-start items-start xl:space-x-8">
          <!-- Moonlender -->
          <div class="md:flex justify-center items-center xl:w-[40%]">
            <div class="md:w-6/12 xl:w-10/12">
              <h4 class="text-lg font-bold xl:text-xl text-center xl:text-left">Moonlender</h4>
              <p class="mt-2 text-center xl:text-left text-[#e6e7ea] xl:mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi</p>
            </div>
          </div>

          <div class="md:flex justify-around items-start md:px-12 mt-10 space-y-10 md:space-y-0 xl:w-[60%] xl:mt-0">
            <!-- Pages and Docs -->
            <div v-for="(item, i) in items" :key="i">
              <h4 class="text-lg font-bold xl:text-xl text-center xl:text-left">{{ item.title }}</h4>
              <div class="flex flex-col justify-center space-y-4 mt-2 xl:mt-4">
                <nuxt-link v-for="(footerItem, z) in item.footerItems" :key="z" :to="footerItem.link" class="text-sm xl:text-base text-center xl:text-left text-[#e6e7ea]">{{ footerItem.title }}</nuxt-link>
              </div>
            </div>

            <!-- Contact and investors -->
            <div class="flex flex-col justify-between space-y-8">
              <div>
                <h4 class="text-lg font-bold xl:text-xl text-center xl:text-left">Contact</h4>
                <div class="flex flex-col space-y-4 mt-2 xl:mt-4">
                  <nuxt-link to="" class="text-sm xl:text-base text-center xl:text-left text-[#e6e7ea]">Footer item</nuxt-link>
                </div>
              </div>

              <div>
                <h4 class="text-lg font-bold xl:text-xl text-center">investors</h4>
                <div class="flex flex-col space-y-1 mt-2 xl:mt-4">
                  <nuxt-link to="" class="text-sm xl:text-base text-center text-[#e6e7ea]">Footer item</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- copyright & social media icons -->
        <div class="mt-12 xl:flex justify-between items-center">
          <!-- social media links -->
          <div class="flex justify-center items-center flex-wrap px-12 md:space-x-6 xl:order-last">
            <span class="flex justify-center items-center w-[33%] mt-8 md:w-auto">
              <a href="" class="w-8">
                <img src="~/assets/images/social-media/reddit.png" alt="" />
              </a>
            </span>

            <span class="flex justify-center items-center w-[33%] mt-8 md:w-auto">
              <a href="">
                <img src="~/assets/images/social-media/telegram.png" alt="" />
              </a>
            </span>

            <span class="flex justify-center items-center w-[33%] mt-8 md:w-auto">
              <a href="">
                <img src="~/assets/images/social-media/twitter.png" alt="" />
              </a>
            </span>

            <span class="flex justify-center items-center w-[33%] mt-8 md:w-auto">
              <a href="">
                <img src="~/assets/images/social-media/youtube.png" alt="" />
              </a>
            </span>
          </div>

          <p class="opacity-50 text-center mt-12 md:mt-8">&copy; 2021 Moonlender. All rights reserved</p>
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
