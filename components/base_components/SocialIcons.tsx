import React from "react";
import { IoCallOutline, IoEllipsisHorizontal } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

const SocialIcons = () => {
  const icons = [
    { icon: <GoPlus />, label: "Log" },
    { icon: <IoCallOutline />, label: "Call" },
    { icon: <AiTwotoneMail />, label: "Email" },
    { icon: <IoEllipsisHorizontal />, label: "More" },
  ];

  return (
    <div className="flex space-x-5">
      {icons.map((item, index) => (
        <div key={index} className="flex flex-col items-center space-y-2">
          <div className="flex items-center justify-center border border-slate-500 rounded-full w-9 h-9 text-slate-500">
            {item.icon}
          </div>
          <p className="text-slate-500 text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
