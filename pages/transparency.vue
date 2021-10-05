<template>
  <div class="pt-16 lg:pt-20">
    <wallet-transparency></wallet-transparency>
    <transparency-details></transparency-details>
    <latest-updates></latest-updates>
  </div>
</template>

<script>
import LatestUpdates from '~/components/transparency/LatestUpdates.vue'
import TransparencyDetails from '~/components/transparency/TransparencyDetails.vue'
import WalletTransparency from '~/components/transparency/WalletTransparency.vue'

export default {
  components: {
    WalletTransparency,
    TransparencyDetails,
    LatestUpdates,
  },
}
</script>

<style></style>

WalletTransparency
