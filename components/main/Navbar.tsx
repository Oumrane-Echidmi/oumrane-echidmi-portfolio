import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { RxLinkedinLogo } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="w-full h-auto min-h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 md:px-10">
      <div className="w-full h-full flex flex-wrap items-center justify-between m-auto px-[10px] py-2 relative">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center z-50"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin drop-shadow-[0_0_15px_rgba(112,66,248,0.8)]"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Echidmi Oumrane
          </span>
        </a>

        <div className="w-full md:w-auto h-full flex flex-row items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 mt-2 md:mt-0 order-3 md:order-none">
          <div className="flex items-center justify-between w-full md:w-[500px] h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 gap-3">
            <a href="#about-me" className="cursor-pointer text-sm md:text-base whitespace-nowrap">
              About me
            </a>
            <a href="#skills" className="cursor-pointer text-sm md:text-base whitespace-nowrap">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer text-sm md:text-base whitespace-nowrap">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 items-center z-50">
          {Socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              key={social.name}
              className="cursor-pointer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
          <a
             href="https://www.linkedin.com/in/oumrane-echidmi1/"
             target="_blank"
             rel="noreferrer"
             className="cursor-pointer text-white"
          >
             <RxLinkedinLogo size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
