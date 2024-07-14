import React from "react";
import { IoTimerOutline } from "react-icons/io5";
import { Timeline } from "rsuite";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TaskCard from "./TaskCard";
import { HistoryActivity } from "@/lib/data";

const ActivityHistory = () => {
  return (
    <div>
      <div className="flex items-center gap-2 text-blue-500 mt-4 mb-4">
        <IoTimerOutline size={25} />
        <p className="font-semibold">Activity History</p>
      </div>
      <div>
        <Timeline>
          {HistoryActivity.map((data, index) => (
            <Timeline.Item key={index}>
              <p>{data.time}</p>
              <TaskCard data={data} />
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default ActivityHistory;
