import { defineStore } from "pinia";
import { Block, Lockio } from "../models/models";
import { lockioService } from "../services/lockio-service";

export const useLockioStore = defineStore({
  id: "lockio",
  state: (): {
    blocks: Block[];
    lockios: Map<number, Lockio[]>;
  } => ({
    blocks: [],
    lockios: new Map(),
  }),
  actions: {
    async fetchAllLockios() {
      this.blocks = await lockioService.fetchBlocks();
      for (const block of this.blocks) {
        this.lockios.set(block.id, await lockioService.fetchLockios(block.id));
      }
    },
  },
});
