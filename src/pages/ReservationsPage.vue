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
                src="/src/assets/calendar-dark.svg"
                alt="logo"
                class="h-10 w-10 mr-2 mb-2"
            />
            <h1>Réservations</h1>
          </div>
          <hamburger-menu @toggleMenu="toggleMenu"></hamburger-menu>
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
import HamburgerMenu from "../components/HamburgerMenu.vue";
import {ref} from "vue";
import MobileMenu from "../components/MobileMenu.vue";

const menuOpened = ref(false);

const toggleMenu = () => {
  menuOpened.value = !menuOpened.value;
};

</script>

<style scoped></style>
