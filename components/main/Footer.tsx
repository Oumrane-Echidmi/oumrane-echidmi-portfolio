import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <a href="https://github.com/Oumrane-Echidmi" target="_blank" rel="noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a href="https://www.instagram.com/imrane_echidmi/" target="_blank" rel="noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </a>
                    <a href="https://www.linkedin.com/in/oumrane-echidmi1/" target="_blank" rel="noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact</div>
                    <a href="mailto:imran.lati1986@gmail.com" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">imran.lati1986@gmail.com</span>    
                    </a>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Echidmi Oumrane 2026 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer