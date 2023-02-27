<template>
  <!-- This page is still on construction -->
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
        <img src="/src/assets/github.svg" alt="github" class="h-10 w-10" />
      </a>
    </div>
    <div class="flex flex-row mt-8">
      <button
        @click="$router.push({ name: 'Home' })"
        class="bg-gray-700 hover:bg-gray-900 text-white rounded-xl p-3 text-center"
      >
        Accueil
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
