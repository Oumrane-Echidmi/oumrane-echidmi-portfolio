import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  const CardContent = (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer hover:scale-105 transition-transform duration-300">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        
        {link && (
            <div className="mt-4 block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold cursor-pointer">
                View on GitHub →
            </div>
        )}
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noreferrer" className="block w-full">
      {CardContent}
    </a>
  ) : (
    CardContent
  );
};

export default ProjectCard;
