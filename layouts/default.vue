<template>
  <div class="bg-[#040822]">
    <Header></Header>

    <Nuxt />

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

export default {
  components: { Header, Footer },

  mounted() {
    this.$store.commit('SET_WINDOW_WIDTH', window.innerWidth)

    window.addEventListener('resize', () => {
      this.$store.commit('SET_WINDOW_WIDTH', window.innerWidth)
    })
  },
}
</script>

<style></style>
