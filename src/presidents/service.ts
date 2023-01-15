export const getPresidents = async () => {
  const presidents = await Deno.readTextFile("./db/presidents.json");
  return JSON.parse(presidents);
};
