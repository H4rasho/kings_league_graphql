import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";

export const typeDefs = gql`
  type Presidents {
    id: ID
    name: String
    image: String
    teamId: String
  }

  type Coaches {
    name: String
    teamName: String
    image: String
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

  type Leaderboard {
    wins: Int
    losses: Int
    scoredGoals: Int
    concededGoals: Int
    yellowCards: Int
    redCards: Int
    rank: Int
    team: Teams
  }

  type Query {
    hello: String
    lol: String
    teams: [Teams]
    presidents: [Presidents]
    leaderboard: [Leaderboard]
    coaches: [Coaches]
  }
`;
