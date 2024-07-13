"use client";
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("leads");
  return (
    <div className="w-full flex flex-col">
      <div className="flex border-b border-gray-200 w-full justify-center">
        <button
          className={`px-10 py-2 -mb-px text-sm font-medium focus:outline-none ${
            activeTab === "leads"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("leads")}
        >
          Leads Info
        </button>
        <button
          className={`px-10 py-2 -mb-px text-sm font-medium focus:outline-none ${
            activeTab === "address"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("address")}
        >
          Address Info
        </button>
      </div>
      <div className="mt-4 text-left p-4">
        {activeTab === "leads" ? (
          <div>
            {/* Leads Info content goes here */}
            <p className="text-slate-400 text-sm">Email</p>
            <p className="text-sm mb-3">dennay@email.com</p>
            <p className="text-slate-400 text-sm">Phone</p>
            <p className="text-sm mb-3">(201)-555-5555</p>
            <p className="text-slate-400 text-sm">Owner</p>
            <p className="text-sm">Lockwood</p>
          </div>
        ) : (
          <div>
            {/* Address Info content goes here */}
            <p>Address Info Content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
