<template>
  <div class="flex flex-col md:flex-row justify-between">
    <div class="w-auto md:w-1/4">
      <img src="/src/assets/reserver.svg" alt="logo" class="h-48 w-48 m-auto"/>
      <div class="font-bold">Réserver votre Lockio</div>
      <div class="mb-8">
        {{ lorem }}
      </div>
    </div>
    <div class="w-auto md:w-1/4">
      <img src="/src/assets/zen.svg" alt="logo" class="h-48 w-48 m-auto"/>
      <div class="font-bold">Partir Zen</div>
      <div class="mb-8">
        {{ lorem }}
      </div>
    </div>
    <div class="w-auto md:w-1/4">
      <img src="/src/assets/contribuer.svg" alt="logo" class="h-48 w-48 m-auto"/>
      <div class="font-bold">Contribuer</div>
      <div class="mb-8">
        {{ lorem }}
      </div>
    </div>
  </div>
</template>

<script setup>
const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem\n" +
    "        dolor, tristique vitae condimentum sed, porta efficitur ipsum.\n" +
    "        Suspendisse potenti. Quisque ultricies viverra ex, ac elementum augue\n" +
    "        porttitor quis. Vestibulum eleifend sodales leo, vitae molestie augue\n" +
    "        blandit nec.";
</script>

<style scoped></style>
