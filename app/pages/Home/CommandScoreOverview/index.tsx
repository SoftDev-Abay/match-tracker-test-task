import React, { useState } from "react";
import Card from "@/app/components/Card";
import { TeamType } from "@/app/types/entities/TeamTypes";
import AngelPlayerIcon from "@/app/icons/AngelPlayerIcon";

const CommandScoreOverview = ({ overview }: { overview: TeamType }) => {
  return (
    <div className="flex flex-col gap-2 flex-grow">
      <div className="grid grid-cols-3 gap-2 ">
        {overview.players.slice(0, 3).map((playerOverview, index) => (
          <Card
            key={index}
            className="py-2 px-4 flex justify-between gap-2 items-center "
            background={"gray"}
          >
            <div className="flex gap-2 items-center">
              <AngelPlayerIcon />
              <span className="text-white">{playerOverview.username}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500">Убийств:</span>
              <span className="text-white">{playerOverview.kills}</span>
            </div>
          </Card>
        ))}

        <Card className="flex justify-around col-span-3" background={"gray"}>
          <div className="flex gap-2">
            <span className="text-gray-500">Points:</span>
            <span className="text-white">{overview.points}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Место:</span>
            <span className="text-white">{overview.place}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Всего Убийств:</span>
            <span className="text-white">{overview.total_kills}</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CommandScoreOverview;
