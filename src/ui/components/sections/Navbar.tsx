"use client";

import { navbar } from "@/constants/Navbar";
import LogoIcon from "@/ui/icons/LogoIcon";
import Button from "../Button";
import Link from "next/link";
import { useState } from "react";
import LineIcon from "@/ui/icons/LineIcon";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <nav className="flex flex-col lg:flex-row items-center sm:col-start-2 col-span-12 sm:col-span-10 grid-cols-12 px-4 sm:px-0 py-4 bg-bg-primary bg-opacity-95">
      <div className="flex w-full lg:w-auto justify-between items-center">
        <LogoIcon className="w-[123px] lg:w-[145px] h-[32px] lg:h-[38px] mr-10"></LogoIcon>

        <button
          className="relative w-5 h-3 block lg:hidden"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <LineIcon
            width={20}
            height={2}
            className={`absolute transition-all duration-500 ease-in-out ${
              navbarOpen ? "top-[5px] rotate-45" : "top-0 rotate-0"
            }`}
          ></LineIcon>
          <LineIcon
            width={20}
            height={2}
            className={`absolute top-[5px] transition-all duration-500 ease-in-out ${
              navbarOpen ? "opacity-0" : "opacity-100"
            }`}
          ></LineIcon>
          <LineIcon
            width={20}
            height={2}
            className={`absolute transition-all duration-500 ease-in-out ${
              navbarOpen ? "top-[5px] -rotate-45" : "top-[10px] rotate-0"
            }`}
          ></LineIcon>
        </button>
      </div>
      <div
        className={`overflow-hidden-children w-full grid overflow-hidden lg:flex justify-center lg:justify-between items-center transition-all duration-500 ease-in-out ${
          navbarOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 lg:opacity-100"
        }`}
      >
        <div className="w-full flex flex-col lg:flex-row items-center justify-between">
          <ul
            className={`flex flex-col items-center lg:flex-row space-x-0 lg:space-x-8 space-y-3 lg:space-y-0 ${
              navbarOpen ? "my-5 lg:my-0" : "my-0"
            }`}
          >
            {navbar.start.map((link) => (
              <li key={link.text} className="font-semibold text-text-tertiary">
                <Link href={link.section}> {link.text} </Link>
              </li>
            ))}
          </ul>
          <ul
            className={`flex flex-col lg:flex-row space-x-0 lg:space-x-3 space-y-4 lg:space-y-0 ${
              navbarOpen ? "mb-2 lg:mb-0" : "mb-0"
            }`}
          >
            {navbar.end.map((button) => (
              <li key={button.text}>
                <Button
                  text={button.text}
                  type={button.type}
                  redirectTo={button.redirectTo}
                  styles="pt-3 pr-4 pb-3 pl-4"
                ></Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
