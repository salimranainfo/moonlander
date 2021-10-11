<template>
  <section class="relative">
    <div class="lg:max-w-[55rem] xl:max-w-[66rem] mx-auto px-4 pb-16 lg:pb-20 z-[1] relative">
      <div class="pt-8 md:pt-10 lg:pt-16 xl:pt-24">
        <!-- title -->
        <div class="">
          <h2 class="section-headline">wallet transparency</h2>
          <p class="section-para text-justify mt-2">We are mining on our team wallet for additional funds for marketing and development additional to the (?)% development fee in the token.</p>
        </div>

        <!-- summary -->
        <div class="mt-10 space-y-4 md:space-y-0 md:flex justify-between items-center md:space-x-4">
          <div v-for="(item, i) in topSheetItems" :key="i" class="bg-[#082851] custom-hover custom-transition px-8 py-6 rounded-[.625rem] w-full">
            <h4 class="lg:text-xl">{{ item.title }}</h4>
            <p class="text-sm lg:text-base lg:mt-1">{{ item.total }}</p>
          </div>
        </div>

        <!-- table one -->
        <div class="mt-8 overflow-x-auto rounded-[.625rem] hide-scrollbar">
          <table class="w-full rounded-[.625rem] overflow-hidden">
            <thead>
              <tr class="px-4 bg-[#082851]">
                <td v-for="(header, i) in tableOneHeaders" :key="i" class="whitespace-nowrap px-4 py-4 text-lg font-semibold">{{ header }}</td>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(data, i) in tableOneData" :key="i" class="px-6 bg-[#0f1642] border-t border-[#082851]">
                <td v-for="(item, name, z) in data" :key="z" class="whitespace-nowrap px-4 py-3 w-full">
                  <span class="w-full" :class="name === 'status' && (data.status === 'In Progress' ? 'in-progress' : data.status === 'Done' ? 'done' : 'upcoming')">
                    <!-- :class="item.status === 'In Progress' ? 'in-progress' : item.status === 'Done' ? 'done' : 'upcoming'" -->
                    {{ item }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- table two -->
        <div class="mt-8 overflow-x-auto rounded-[.625rem] hide-scrollbar">
          <table class="w-full rounded-[.625rem] overflow-hidden">
            <thead>
              <tr class="px-4 bg-[#082851]">
                <td v-for="(header, i) in tableTwoHeaders" :key="i" class="whitespace-nowrap px-4 py-4 text-lg font-semibold">{{ header }}</td>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(data, i) in tableTwoData" :key="i" class="px-6 bg-[#0f1642] border-t border-[#082851]">
                <td v-for="(item, z) in data" :key="z" class="whitespace-nowrap px-4 py-3">
                  {{ item }}
                </td>

                <!-- search -->
                <td class="px-4 py-3 flex justify-start items-center">
                  <input type="text" class="bg-transparent w-20" />
                  <button class="w-6"><img src="~/assets/images/search.png" alt="" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="hidden lg:block absolute top-0 left-0 tranform z-[2] rellax" data-rellax-speed="2">
      <img src="~/assets/images/sphere-gold.png" alt="" class="w-20 h-20 2xl:h-40 2xl:w-40 transform translate-x-[-50%] translate-y-[380%] xl:translate-y-[450%] 2xl:translate-y-[380%]" />
    </div>
    <div class="hidden lg:block absolute top-0 left-0 mt-[20%] -ml-10 z-0">
      <img src="~/assets/images/sphere-gold.png" alt="" class="w-40 h-40 2xl:h-80 2xl:w-80 filter blur 2xl:blur-md transform" />
    </div>
  </section>
</template>

<script>
import Rellax from 'rellax'

export default {
  data() {
    return {
      topSheetItems: [
        {
          title: 'Team wallet balance',
          total: '1.3589 ETH ~ $4001.71',
        },
        {
          title: 'Total spent',
          total: '13.589 ETH ~ $40001.71',
        },
        {
          title: 'Mining per day',
          total: '13.589 ETH ~ $40001.71',
        },
      ],
      tableOneHeaders: ['Tast', 'Person', 'Start date', 'Due Date', 'Status', 'Cost'],
      tableOneData: [
        {
          task: 'Landing Page Development',
          person: 'Gabe',
          startDate: '10-01-2021',
          dueDate: '10-05-2021',
          status: 'In Progress',
          cost: '$1000',
        },
        {
          task: 'Landing Page Development',
          person: 'K',
          startDate: '10-01-2021',
          dueDate: '10-05-2021',
          status: 'Done',
          cost: '$1000',
        },
        {
          task: 'Landing Page Development',
          person: 'Gabe',
          startDate: '10-01-2021',
          dueDate: '10-05-2021',
          status: 'Upcoming',
          cost: '$1000',
        },
        {
          task: 'Landing Page Development',
          person: 'Gabe',
          startDate: '10-01-2021',
          dueDate: '10-05-2021',
          status: 'In Progress',
          cost: '$1000',
        },
        {
          task: 'Landing Page Development',
          person: 'K',
          startDate: '10-01-2021',
          dueDate: '10-05-2021',
          status: 'Done',
          cost: '$1000',
        },
        {
          task: 'Landing Page Development',
          person: 'Gabe',
          startDate: '10-01-2021',
          dueDate: '10-05-2021',
          status: 'Upcoming',
          cost: '$1000',
        },
      ],
      tableTwoHeaders: ['Transaction', 'Amount', 'tx hash', 'Date', 'To', ''],
      tableTwoData: [
        {
          transaction: 'Paid for Domain Name Moonlender.io',
          amount: '$1000',
          txHash: '0x96014f0x96014f',
          date: '10-05-2021',
          to: 'e7613da9e7613da9',
        },
        {
          transaction: 'Paid for Logo & Branding to Freelancer',
          amount: '$1000',
          txHash: '0x96014f0x96014f',
          date: '10-05-2021',
          to: 'e7613da9e7613da9',
        },
        {
          transaction: 'Prepaid 25% for Website Mockup to K',
          amount: '$1000',
          txHash: '0x96014f0x96014f',
          date: '10-05-2021',
          to: 'e7613da9e7613da9',
        },
      ],
    }
  },

  mounted() {
    const rellax = new Rellax('.rellax')

    console.log(rellax)
  },
}
</script>

<style scoped>
.custom-hover:hover {
  background: linear-gradient(90deg, rgba(1, 119, 184, 1) 0%, rgba(48, 152, 201, 1) 100%);
}

.in-progress {
  @apply py-1 px-4 w-full rounded-md text-center inline-block;
  background: linear-gradient(90deg, rgba(212, 0, 127, 1) 0%, rgba(237, 106, 166, 1) 100%);
}

.done {
  @apply py-1 px-4 w-full rounded-md text-center inline-block;
  background: linear-gradient(90deg, rgba(0, 145, 215, 1) 0%, rgba(62, 189, 239, 1) 100%);
}

.upcoming {
  @apply py-1 px-4 w-full rounded-md bg-[#082851] text-center inline-block;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
