<template>
  <div class="pt-16 lg:pt-20">
    <hero></hero>
    <features></features>
  </div>
</template>

<script>
import Features from '~/components/homepage/Features.vue'
import Hero from '~/components/homepage/Hero.vue'

export default {
  components: { Hero, Features },
}
</script>
