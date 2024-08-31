import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="flex justify-between p-3 items-center max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItems title="home" address="/" Icon={AiFillHome} />
        <MenuItems title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-3 items-center">
        <DarkMode />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-yellow-400 rounded-md p-1">
            IMDB
          </span>{" "}
          <span className="text-xl hidden sm:inline font-semibold">Clone</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
