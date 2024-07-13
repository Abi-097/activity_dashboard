import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UpcomingActivity = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex items-center gap-2 text-blue-500">
        <CiCalendarDate size={25} />
        <p className="font-semibold">Upcoming Activities</p>
      </div>
      {/* <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger >
            <div className="flex justify-between">
            <span className="flex items-center gap-2 text-sm">
              <FaTasks className="text-blue-500" />
              <p className="text-slate-400 font-semibold">Task created by</p>
              <p className="text-slate-400">Lucy Lockwood</p>
            </span>
            <span className="flex items-center gap-2 text-sm">
              <p>Due</p>
              <CiCalendarDate /> <p>Today 11:00 PM</p>
            </span>
            </div>
           
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
      <div className="w-full rounded-md">
        <div
          className="flex justify-between p-4 cursor-pointer bg-gray-100"
          onClick={toggleAccordion}
        >
          <div className="flex justify-between w-full">
            <span className="flex items-center gap-2 text-sm">
              <FaTasks className="text-blue-500" />
              <p className="text-slate-400 font-semibold">Task created by</p>
              <p className="text-slate-400">Lucy Lockwood</p>
            </span>
            <span className="flex items-center gap-2 text-sm md:hidden">
              <p>Due</p>
              <CiCalendarDate />
              <p>Today 11:00 PM</p>
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
            {/* Content goes here */}
            <p>This is the content of the accordion</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingActivity;
