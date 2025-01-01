"use client";

import MediaStats from "@/components/mediaStats";
import React from "react";

const videoUrls = [
  "https://player.vimeo.com/video/1043202806?badge=0&autopause=0&player_id=0&app_id=58479", // Vimeo video 1
  "https://player.vimeo.com/video/1043202539?badge=0&autopause=0&player_id=0&app_id=58479", // Vimeo video 2
  "https://player.vimeo.com/video/1043202772?badge=0&autopause=0&player_id=0&app_id=58479", // Vimeo video 3
  "https://player.vimeo.com/video/1043202612?badge=0&autopause=0&player_id=0&app_id=58479", // Vimeo video 4
];

const MediaPage = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      {/* Header */}
      <h1 className="sm:text-6xl text-5xl font-bold text-left text-default-700 mb-4">
        Creative Portfolio
      </h1>
      <p className="text-lg text-default-500 mb-8">
        Over the course of 6 years, I have worked on a variety of different video related projects. I've had the opportunity to work with a variety of clients across different industries, creating content that not only looks great but also aligns with their goals and strategies. Projects were completed using Adobe Premiere Pro and Adobe After Effects.
      </p>

      <MediaStats />

      {/* 2x2 Grid of Video Boxes with Vimeo Embeds */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
        {videoUrls.map((url, index) => (
          <div key={index} className="relative w-full" style={{ paddingTop: "56.25%" }}>
            {/* Aspect Ratio Container */}
            <div className="absolute top-0 left-0 w-full h-full">
              <iframe
                className="w-full h-full"
                src={url}
                title={`Vimeo video ${index + 1}`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPage;
