<template>
  <section>
    <div class="section-width">
      <div class="md:flex justify-center items-center md:space-x-6 xl:space-x-20">
        <!-- Chart -->
        <div class="md:w-4/12 rounded-full flex justify-center items-end md:mt-10">
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>

        <!-- Text Content -->
        <div class="md:w-8/12">
          <h2 class="section-headline">Token Distribution</h2>
          <p class="section-para text-justify mt-2 xl:mt-4">Moonlender will mint an initial supply of XXX MLD tokens.</p>
          <p class="section-para text-justify mt-2 xl:mt-4">This will represent the market cap for the lifetime of the project – no more MLD tokens can be minted.</p>

          <!-- colors -->
          <div class="space-y-1 mt-8 xl:mt-10">
            <div class="flex justify-start items-center space-x-6 md:space-x-8">
              <span class="h-5 w-12 bg-[#b933ff] inline-block rounded-[5px]"></span>
              <span class="text-lg md:text-xl font-medium text-[#e6e7ea]">Public Sale</span>
            </div>
            <div class="flex justify-start items-center space-x-6 md:space-x-8">
              <span class="h-5 w-12 bg-[#43ff82] inline-block rounded-[5px]"></span>
              <span class="text-lg md:text-xl font-medium text-[#e6e7ea]">Private Sale</span>
            </div>
            <div class="flex justify-start items-center space-x-6 md:space-x-8">
              <span class="h-5 w-12 bg-[#48b5ff] inline-block rounded-[5px]"></span>
              <span class="text-lg md:text-xl font-medium text-[#e6e7ea]">Product & Marketing</span>
            </div>
            <div class="flex justify-start items-center space-x-6 md:space-x-8">
              <span class="h-5 w-12 bg-[#335fff] inline-block rounded-[5px]"></span>
              <span class="text-lg md:text-xl font-medium text-[#e6e7ea]">Team & Advisors</span>
            </div>
            <div class="flex justify-start items-center space-x-6 md:space-x-8">
              <span class="h-5 w-12 bg-[#ff2caa] inline-block rounded-[5px]"></span>
              <span class="text-lg md:text-xl font-medium text-[#e6e7ea]">Ecosystem</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  mounted() {
    const ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-new
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Public Sale', 'Private Sale', 'Product & Marketing', 'Team & Advisors', 'Ecosystem'],
        datasets: [
          {
            label: 'Sales',
            data: [12, 4, 4, 4, 8],
            backgroundColor: ['#b933ff', '#43ff82', '#48b5ff', '#335fff', '#ff2caa'],
            borderColor: ['#b933ff', '#43ff82', '#48b5ff', '#335fff', '#ff2caa'],
            borderWidth: 1,
            hoverBorderWidth: 16,
            cutout: 100,
            rotation: -90,
          },
        ],
      },

      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            display: true,
            ticks: {
              display: true,
              color: '#040822',
            },
          },
          x: {
            display: true,
            ticks: {
              display: true,
              color: '#040822',
            },
          },
        },
        plugins: {
          tooltip: {
            backgroundColor: '#ffffff',
            bodyColor: '#000000',
            displayColors: false,
          },
          legend: {
            display: false,
          },
        },
      },
    })
  },
}
</script>

<style scoped>
/* #myChart {
  height: 300px !important;
  width: 300px !important;
} */
</style>
