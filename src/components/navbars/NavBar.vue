<template>
  <div>
    <nav class="w-100 flex items-center justify-between">
      <div class="flex items-center cursor-pointer" @click="$router.push('/')">
        <img src="/src/assets/lockio.svg" alt="logo" class="h-10 w-10" />
        <span class="ml-4 text-xl font-bold">Lockio</span>
      </div>
      <!-- About button -->
      <button
        class="bg-gray-700 hover:bg-gray-900 text-white rounded-xl p-2 text-center"
        @click="$router.push('contact')"
      >
        Contact
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
