import React from "react";
import { IoMdClose } from "react-icons/io";
import { Card } from "@/components/ui/card";
import { FaPlus } from "react-icons/fa6";
import { Badge } from "../ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Deals = () => {
  return (
    <aside className="p-3">
      <div className="flex justify-between">
        <p className="text-blue-500 font-semibold">Deals</p>{" "}
        <p className="flex gap-1 items-center text-sm">
          <span>
            <IoMdClose />
          </span>
          Close
        </p>
      </div>

      <Card className="flex justify-center items-center p-4 rounded-none mt-5">
        <div className="flex justify-center items-center">
          <span className="flex justify-center items-center gap-3 text-blue-500 font-semibold">
            <FaPlus />
            <p>Create New Deals</p>
          </span>
        </div>
      </Card>
      <Card className="p-4 rounded-none mt-3">
        <p className="text-slate-400 mb-1">Closing date 10 July 2024</p>
        <p className="text-blue-500 font-semibold mb-1">Web Development</p>
        <p className="mb-1">$120,000</p>
        <Badge variant="secondary" className=" rounded-sm bg-blue-100">
          <p className="text-blue-500">Contract Sent</p>
        </Badge>
      </Card>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Tickets</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Attachments</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Playbook</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default Deals;
