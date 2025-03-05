import { MatchType } from "../entities/MatchTypes";

export interface SuccessfulMatchesResponse {
  ok: boolean;
  data: {
    matches: MatchType[];
  };
}
