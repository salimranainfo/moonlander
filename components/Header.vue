<template>
  <header class="border-b fixed top-0 w-full bg-white z-50">
    <div class="px-4 py-2 max-w-[60rem] mx-auto z-[1]">
      <div class="flex justify-between items-center">
        <!-- log -->
        <div>
          <nuxt-link to="/" class="text-lg font-semibold"
            >moonlender
            <!-- <img src="~/assets/images/logo.svg" alt=""> -->
          </nuxt-link>
        </div>

        <!-- desktop menu -->
        <nav class="hidden lg:flex justify-end items-center space-x-8">
          <nuxt-link to="" class="font-semibold text-lg">About</nuxt-link>
          <div class="relative main-div py-4">
            <button class="font-semibold text-lg">Transparency</button>

            <div class="hidden absolute top-12 left-0">
              <div class="flex flex-col justify-start py-4 px-8 bg-white rounded-xl shadow-xl">
                <nuxt-link to="" class="whitespace-nowrap font-semibold focus:text-blue-400 hover:text-blue-400 custom-transition text-lg w-full">Whitepaper</nuxt-link>
                <nuxt-link to="" class="whitespace-nowrap font-semibold focus:text-blue-400 hover:text-blue-400 custom-transition text-lg w-full">Audit Security</nuxt-link>
                <nuxt-link to="" class="whitespace-nowrap font-semibold focus:text-blue-400 hover:text-blue-400 custom-transition text-lg w-full">Wallet transparency page</nuxt-link>
              </div>
            </div>
          </div>
          <nuxt-link to="" class="font-semibold text-lg">Community</nuxt-link>

          <button class="bg-blue-400 py-1 px-4 rounded-2xl text-white font-semibold">Buy MLD</button>
        </nav>

        <div class="lg:hidden py-2">
          <button class="p-2">
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
export default {}
</script>

<style scoped>
.main-div:hover >>> div {
  @apply block;
}
</style>
