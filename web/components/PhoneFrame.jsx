import React from "react";
import Image from 'next/image';

const PhoneFrame = ({ videoSrc }) => {
  return (
    <div
      className="w-full h-auto -rotate-45 scale-75"
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
        src="/phone-frame.svg"
        alt="Phone Frame"
        objectFit="contain"
        layout="fill"
      />
    </div>
  );
};

export default PhoneFrame;
