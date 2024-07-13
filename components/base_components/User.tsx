import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import SocialIcons from "./SocialIcons";
import Tabs from "./Tabs";

const User = () => {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen text-center mt-7">
        <Avatar className="w-[120px] h-[120px] mb-5">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-lg text-slate-600 mb-3">
          <strong>Jenny Wilson</strong>
        </p>
        <div className="flex items-center gap-3 mb-7">
          <Image src="/microsoft.png" alt="microsoft" width={20} height={20} />
          <p className="text-lg text-slate-400">Microsoft</p>
        </div>
        <Badge variant="secondary" className="mb-5">
          <span className=" flex items-center  ">
            <span className=" left-0 inline-flex h-2 w-2 rounded-full bg-green-500 mr-2" />
            <p className="text-slate-400">Last Activity: 2 days ago</p>
          </span>
        </Badge>
        <span className="mb-4">
          <SocialIcons />
        </span>
        <Tabs />
      </div>
    </>
  );
};

export default User;
