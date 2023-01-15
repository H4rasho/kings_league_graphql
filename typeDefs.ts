import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";

export const typeDefs = gql`
  type Presidents {
    id: ID
    name: String
    image: String
    teamId: String
  }

  type CoachInfo {
    name: String
    image: String
  }

  type Players {
    id: String
    dorsalName: String
    fullName: String
    role: String
    image: String
  }

  type Teams {
    id: String
    color: String
    name: String
    image: String
    imageWhite: String
    url: String
    presidentId: String
    channel: String
    coach: String
    shortName: String
    coachInfo: CoachInfo
    players: [Players]
    socialNetworks: [String]
  }

  type Query {
    hello: String
    lol: String
    teams: [Teams]
    presidents: [Presidents]
  }
`;
