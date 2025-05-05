"use client";

import React from "react";

const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="/Vaga.webm" type="video/webm" />
    </video>
  );
};

export default BackgroundVideo;
