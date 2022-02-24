<script setup>
import { format } from "date-fns";
import { ref } from 'vue'
import { SearchIcon } from '@heroicons/vue/solid'
const time = ref(format(new Date(), "h:mm b"));
const date = ref(format(new Date(), "MMM dd"));
const day = ref(format(new Date(), "EEEE"));

setInterval(() => {
  time.value = format(new Date(), "h:mm b");
  date.value = format(new Date(), "MMM dd");
  day.value = format(new Date(), "EEEE");
}, 1000);

</script>

<template>
  <div class="bg-white w-full flex flex-row justify-between py-12 container items-center">
    <div class="font-bold text-3xl">
      <span>AnimTV</span>
    </div>

    <div class="flex flex-row">
      <router-link to="/">
        <div class="px-4 py-2 mr-4 text-gray-600 hover:text-gray-800">
          Upcoming
        </div>
      </router-link>
      <router-link to="/about">
        <div class="px-4 py-2 mr-4 text-gray-600 hover:text-gray-800">
          Genre
        </div>
      </router-link>
      <router-link to="/about">
        <div class="px-4 py-2 mr-4 text-gray-600 hover:text-gray-800">
          Videos
        </div>
      </router-link>
      <router-link to="/about">
        <div class="px-4 py-2 mr-4 text-gray-600 hover:text-gray-800">
          Subscription
        </div>
      </router-link>
      <router-link to="/about">
        <div class="px-4 py-2 mr-4 text-gray-600 hover:text-gray-800">
          <SearchIcon class="w-6 h-6"></SearchIcon>
        </div>
      </router-link>
    </div>

    <div class="flex flex-row space-x-4">
        <span class="font-bold text-5xl font-title">
            {{ time }}
        </span>
        <div class="flex flex-col">
            <span class="text-gray-600">{{ date }}</span>
            <span class="text-gray-600">{{ day }}</span>
        </div>
    </div>
  </div>
</template>