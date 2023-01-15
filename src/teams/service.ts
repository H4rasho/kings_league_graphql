
export async function getTeams ()  {

 try {
  const teams = await Deno.readTextFile("./db/teams.json")
  if(!teams) return [];
  return JSON.parse(teams);
 } catch (err){
   console.log(err);
   return []
 }
}

