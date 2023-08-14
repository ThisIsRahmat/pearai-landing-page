import React from "react";
import Image from "next/image";
import { ReactSVG } from 'react-svg'

const PhoneFrame = ({ videoSrc }) => {
  return (
    <div
      className="py-1 px-4 mb-8"
      style={{position: "relative"}}
    >
      <ReactSVG
        src="/phone-frame.svg"
        alt="Phone Frame"
        objectFit="contain"
        layout="fill"
        className="scale-[.25]"
      >
        <video
          className="scale-[.35] translateZ-20px "
          playsInline
          muted
          loop
          controls
          src={videoSrc}
        ></video>
      </ReactSVG>
    </div>
  );
};

export default PhoneFrame;
