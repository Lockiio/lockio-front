<template>
  <div class="z-10 bg-neutral-800 text-white w-screen h-screen">
    <div class="flex justify-end pt-6 pr-5">
      <button
        type="button"
        class="rounded-md p-2 inline-flex items-center justify-end text-white"
        @click="$emit('closeMenu')"
      >
        <svg
          class="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div class="flex flex-col justify-center items-center text-4xl mt-16">
      <div v-for="button in buttons" class="mt-8">
        <button @click="navigateTo(button.route)">
          {{ button.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const $router = useRouter();

const emit = defineEmits(["closeMenu"]);

const closeMenu = () => {
  emit("closeMenu");
};

const buttons = [
  {
    name: "Accueil",
    route: "Home",
  },
  {
    name: "Lockios",
    route: "Lockios",
  },
  {
    name: "Réservations",
    route: "Reservations",
  },
  {
    name: "Profil",
    route: "Profile",
  },
];

const navigateTo = (route: string) => {
  $router.push({ name: route });
  closeMenu();
};
</script>

<style scoped></style>
