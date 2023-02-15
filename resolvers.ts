import { API_KEYS } from "./setup.ts";
import { getFromDb } from "./src/index.ts";

export const resolvers = {
  Query: {
    hello: () => `Hello, World!`,
    lol: () => "Lol",
    teams: () => getFromDb(API_KEYS.teams),
    presidents: () => getFromDb(API_KEYS.presidents),
    leaderboard: () => getFromDb(API_KEYS.leaderboard),
    coaches: () => getFromDb(API_KEYS.coaches),
  },
};
