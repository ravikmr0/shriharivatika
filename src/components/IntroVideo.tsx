import React from "react";

const YouTubeVideo: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-10 px-4">
      <div className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px] rounded-xl overflow-hidden shadow-xl border border-gray-300">
        <div className="relative pt-[56.25%]"> {/* 16:9 ratio */}
          <iframe
            src="https://www.youtube.com/embed/s0w7XiQ74_U?autoplay=1&mute=1&controls=1&rel=0"
            title="YouTube video"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder={0}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideo;
