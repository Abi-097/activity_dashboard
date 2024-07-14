"use client";
import React, { useState } from "react";
import { FaBell, FaQuestionCircle, FaSearch } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaXmark, FaBars } from "react-icons/fa6";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 h-[5.5rem]">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 ">
          {/* Left side - Search Bar */}
          <div className="flex items-center relative">
            <FaSearch className="absolute left-3 text-gray-500" size={16} />
            <input
              type="text"
              className="pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Search..."
            />
          </div>

          {/* Right side - Menu Options */}
          <div className="lg:flex items-center space-x-4 gap-6 hidden">
            {/* Notification */}
            <div className="relative">
              <span className="flex items-center gap-2 cursor-pointer">
                <FaBell
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  size={20}
                />
                <p>Notifications</p>
              </span>
            </div>

            {/* Help Center */}
            <div className="relative ">
              <span className="flex items-center gap-2 cursor-pointer">
                <FaQuestionCircle
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  size={20}
                />
                <p>Help Center</p>
              </span>
            </div>

            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                <span className="flex items-center gap-2 cursor-pointer">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p>Dana Morris</p>
                </span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
          {/* mobile menu */}
          <div
            className="flex justify-center items-center lg:hidden mt-5"
            onClick={toggleMenu}
          >
            <div>
              {isMenuOpen ? (
                <FaXmark className="text-black text-3xl dark:text-white cursor-pointer" />
              ) : (
                <FaBars className="text-black text-3xl dark:text-white cursor-pointer" />
              )}
            </div>
          </div>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } w-[250px] h-fit bg-slate-800 p-4 absolute top-[80px] right-0`}
          >
            <ul className="flex flex-col justify-center items-center gap-2 w-full ">
              <span className="flex items-center justify-center  gap-2 font-semibold cursor-pointer p-3 rounded-lg hover:bg-yellow-500 hover:text-black w-full text-center">
                <FaBell className="text-white" size={20} />
                <p className="text-white ">Notifications</p>
              </span>
              <span className="flex items-center justify-center  gap-2 font-semibold cursor-pointer p-3 rounded-lg hover:bg-yellow-500 hover:text-black w-full text-center">
                <FaQuestionCircle className="text-white" size={20} />
                <p className="text-white ">Help Center</p>
              </span>
              <span className="flex items-center justify-center  gap-2 font-semibold cursor-pointer p-3 rounded-lg hover:bg-yellow-500 hover:text-black w-full text-center">
                <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <span className="flex items-center gap-2 cursor-pointer">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-white ">Dana Morris</p>
                  </span>
                </button>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
