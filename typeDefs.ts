import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";

export const typeDefs = gql`
  type Teams {
    id: ID
    color: String
    name: String
    image: String
    imageWhite: String
    url: String
    presiendtId: String
    cannel: String
  }

  type Query {
    hello: String
    lol: String
    teams: [Teams]
  }
`;
