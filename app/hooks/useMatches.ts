import { useQuery } from "@tanstack/react-query";
import { fetchMatches } from "../services/MatchesService";
import { SuccessfulMatchesResponse } from "../types/responses/MatchesResponse";

export const useMatches = () => {
  return useQuery<SuccessfulMatchesResponse>({
    queryKey: ["matches"],
    queryFn: fetchMatches,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });
};
