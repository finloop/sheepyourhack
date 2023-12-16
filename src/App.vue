<script setup>
import Card from "./components/Card.vue";
import { ref } from "vue";

const data1 = [
  {
    title: "Koncert Sanah Tauron arena Kraków",
    likes: 231,
    day: "12",
    month: "GRU",
    tags: ["#koncert", "#sanah"],
    image: "/src/assets/sanah_2024_1080x1080-300x300.jpg",
    links: "https://www.tauronarenakrakow.pl/event/sanah-2/",
    imageAlt: "Plakat z Sanah",
  },
  {
    title: "Koncert Iron Maiden, Tauron arena Kraków",
    likes: 422,
    day: "17",
    month: "CZE",
    tags: ["#koncert", "#ironmaiden"],
    image: "/src/assets/JP_TAK_1080x1080-300x300.jpg",
    links: "https://www.tauronarenakrakow.pl/event/iron-maiden-13-06-2023/",
    imageAlt: "Plakat z Iron Maiden",
  }
];


const data2 = [
    {
        "title": "Koncert Sanah Tauron arena Kraków",
        "links": "https://karnet.krakowculture.pl/en/jazz-concert",
        "likes": 12,
        "day": "15",
        "month": "GRU",
        "tags": ["#koncert", "#sanah"],
        "image": "/src/assets/1.jpg",
        "imageAlt": "Plakat z Sanah"
    },
    {
        "title": "Jazz Concert in the Park",
        "links": "https://karnet.krakowculture.pl/en/jazz-concert",
        "likes": 11,
        "day": "15",
        "month": "JUL",
        "tags": ["#jazz", "#concert"],
        "image": "/src/assets/4.webp",
        "imageAlt": "Jazz Concert in Krakow's Central Park"
    },
    {
        "title": "16th Divine Comedy International Theatre Festival ",
        "links": "https://karnet.krakowculture.pl/en/51167-krakow-16th-divine-comedy-international-theatre-festival",
        "likes": 19,
        "day": "20",
        "month": "JUL",
        "tags": ["#dance", "#music"],
        "image": "/src/assets/2.jpg",
        "imageAlt": "Historical Tour of Krakow's Old Town"
    },
    {
        "title": "Wielka Wieś Market",
        "links": "https://karnet.krakowculture.pl/en/51338-krakow-wielka-wies-market",
        "likes": 121,
        "day": "01",
        "month": "AUG",
        "tags": ["#art", "#exhibition"],
        "image": "/src/assets/3.jpg",
        "imageAlt": "Contemporary Art Exhibition at Krakow Art Gallery"
    }
];

let input = ref("");

function filteredList() {
  const arr1 =  data1.filter((el) =>
    el.title.toLowerCase().includes(input.value.toLowerCase())
  );
  const arr2 = data2.filter((el) =>
    el.title.toLowerCase().includes(input.value.toLowerCase())
  );
  return arr1.concat(arr2);
}

</script>

<template>
  <div class="flex flex-col h-screen">
    <!-- Top Bar -->
    <div class="flex text-blackflex justify-between items-center h-18 pt-10">
      <span class="nice-text text-2xl font-bold text-slate-700 px-4"
        >Social spot</span
      >
      <!-- Using utilities: -->
      <button class="text-white font-bold py-2 px-4 rounded">
        <img
          class="object-scale-down h-6"
          src="./assets/three-dots-svgrepo-com.svg"
          alt="bell"
        />
      </button>
    </div>

    <!-- Search Bar -->
    <div class="flex mx-12 p-4 -mb-10 z-10">
      <div
        class="flex bg-white w-full rounded-full px-4 py-2 pt-3 border-2 border-black"
      >
        <img
          class="object-scale-down h-5 pr-2"
          src="./assets/search.svg"
          alt="search"
        />
        <input class="outline-none" placeholder="What are you looking for?" v-model="input"/>
      </div>
    </div>

    <!-- If input is empty, show scrolling Cards -->
    <div v-if="input === ''">
      <!-- Scrolling Cards -->
      <div class="bg-amber-100 rounded-tl-lg rounded-tr-lg pt-10">
        <h1 class="ml-5 text-2xl nice-text">Recomended</h1>
        <div
          class="flex flex-no-wrap scrolling-touch-items scrollbar-hide items-start overflow-x-scroll"
        >
            <Card
              v-for="prop in data1"
              class="flex-none w-1/2 md:w-1/3 md:pb-4 border bg-white ml-5 my-3"
              v-bind="prop"
            />
        </div>
      </div>
      <div class="bg-amber-100 ">
        <h1 class="ml-5 text-2xl nice-text">Concerts</h1>
        <div
          class="flex flex-no-wrap scrolling-touch-items scrollbar-hide items-start overflow-x-scroll"
        >
            <Card
              v-for="prop in data2"
              class="flex-none w-1/2 md:w-1/3 md:pb-4 border bg-white ml-5 my-3"
              v-bind="prop"
            />
        </div>
      </div>
    </div>
    <!-- Else -->
    <div v-else>
      <div class="bg-amber-100 rounded-tl-lg rounded-tr-lg pt-10">
        <h1 class="ml-5 text-2xl nice-text">Wyszukiwanie</h1>
        <div
          class="flex flex-no-wrap scrolling-touch-items scrollbar-hide items-start overflow-x-scroll"
        >
            <Card
              v-for="prop in filteredList()"
              class="flex-none w-1/2 md:w-1/3 md:pb-4 border bg-white ml-5 my-3"
              v-bind="prop"
            />
        </div>
      </div>
    </div>

    <div class="flex-1 bg-amber-100"></div>
    <!-- Bottom Navigation -->
    <div class="fixed bottom-3 w-full flex text-white p-2 px-20">
      <button
        class="w-1/2 items-center justify-center rounded-full bg-slate-700 h-12 m-4"
      >
        <i class="fa fa-envelope pr-2"></i>
        <span class="text-xs">Events</span>
      </button>
      <button
        class="w-12 items-center justify-center rounded-full bg-slate-700 h-12 m-4"
      >
        <i class="fa fa-map-marker"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.nice-text {
  font-family: "Playfair Display", serif;
}
</style>
