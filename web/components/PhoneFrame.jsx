import React from "react";
import Image from "next/legacy/image";

const PhoneFrame = ({ videoSrc }) => {
  return (
    <div
      className="w-full h-auto scale-75"
      style={{position: "relative"}}
    >
      <video
        className=""
        playsInline
        muted
        loop
        src={videoSrc}
      ></video>
      <Image
        className="w-full h-auto -rotate-45 scale-75"
        src="../assets/rectangle.svg"
        alt="Phone Frame"
        objectFit="contain"
        layout="fill"
      />
    </div>
  );
};

export default PhoneFrame;
