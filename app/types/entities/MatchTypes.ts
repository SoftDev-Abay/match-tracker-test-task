import { TeamType } from "./TeamTypes";

type MatchStatus = "Scheduled" | "Ongoing" | "Finished";

type MatchType = {
  time: string;
  title: string;
  homeTeam: TeamType;
  awayTeam: TeamType;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
};

export type { MatchStatus, MatchType };
