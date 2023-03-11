import { Block, Lockio } from "../models/models";
import axios from "axios";
import { API_BACK_URL } from "../utils/constant";

async function fetchBlocks(): Promise<Block[]> {
  const response = await axios.get(API_BACK_URL + "/blocks");
  return response.data;
}

async function fetchLockios(blockId: number): Promise<Lockio[]> {
  const response = await axios.get(
    API_BACK_URL + "/blocks/" + blockId + "/lockios"
  );
  return response.data;
}

export const lockioService = {
  fetchBlocks,
  fetchLockios,
};
