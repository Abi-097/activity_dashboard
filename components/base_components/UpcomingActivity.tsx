import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import TaskCard from "./TaskCard";
import { upcomingData } from "@/lib/data";
const UpcomingActivity = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex items-center gap-2 text-blue-500">
        <CiCalendarDate size={25} />
        <p className="font-semibold">Upcoming Activities</p>
      </div>
      {upcomingData.map((data, index) => (
        <div key={index} className="w-full rounded-md">
          <div
            className="flex justify-between p-4 cursor-pointer"
            onClick={toggleAccordion}
          >
            <div className="flex justify-between w-full">
              <span className="flex items-center gap-2 text-sm">
                <FaTasks className="text-blue-500" />
                <p className="text-slate-400 font-semibold">Task created by</p>
                <p className="text-slate-400">{data.created}</p>
              </span>
              <span className="hidden lg:flex items-center gap-2 text-sm">
                <p>Due</p>
                <CiCalendarDate className="text-blue-500" size={22} />
                <p>{data.time}</p>
              </span>
            </div>
            <div className="flex items-center ml-2">
              {isOpen ? (
                <AiOutlineUp className="text-slate-400" />
              ) : (
                <AiOutlineDown className="text-slate-400" />
              )}
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4 border-t">
              <TaskCard data={data} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UpcomingActivity;
