<template>
  <div class="flex flex-col">
    <div v-for="lockioArray in lockiosSplit" class="flex flex-row">
      <div v-for="lockio in lockioArray">
        <button
            class="bg-gray-600 w-24 h-24 mr-2 mt-2 rounded-xl disabled:opacity-50"
            :class="{
            available: is(lockio.id, 'AVAILABLE'),
            occupied: is(lockio.id, 'OCCUPIED'),
            active: selectedLockio.id === lockio.id,
            inactive:
              selectedLockio.id !== lockio.id &&
              selectedLockio.id !== undefined,
          }"
            @click="updateSelected(lockio)"
            :disabled="
            lockio.status !== 'AVAILABLE' && lockio.status !== 'OCCUPIED'
          "
        >
          <span class="text-xl">{{ lockio.localId }}</span>
          <br/>
          <span class="font-bold">{{ lockio.size }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, PropType, ref} from "vue";
import {Lockio} from "../../models/models";

const props = defineProps({
  lockios: {
    type: Array as PropType<Lockio[]>,
    required: true,
  },
});

const lockios = computed(() => props.lockios);

const splitArrays = (array: Lockio[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const is = (id: number, state: string) => {
  const lockio = lockios.value.find((lockio) => lockio.id === id);
  return lockio?.status === state;
};

let selectedLockio = ref({} as Lockio);

const updateSelected = (lockio: Lockio) => {
  selectedLockio.value = lockio as Lockio;
};

const lockiosSplit = computed(() => splitArrays(lockios.value, 3));
</script>

<style scoped>
.available {
  background-color: #6ed26e;
}

.available.active {
  background-color: #6ed26e;
  animation: pulse-available 0.8s infinite alternate;
  box-shadow: darkslateblue 0 0 0 3px;
}

.occupied {
  background-color: #ff7c7c;
}

.occupied.active {
  background-color: #ff7c7c;
  animation: pulse-occupied 0.8s infinite alternate;
  box-shadow: darkslateblue 0 0 0 3px;
}

@keyframes pulse-available {
  0% {
    background-color: #6ed26e;
  }
  100% {
    background-color: #4e984e;
  }
}

@keyframes pulse-occupied {
  0% {
    background-color: #ff7c7c;
  }
  100% {
    background-color: #eb5b5b;
  }
}
</style>
