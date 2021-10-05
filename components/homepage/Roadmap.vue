<template>
  <section>
    <div class="section-width">
      <h2 class="section-headline">Roadmap</h2>

      <!-- features -->
      <div class="mt-6 md:mt-8 lg:mt-10 xl:mt-[3.125rem] pl-6 border-l-2 border-gray-400 relative">
        <div v-for="(item, i) in data" :key="i" class="flex flex-col md:flex-row md:justify-between items-start space-y-6 md:space-y-0 md:space-x-10 mb-8">
          <!-- text -->
          <div class="md:w-8/12 relative">
            <div>
              <h3 class="text-xl font-semibold leading-none lg:text-2xl xl:leading-none">{{ item.title }}</h3>
              <p>{{ item.progress }}</p>
              <p class="text-sm leading-tight mt-2 lg:text-base lg:leading-tight xl:text-lg xl:leading-tight">{{ item.details }}</p>
            </div>

            <div class="absolute -top-1 left-[-1.58rem] transform translate-x-[-50%] z-10">
              <img src="~/assets/images/circle-filled.png" alt="" class="w-5 h-5" />
            </div>
          </div>

          <!-- list -->
          <div class="md:w-4/12 space-y-1">
            <div v-for="(listItem, z) in item.listItems" :key="z" class="flex justify-start items-center space-x-4">
              <div>
                <img v-if="listItem.completed" src="~/assets/images/circle-right.png" alt="" />
                <img v-if="!listItem.completed" src="~/assets/images/circle.png" alt="" />
              </div>

              <div>
                <p>{{ listItem.text }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute top-0 left-0 h-[20%] w-[2px] bg-white transform translate-x-[-50%]"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'Phase 1',
          progress: 'In progress',
          details:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse',
          listItems: [
            {
              text: 'Lorem ipsum dolor sit',
              completed: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: false,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: false,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: false,
            },
          ],
        },
        {
          title: 'Phase 2',
          progress: 'In progress',
          details:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse',
          listItems: [
            {
              text: 'Lorem ipsum dolor sit',
              completed: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: false,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: false,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: false,
            },
          ],
        },
        {
          title: 'Phase 3',
          progress: 'In progress',
          details:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse',
          listItems: [
            {
              text: 'Lorem ipsum dolor sit',
              completed: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: false,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: false,
            },
            {
              text: 'Lorem ipsum dolor sit',
              completed: false,
            },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
