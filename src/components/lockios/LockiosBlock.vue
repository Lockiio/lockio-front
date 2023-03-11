<template>
  <div class="lockio-block flex flex-col md:flex-row mb-12 mr-8">
    <div class="md:w-1/2 md:mr-8">
      <div class="text-2xl font-bold">
        <span v-if="props.block.status === 'AVAILABLE'"> 🟢 </span>
        <span v-else> 🔴 </span>
        {{ title }}
      </div>
      <div class="mt-6">
        <locker-grid :lockios="props.lockios"></locker-grid>
      </div>
    </div>
    <div class="mt-8 md:w-1/2 md:mt-0">
      <div class="text-2xl font-bold">Infos utiles</div>
      <div class="mt-2 md:mt-6">
        <useful-infos :lockios="props.lockios"></useful-infos>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LockerGrid from "./LockerGrid.vue";
import UsefulInfos from "./UsefulInfos.vue";
import { Block, Lockio } from "../../models/models";

const props = defineProps<{
  block: Block;
  lockios: Lockio[];
}>();

const title = props.block.name;
</script>
