<template>
  <div class="flex flex-col h-screen">
    <!-- Top Bar -->
    <div class="flex text-blackflex justify-between items-center h-18 pt-10">
      <span class="nice-text text-2xl font-bold text-slate-700 px-4"
        >Hi there!</span
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
        <input class="outline-none" placeholder="What are you looking for?" />
      </div>
    </div>

    <!-- Scrolling Cards -->
    <div class="bg-amber-100 rounded-tl-lg rounded-tr-lg pt-10">
      <h1 class="ml-5 text-2xl nice-text">Concerts</h1>
      <div
        class="flex flex-no-wrap scrolling-touch-items items-start overflow-x-scroll"
      >
        <Card
          class="flex-none w-1/2 md:w-1/3 md:pb-4 border bg-white ml-5 my-3"
        >
        </Card>
        <Card
          class="flex-none w-1/2 md:w-1/3 md:pb-4 border bg-white ml-5 my-3"
        >
        </Card>
      </div>
    </div>

    <div class="flex-1 bg-amber-100"></div>
    <!-- Bottom Navigation -->
    <div class="fixed bottom-3 w-full flex text-white p-10 px-20">
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

<script setup>
import Card from "./components/Card.vue";
</script>

<style scoped>
.nice-text {
  font-family: "Playfair Display", serif;
}
</style>
