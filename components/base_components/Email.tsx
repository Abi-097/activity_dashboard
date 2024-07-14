import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsPencil } from "react-icons/bs";
import { FaRegNewspaper } from "react-icons/fa";
import { Separator } from "../ui/separator";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const EmailCard = [
  {
    from: "Danielle",
    to: "Lucy Lockwood",
    date: "10 June 2024 10:00AM",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    from: "Danielle",
    to: "Lucy Lockwood",
    date: "10 June 2024 10:00AM",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
const Email = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-blue-600 hover:bg-blue-500 ml-[-15px]">
            Create new email
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full ml-8">
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BsPencil size={17} className="mr-3" />
              Create a new email
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FaRegNewspaper size={17} className="mr-3" />
              Log email activity
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Separator className="my-4" />
      {EmailCard.map((emailData, index) => (
        <Card key={index} className="w-full rounded-none p-3 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-slate-500 font-semibold">{emailData.from}</p>
                <p className="text-slate-500 text-sm">to {emailData.to}</p>
                <p className="text-slate-500 text-sm">{emailData.date}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full border border-gray-400 hover:bg-gray-200 hover:text-white transition cursor-pointer">
                <FaChevronLeft className="text-gray-500" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full hover:bg-gray-200 border border-gray-400 hover:text-white transition cursor-pointer">
                <FaChevronRight className="text-gray-500" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full hover:bg-gray-200 border border-gray-400 hover:text-white transition cursor-pointer">
                <RiDeleteBinLine className="text-gray-500" />
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="pl-3 text-slate-500">
            <p className="mb-2"> Hello {emailData.to},</p>
            <p>{emailData.body}</p>
            <p className="mt-2">
              Best, <br /> {emailData.from}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Email;
