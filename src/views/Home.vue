
<script setup>
import {
  PlayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "@heroicons/vue/solid";
import { onMounted, ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide"
import { getDiscover, getRecommended } from "../../services/api";

const showModal = ref(false);
const recommended = ref([])
const discovered = ref([])
const splideInstance = ref(null);

onMounted(async () => {
  const [ recommendedResponse, discoverResponse ] = await Promise.all([getRecommended(), getDiscover()])
  const { results } = await recommendedResponse.json()
  const { results: discoverResults } = await discoverResponse.json()
  recommended.value = results
  discoverResults.length = 5
  discovered.value = discoverResults
});
</script>

<template>
  <main class="flex flex-col">
    <div
      class="bg-gradient-to-r from-primary to-secondary pt-12 pb-36 text-white"
    >
      <div class="flex flex-row container justify-between">
        <div class="flex flex-col space-y-8">
          <h1 class="font-title text-6xl font-black">Frozen 2</h1>
          <p>2019 &bull; Drama/Fantasy &bull; 2 hour</p>
          <p>
            Elsa the Snow Queen and her sister Anna embark on an <br />
            adventure far away from the kingdom of Arendelle.....
          </p>
          <p>Release Date: 22 November, 2019</p>
          <button
            class="
              bg-white
              px-8
              py-4
              text-black
              w-max
              rounded-full
              shadow-md
              flex
              items-center
            "
            @click="showModal = true"
          >
            Watch Trailer
            <PlayIcon class="w-6 h-6 -mb-1 ml-2"></PlayIcon>
          </button>
        </div>
        <div class="flex-1 relative xl:ml-32 2xl:ml-56">
          <img
            src="/images/hero-bg.png"
            class="
              xl:w-[85%]
              2:xl:w-[55%]
              absolute
              object-contain
              transform
              xl:translate-y-[-24%]
              2xl:translate-y-[-27%]
            "
          />
        </div>
      </div>
    </div>
    <div class="py-8 container">
      <div class="flex justify-between pb-8">
        <div class="font-bold text-2xl">Recommended Movies</div>
        <div class="flex">
          <button @click="splideInstance.go('<')">
            <ChevronLeftIcon class="w-6 h-6 -mb-1 ml-2"></ChevronLeftIcon>
          </button>
          <button @click="splideInstance.go('>')">
            <ChevronRightIcon class="w-6 h-6 -mb-1 ml-2"></ChevronRightIcon>
          </button>
        </div>
      </div>
      <Splide :options="{
        perPage: 4,
        perMove: 1,
        pagination: false,
        arrows: false,
        gap: '2rem',
        height: '34rem'
      }" ref="splideInstance">
        <SplideSlide v-for="movie in recommended" :key="movie.id">
          <div class="bg-black h-full relative">
            <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="h-full w-full object-cover"/>
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <div class="container py-8">
      <div class="flex relative w-full">
        <div class="font-bold text-2xl">Browse More Movies</div>
        <ul
          class="
            flex
            absolute
            right-0
            left-0
            items-center
            justify-center
            space-x-16
            top-0
            bottom-0
          "
        >
          <li>Trending</li>
          <li>Top Rated</li>
          <li>New Arrival</li>
        </ul>
      </div>
      <div class="flex flex-col space-y-12 py-16">
        <div class="flex space-x-8" v-for="movie in discovered" :key="movie.id">
          <div class="bg-black h-[15rem] w-[25rem]">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`"
              class="object-contain h-full w-full"
            />
          </div>
          <div class="space-y-4 flex flex-col py-4 flex-1">
            <div class="font-bold text-2xl">{{movie.title}}</div>
            <div class="flex-1 w-3/5">
              {{movie.overview}}
            </div>
            <div class="font-bold">+ Add To Watch List</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Watch Now Modal -->
    <div
      class="
        absolute
        w-full
        h-full
        top-0
        left-0
        bg-opacity-90 bg-black
        flex
        items-center
        justify-center
      "
      v-if="showModal"
    >
      <XIcon
        class="w-6 h-6 -mb-1 ml-2 absolute top-10 right-10 text-white"
        @click="() => (showModal = false)"
      ></XIcon>
      <iframe
        width="600"
        height="400"
        src="https://www.youtube.com/embed/c1njUZSs8XE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </main>
</template>
