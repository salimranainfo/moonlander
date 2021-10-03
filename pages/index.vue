<template>
  <div class="pt-16">
    <hero></hero>
    <roadmap></roadmap>
    <team></team>
    <video-guide></video-guide>
  </div>
</template>

<script>
import Hero from '~/components/homepage/Hero.vue'
import Roadmap from '~/components/homepage/Roadmap.vue'
import Team from '~/components/homepage/Team.vue'
import VideoGuide from '~/components/homepage/VideoGuide.vue'

export default {
  components: { Hero, Roadmap, Team, VideoGuide },
}
</script>
