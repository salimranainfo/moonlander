<template>
  <div class="pt-16 lg:pt-20">
    <hero></hero>
    <features></features>
    <how-it-works></how-it-works>
    <token-distribution></token-distribution>
    <mld-token></mld-token>
    <video-guides></video-guides>
  </div>
</template>

<script>
import Features from '~/components/homepage/Features.vue'
import Hero from '~/components/homepage/Hero.vue'
import HowItWorks from '~/components/homepage/HowItWorks.vue'
import MldToken from '~/components/homepage/MldToken.vue'
import TokenDistribution from '~/components/homepage/TokenDistribution.vue'
import VideoGuides from '~/components/homepage/VideoGuides.vue'

export default {
  components: { Hero, Features, HowItWorks, TokenDistribution, MldToken, VideoGuides },
}
</script>
