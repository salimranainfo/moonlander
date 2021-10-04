<template>
  <header class="bg-[#040822] fixed top-0 w-full z-50">
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
          <nuxt-link v-for="(item, i) in navItems" :key="i" :to="item.link" class="font-semibold">{{ item.title }}</nuxt-link>

          <div class="space-x-1">
            <button class="whitespace-nowrap py-1 px-4 rounded-xl text-white font-semibold" style="background: linear-gradient(90deg, rgba(0, 145, 215, 1) 0%, rgba(62, 189, 239, 1) 100%)">Apply for Whitelist</button>
            <button class="whitespace-nowrap py-1 px-4 rounded-xl text-white font-semibold" style="background: linear-gradient(90deg, rgba(212, 0, 127, 1) 0%, rgba(237, 106, 166, 1) 100%)">Join Telegram</button>
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
        },
        {
          title: 'Community',
          link: '',
        },
      ],
    }
  },
}
</script>

<style scoped>
.main-div:hover >>> div {
  @apply block;
}
</style>
