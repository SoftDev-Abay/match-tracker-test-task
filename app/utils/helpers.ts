import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MatchStatus } from "../types/entities/MatchTypes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getVisibleStatus = (status: MatchStatus) => {
  switch (status) {
    case "Scheduled":
      return "Scheduled";
    case "Ongoing":
      return "Live";
    case "Finished":
      return "Finished";
    default:
      return "error";
  }
};
