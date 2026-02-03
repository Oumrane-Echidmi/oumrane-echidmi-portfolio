import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[20]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-5 md:px-10">
        <ProjectCard
          src="/learnhub.png"
          title="LearnHub Platform"
          description="LearnHub is a modern, responsive web application built with React and Bootstrap 5 for online education. Users can browse courses, view detailed curriculum, check pricing plans, and contact support."
          link="https://github.com/Oumrane-Echidmi/learnhub-platform"
        />
        <ProjectCard
          src="/flask.png"
          title="Flask File Share"
          description="A modern, fast, and secure local file sharing application built with Flask. Designed to transfer files and folders effortlessly between devices on a local network."
          link="https://github.com/Oumrane-Echidmi/flask-file-share"
        />
      </div>
    </div>
  );
};

export default Projects;
