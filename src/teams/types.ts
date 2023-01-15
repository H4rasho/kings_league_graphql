import { Player } from "../players/types.ts";
import { CoachInfo } from "../coach/types.ts";

export interface Team {
  id: string;
  color: string;
  name: string;
  image: string;
  imageWhite: string;
  url: string;
  presidentId: string;
  channel: string;
  socialNetworks: string[];
  players: Player[];
  coach: string;
  shortName: string;
  coachInfo: CoachInfo;
}
