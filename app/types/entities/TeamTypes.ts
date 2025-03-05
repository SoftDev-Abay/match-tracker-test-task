import { PlayerType } from "./PlayerTypes";

type TeamType = {
  name: string;
  players: PlayerType[];
  points: number;
  place: number;
  total_kills: number;
};

export type { TeamType };
