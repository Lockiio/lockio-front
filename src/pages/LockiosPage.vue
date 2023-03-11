<template>
  <div v-show="!menuOpened">
    <div class="flex flex-row">
      <div class="hidden lg:block">
        <vertical-navbar></vertical-navbar>
      </div>
      <div class="flex flex-col h-screen w-screen ml-8 md:overflow-auto">
        <!-- TITLE -->
        <div class="flex flex-row justify-between text-4xl font-bold mt-8">
          <div class="flex">
            <img
              src="/src/assets/locker-dark.svg"
              alt="logo"
              class="h-10 w-10 mr-2 mb-2"
            />
            <h1>Lockios</h1>
          </div>
          <hamburger-menu @toggleMenu="toggleMenu"></hamburger-menu>
        </div>

        <!-- BLOCKS -->
        <div class="mt-12 ml-2">
          <div v-for="block in blocks">
            <lockios-block
              :block="block"
              :lockios="findLockios(block.id)"
            ></lockios-block>
            <div
              class="w-100 h-1 mx-auto my-4 mr-8 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-show="menuOpened">
    <mobile-menu @closeMenu="toggleMenu"></mobile-menu>
  </div>
</template>

<script setup lang="ts">
import VerticalNavbar from "../components/navbars/VerticalNavbar.vue";
import LockiosBlock from "../components/lockios/LockiosBlock.vue";
import MobileMenu from "../components/MobileMenu.vue";

import { useLockioStore } from "../stores/lockio-store";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import HamburgerMenu from "../components/HamburgerMenu.vue";

const $router = useRouter();

const lockioStore = useLockioStore();

lockioStore.fetchAllLockios();
const blocks = computed(() => lockioStore.blocks);

const findLockios = (blockId: number) => {
  return lockioStore.lockios.has(blockId)
    ? lockioStore.lockios.get(blockId)
    : [];
};

const menuOpened = ref(false);

const toggleMenu = () => {
  menuOpened.value = !menuOpened.value;
};
</script>

<style scoped></style>
