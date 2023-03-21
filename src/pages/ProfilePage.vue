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
                src="/src/assets/profile-dark.svg"
                alt="logo"
                class="h-10 w-10 mr-2 mb-2"
            />
            <h1>Profil</h1>
          </div>
          <hamburger-menu @toggleMenu="toggleMenu"></hamburger-menu>
        </div>
        <div class="flex flex-col items-center mt-16 h-screen mx-12">
          <div class="text-6xl">👷‍♂️👷‍♀️🚧</div>

          <h1 class="text-4xl font-bold mt-8">
            Cette page est encore en construction...
          </h1>
          <h2 class="text-xl mt-6">
            N'hésitez pas à nous suivre sur les réseaux sociaux pour être au courant
            de notre actualité !
          </h2>
          <div class="flex flex-row mt-8">
            <a href="https://github.com/Lockiio" target="_blank">
              <img src="/src/assets/github.svg" alt="github" class="h-10 w-10"/>
            </a>
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
import HamburgerMenu from "../components/HamburgerMenu.vue";
import MobileMenu from "../components/MobileMenu.vue";
import {ref} from "vue";

const menuOpened = ref(false);

const toggleMenu = () => {
  menuOpened.value = !menuOpened.value;
};
</script>

<style scoped></style>
