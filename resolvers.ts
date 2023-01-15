import { getPresidents } from "./src/presidents/service.ts";
import { getTeams } from "./src/teams/service.ts";

export const resolvers = {
  Query: {
    hello: () => `Hello, World!`,
    lol: () => "Lol",
    teams: () => getTeams(),
    presidents: () => getPresidents(),
  },
};
