import React, { useState } from "react";
import Card from "@/app/components/Card";
import { MatchType } from "@/app/types/entities/MatchTypes";
import ChevroletDownIcon from "@/app/icons/ChevroletDownIcon";
import ChevroletUpIcon from "@/app/icons/ChevroletUpIcon";
import { Badge } from "@/app/components/Badge";
import { cn } from "@/app/utils/helpers";
import CrownCommandIcon from "@/app/icons/CrownCommandIcon";
import CommandScoreOverview from "../CommandScoreOverview";
import { getVisibleStatus } from "@/app/utils/helpers";

type MatchCardProps = {
  match: MatchType;
};

const MatchCard = ({ match }: MatchCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Card className="flex-grow bg-[#0B0E12]" background={"none"}>
      <div
        className="flex gap-2 flex-grow items-center cursor-pointer"
        onClick={handleToggleOpen}
      >
        <div className="flex justify-between items-center flex-grow">
          <div className="flex gap-[14px] items-center">
            <CrownCommandIcon />
            <span className="text-white text-base-semibold">
              {match.homeTeam.name}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-1 text-heading4-semibold text-white">
              {match.homeScore} : {match.awayScore}
            </span>
            <Badge
              className={cn({
                "bg-warning": match.status === "Scheduled",
                "bg-success": match.status === "Ongoing",
                "bg-danger": match.status === "Finished",
              })}
            >
              <span className="text-subtle-semibold text-white">
                {getVisibleStatus(match.status)}
              </span>
            </Badge>
          </div>

          <div className="flex gap-[14px] items-center">
            <span className="text-white text-base-semibold">
              {match.awayTeam.name}
            </span>
            <CrownCommandIcon />
          </div>
        </div>

        {isOpen ? (
          <ChevroletDownIcon color="white" />
        ) : (
          <ChevroletUpIcon color="white" />
        )}
      </div>

      <div
        className={cn(
          " flex gap-8 transition-all duration-300 overflow-hidden flex-wrap",
          isOpen ? "mt-8 p-3 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <CommandScoreOverview overview={match.homeTeam} />
        <CommandScoreOverview overview={match.awayTeam} />
      </div>
    </Card>
  );
};

export default MatchCard;
