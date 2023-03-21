<template>
  <div id="container">
    <NavBar></NavBar>
    <img class="absolute -left-80 top-24 w-3/5 h-1/3" src="/src/assets/blur.svg" alt="logo"/>
    <div class="flex-col text-center">
      <TitleSubtitle></TitleSubtitle>
      <div class="mt-8">
        <button
            class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            @click="$router.push({ name: 'Login' })"
        >
          Réserver un Lockio
          <font-awesome-icon icon="fa-solid fa-chevron-right"/>
        </button>
      </div>
      <div class="mt-16 text-3xl font-extrabold">Lockio, c'est quoi ?</div>
    </div>
    <div class="mt-8">
      <LandingPageRow></LandingPageRow>
    </div>
    <div class="mt-8">
      <MainQuestions></MainQuestions>
      <img class="absolute -right-60 bottom-2 w-1/2 h-1/5 -z-50" src="/src/assets/blur.svg" alt="logo"/>
    </div>
  </div>
</template>

<script setup>
import NavBar from "../components/navbars/NavBar.vue";
import TitleSubtitle from "../components/TitleSubtitle.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import LandingPageRow from "../components/LandingPageRow.vue";
import MainQuestions from "../components/MainQuestions.vue";
</script>

<style scoped>
#container {
  margin: 4vh 10vw 4vh 10vw;
}
</style>
