export const getPresidents = () => {
  const presidents = Deno.readTextFileSync("./db/presidents.json");
  return JSON.parse(presidents);
};
