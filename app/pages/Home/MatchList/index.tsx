import React from "react";
import { MatchType } from "@/app/types/entities/MatchTypes";
import MatchCard from "../MatchCard";

type MatchListProps = {
  matches: MatchType[];
};

const MatchList = ({ matches }: MatchListProps) => {
  return (
    <div className="flex flex-col gap-3">
      {matches.map((match, i) => (
        <MatchCard key={`${match.title} ${i}`} match={match}></MatchCard>
      ))}
    </div>
  );
};

export default MatchList;
