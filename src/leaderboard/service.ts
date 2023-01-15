export const getLeaderboard = async () => {
  const leaderboard = await Deno.readTextFile("./db/leaderboard.json");
  return JSON.parse(leaderboard);
};
