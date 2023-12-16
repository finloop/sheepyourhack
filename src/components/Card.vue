<template>
  <div class="flex flex-col overflow-hidden rounded-md w-30">
    <img
      class="w-full object-cover h-44"
      src="../assets/card-top.jpg"
      alt="Sunset in the mountains"
    />
    <div class="relative px-6 pt-4 pb-2">
      <div
        class="text-center bg-white rounded-md py-1 px-5 absolute right-3 -top-7 drop-shadow-lg"
      >
        <div class="text-xl font-semibold">16</div>
        <div class="p-0 -mt-1 font-semibold">JAN</div>
      </div>
      <div class="text-xs">
        <span>#rzeszów</span>
        <span>#kraków</span>
      </div>
      <div class="font-bold text-sm">
        Koncert The Weekend Kraków Tauron Arena
      </div>
      <div class="text-xs">
        <i class="fa-solid fa-heart" style="color: #ff4033"></i>
        2137
      </div>
      <span class="float-right text-xs font-bold">See more</span>
    </div>
  </div>
</template>

<style scoped>
span {
  padding-right: 3px;
  color: #4a5568;
}
</style>
