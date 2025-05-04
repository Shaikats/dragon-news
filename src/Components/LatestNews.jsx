import React from "react";
import Marquee from "react-fast-marquee";

export const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-2">
      <p className="text-base-100 bg-secondary p-2">Latest</p>
      <Marquee className="flex gap-5">
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et
        </p>

        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et
        </p>

        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
