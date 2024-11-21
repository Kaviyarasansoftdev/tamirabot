

import React from "react";

const ScrollingLogos = () => {
  return (
    <div className="py-6 bg-white">
      <div className="relative overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-scroll">
          {[...Array(20)].map((_, index) => (
            <img
              key={index}
              src="/assets/images/logo_tamirabot.png"
              alt="Tamirabot Logo"
              className="h-16 mx-6"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingLogos;
