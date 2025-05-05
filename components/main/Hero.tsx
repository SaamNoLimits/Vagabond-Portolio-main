import React from "react";
import HeroContent from "../sub/HeroContent";
import Projects from "./Projects";
import Skills from "./Skills";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative flex flex-col w-screen" id="about-me">
      
      {/* Background video fixed */}
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 h-full w-full object-cover z-0"
      >
        <source src="/Vaga.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <HeroContent />
        <Projects />
        <Skills />
        {/* Add more sections if needed */}
      </div>
      
    </div>
  );
};

export default Hero;
