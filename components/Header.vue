<template>
  <header class="fixed top-0 w-full z-50" :class="scrollY > 1 ? 'bg-[#0a1457] transition-all duration-200 ease-in-out' : 'bg-[#040822]'">
    <div class="px-4 py-4 lg:p-6 max-w-[85rem] mx-auto z-[1]">
      <div class="flex justify-between items-center">
        <!-- log -->
        <div>
          <nuxt-link to="/" class="text-lg font-semibold">
            <img src="~/assets/images/logo.png" alt="" />
          </nuxt-link>
        </div>

        <!-- desktop menu -->
        <nav class="hidden xl:flex justify-end items-center space-x-8">
          <span v-for="(item, i) in navItems" :key="i" class="relative" :class="item.subMenu && 'mainMenu'">
            <nuxt-link :to="item.link" class="font-semibold text-[#8480ac] hover:text-white custom-transition">{{ item.title }}</nuxt-link>

            <span v-if="item.subMenu" class="absolute top-4 left-0 pt-4 subMenu">
              <span class="bg-white rounded-xl py-4 px-6 flex flex-col justify-start items-center space-y-2">
                <nuxt-link v-for="(subItem, z) in item.subMenu" :key="z" :to="subItem.link" class="font-semibold whitespace-nowrap w-full text-[#474747] hover:text-[#0e88c4] custom-transition">{{ subItem.title }}</nuxt-link>
              </span>
            </span>
          </span>

          <div class="space-x-1">
            <button class="whitespace-nowrap py-1 px-4 rounded-xl text-white font-semibold gradient-bg">Apply for Whitelist</button>
            <button class="whitespace-nowrap py-1 px-4 rounded-xl text-white font-semibold gradient-bg">Join Telegram</button>
          </div>
        </nav>

        <!-- mobile menu button -->
        <div class="xl:hidden">
          <button class="">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- mobileMenu -->
    <div class="hidden w-full h-screen bg-indigo-50 absolute top-0 left-0 px-4 pt-20 z-[0]">
      <nav class="flex flex-col justify-start items-start space-y-2">
        <nuxt-link to="" class="font-semibold text-lg">About</nuxt-link>

        <button class="font-semibold text-lg">Transparency</button>
        <div class="flex flex-col justify-start px-8">
          <nuxt-link to="" class="whitespace-nowrap font-semibold focus:text-blue-400 hover:text-blue-400 custom-transition text-lg w-full">Whitepaper</nuxt-link>
          <nuxt-link to="" class="whitespace-nowrap font-semibold focus:text-blue-400 hover:text-blue-400 custom-transition text-lg w-full">Audit Security</nuxt-link>
          <nuxt-link to="" class="whitespace-nowrap font-semibold focus:text-blue-400 hover:text-blue-400 custom-transition text-lg w-full">Wallet transparency page</nuxt-link>
        </div>

        <nuxt-link to="" class="font-semibold text-lg">Community</nuxt-link>

        <button class="bg-blue-400 py-1 px-4 rounded-2xl text-white font-semibold">Buy MLD</button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
      navItems: [
        {
          title: 'About',
          link: '',
        },
        {
          title: 'MLD Token',
          link: '',
        },
        {
          title: 'Roadmap',
          link: '',
        },
        {
          title: 'Team',
          link: '',
        },
        {
          title: 'Transparency',
          link: '',
          subMenu: [
            {
              title: 'Whitepaper',
              link: '',
            },
            {
              title: 'Audit Security',
              link: '',
            },
            {
              title: 'Wallet transparency page',
              link: '',
            },
          ],
        },
        {
          title: 'Community',
          link: '',
        },
      ],
    }
  },

  mounted() {
    this.scrollY = window.scrollY

    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY
    })
  },
}
</script>

<style scoped>
.subMenu {
  visibility: hidden;
  opacity: 0;
  transition: all 200ms ease-in-out;
}

.mainMenu:hover >>> .subMenu {
  visibility: visible;
  opacity: 100;
}
</style>
