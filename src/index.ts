import { API_KEYS } from "../setup.ts";

const DB_PATH = "./db";

export const getFromDb = async (path: API_KEYS) => {
  const fullPath = `${DB_PATH}/${path}.json`;

  const data = await Deno.readTextFile(fullPath);
  return JSON.parse(data);
};
