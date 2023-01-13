export async function scrapingTeams (): Void {
 const resp = await fetch("https://api.kingsleague.dev/teams");
 const data = await resp.json();
 try {
    Deno.writeTextFile("./db/teams.json", JSON.stringify(data));
    console.log("written");
 } catch (err){
   console.log(err);
 }
}

scrapingTeams(); 
