import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        
       
        <ProjectCard
          src="/cyb1.jpg"
          title="Interactive & Secure Websites"
          description="Crafted dynamic and secure web applications using React and Node.js. This project emphasizes user engagement, real-time updates, and built-in security best practices for a safe experience."
        />
        <ProjectCard
          src="/porto.png"
          title="Cybersec Space Theme"
          description="An immersive space-themed website designed for cybersecurity content. Integrates visual storytelling, animated SVGs, and interactive sections to educate users about online safety in a fun, engaging way."
        />
        <ProjectCard
          src="/iot.avif"
          title="Securing IoT Networks"
          description="Developed a robust security framework for IoT environments using intrusion detection systems, secure communication protocols, and automated monitoring tools to protect against real-time cyber threats and data breaches."
        />
        <ProjectCard
          src="/ai.avif"
          title="AI-Powered Threat Detection"
          description="Built an AI-driven system leveraging machine learning algorithms to detect anomalies and potential cyber threats in real-time. The solution enhances decision-making and automates threat analysis for improved network defense."
        />



 

      </div>
    </div>
  );
};

export default Projects;
