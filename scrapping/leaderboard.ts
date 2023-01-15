export const scrapingLeaderboard = async () => {
  const resp = await fetch("https://api.kingsleague.dev/leaderboard");
  const data = await resp.json();
  try {
    Deno.writeTextFile("./db/leaderboard.json", JSON.stringify(data));
    console.log("written");
  } catch (err) {
    console.log(err);
  }
};

scrapingLeaderboard();
