<template>
  <div class="flex lg:hidden mr-8 pt-1 items-start">
    <button class="space-y-1.5" @click="$emit('toggleMenu')">
      <div class="w-6 h-1 bg-gray-800"></div>
      <div class="w-6 h-1 bg-gray-800"></div>
      <div class="w-6 h-1 bg-gray-800"></div>
    </button>
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits(["toggleMenu"]);

const toggleMenu = () => {
  emit("toggleMenu");
};
</script>

<style scoped>

</style>