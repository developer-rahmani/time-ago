"use client"

// !! Types
import { useEffect, useState } from "react";

// !! Hooks
import { DayType } from "./index.types";

export const TimeAgo = ({ day }: DayType) => {
  const [newDate, setNewDate] = useState<string>("");

  useEffect(() => {
    const date: any = typeof day === "object" ? day : new Date(day);
    const today: any = new Date();
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const months = Math.round(days / 30);
    const years = Math.round(months / 12);

    if (seconds < 60) {
      setNewDate("just now");
    } else if (minutes < 60) {
      setNewDate(`${minutes} minute ago`);
    } else if (hours < 24) {
      setNewDate(`${hours} hour ago`);
    } else if (days < 30) {
      setNewDate(`${days} day ago`);
    } else if (months < 12) {
      setNewDate(`${months} month ago`);
    } else {
      setNewDate(`${years} year ago`);
    }
  }, [day]);

  return <time className="text-lg text-gray-400">{newDate}</time>;
};
