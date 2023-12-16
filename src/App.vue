<template>
  <div class="flex flex-col h-screen">
    <!-- Top Bar -->
    <div class="flex text-blackflex justify-between items-center h-18 pt-10">
      <span id="navbar-text" class="font-bold text-slate-700 px-4">Hi there!</span>
      <!-- Using utilities: -->
      <button class="text-white font-bold py-2 px-4 rounded">
        <img class="object-scale-down h-6" src="./assets/three-dots-svgrepo-com.svg" alt="bell" />
      </button>
    </div>

    <!-- Search Bar -->
    <div class="flex mx-12 p-4 -mb-10 z-10">
      <div class="flex bg-white w-full rounded-full px-4 py-2 pt-3 border-2 border-black">
        <img class="object-scale-down h-5 pr-2" src="./assets/search.svg" alt="search" />
        <input
          class="outline-none"
          placeholder="What are you looking for?"
        />
      </div>
    </div>

    <div class="flex bg-amber-100 rounded-tl-lg rounded-tr-lg h-10" ></div>

    <div class="flex-col bg-amber-100">
      <Card class="flex flex-col bg-slate-100 m-10"> </Card>
      <Card class="flex flex-col bg-slate-100 m-10"> </Card>
    </div>

    <div class="flex-1 bg-amber-100" ></div>
    <!-- Bottom Navigation -->
    <div class="fixed bottom-3 w-full flex text-white p-5 px-10">
      <button class="w-1/2 items-center justify-center rounded-full bg-slate-700 h-10 m-4">
        <i class="fa fa-envelope"></i>
        <span class="text-xs">Events</span>
      </button>
      <button class="w-1/2 items-center justify-center rounded-full bg-slate-700 h-10 m-4">
        <i class="fa fa-map-marker"></i>
        <span class="text-xs">Location</span>
      </button>
    </div>

  </div>
</template>

<script setup>
import Card from './components/Card.vue'
</script>

<style scoped>
#navbar-text {
  font-size: 1.5rem;
  font-family: 'Playfair Display', serif;
}
</style>